<template>
  <div class="xrow flex-wrap aq-custome-el-form">
    <!-- <div class="w-full xcol h-auto text-justify">
      <div class="p-10 bg-s-4">data:{{data}}</div>
      <div class="p-10 bg-p-4">uiConfig:{{uiConfig}}</div>
      <div class="p-10 bg-w-4">innerState:{{innerState}}</div>
      <div class="p-10 bg-d-4">computedElementGroup:{{computedElementGroup}}</div>
    </div> -->
    <div v-if="vesselConfig.type =='default'" class="xrow flex-grow-1 flex-shrink-1 flex-wrap">
      <div class="w-0 p-10 flex-grow-1 flex-shrink-1 xrow flex-wrap items-start">
        <div v-for="(item,key) in computedElementGroup" 
          :key="key" 
          class="xrow flex-wrap" 
          :class="[item.outerClass||'items-center mb-5 last:mb-0']"
          :style="item.outerStyle||{}">
          <span v-if="item.label" class="w-auto whitespace-nowrap mr-5" 
            :class="[item.labelClass]" 
            :style="[item.labelStyle]">
            {{item.label}}
          </span>
          <component 
            v-model="innerState[key]" 
            :is="computedSubComponents[item.component]" 
            v-bind="item.binds||{}"
            @change="dataUpdate(key,$event)">
          </component>
          <span v-if="item.append" class="w-auto whitespace-nowrap mx-5">{{item.append}}</span>
        </div>
        <div v-if="needCheck" class="xrow items-center justify-between w-full mt-10">
          <el-button size="small" @click="stateReset">取消</el-button>
          <el-button type="success" size="small" @click="dataUpdateByCheck">确定</el-button>
        </div>
      </div>
    </div>
    <div v-if="vesselConfig.type=='dialog'" class="w-0 flex-grow-1 h-auto flex-shrink-0 xrow flex-wrap justify-between items-center">
      <span class="font-bold text-xs">{{vesselConfig.label}}</span>
      <span @click="isExpand = true" class=" cursor-pointer select-none text-xs" v-html="vesselConfig.trigger||'OPEN'"></span>
      <el-dialog
        v-model="isExpand"
        v-bind="Ramda.mergeAll([{
          showClose:false,
          width:'90%',
          customClass:'aq-custome-el-form-dialog',
        },vesselConfig.prop||{}])">
        <div class="w-full flex-grow-1 h-auto flex-shrink-1 xrow flex-wrap items-start">
          <div v-for="(item,key) in computedElementGroup" 
            :key="key" 
            class="xrow flex-wrap" 
            :class="[item.outerClass||'items-center mb-5 last:mb-0']"
            :style="item.outerStyle||{}">
            <span v-if="item.label" class="w-auto whitespace-nowrap mr-5" 
              :class="[item.labelClass]" 
              :style="[item.labelStyle]">
              {{item.label}}
            </span>
            <component 
              v-model="innerState[key]" 
              :is="computedSubComponents[item.component]" 
              v-bind="item.binds||{}"
              @change="dataUpdate(key,$event)">
            </component>
            <span v-if="item.append" class="w-auto whitespace-nowrap mx-5">{{item.append}}</span>
          </div>
          <div v-if="needCheck" class="xrow items-center justify-between w-full pt-10 mt-10 border-t">
            <el-button size="small" @click="stateReset">取消</el-button>
            <el-button type="success" size="small" @click="dataUpdateByCheck">确定</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
    <div v-if="vesselConfig.type=='drawer'" class="w-0 flex-grow-1 h-auto flex-shrink-0 xrow flex-wrap justify-between items-center">
      <span class="font-bold text-xs">{{vesselConfig.label}}</span>
      <span @click="isExpand = true" class=" cursor-pointer select-none text-xs" v-html="vesselConfig.trigger||'OPEN'"></span>
      <el-drawer
        v-model="isExpand"
        v-bind="Ramda.mergeAll([{
          showClose:false,
          size:'50%',
          direction:'rtl',
          customClass:'aq-custome-el-form-drawer'
        },vesselConfig.prop||{}])">
          <aq-scroll-view class="h-full">
            <div class="w-full p-10 flex-grow-1 h-auto flex-shrink-1 xrow flex-wrap items-start content-start">
              <div v-for="(item,key) in computedElementGroup" 
                :key="key" 
                class="xrow flex-wrap" 
                :class="[item.outerClass||'items-center mb-5 last:mb-0']"
                :style="item.outerStyle||{}">
                <span v-if="item.label" class="w-auto whitespace-nowrap mr-5" 
                  :class="[item.labelClass]" 
                  :style="[item.labelStyle]">
                  {{item.label}}
                </span>
                <component 
                  v-model="innerState[key]" 
                  :is="computedSubComponents[item.component]" 
                  v-bind="item.binds||{}"
                  @change="dataUpdate(key,$event)">
                </component>
                <span v-if="item.append" class="w-auto whitespace-nowrap mx-5">{{item.append}}</span>
              </div>
              <div v-if="needCheck" class="xrow items-center justify-between w-full pt-10 mt-10 border-t">
                <el-button size="small" @click="stateReset">取消</el-button>
                <el-button type="success" size="small" @click="dataUpdateByCheck">确定</el-button>
              </div>      
            </div>
          </aq-scroll-view>
      </el-drawer>
    </div>    
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { defineComponent, ref, computed, getCurrentInstance, watch, nextTick} from 'vue';
import type { PropType, ComponentPublicInstance } from "vue";
import CTF from "./types";
import {
  ElButton, ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
  ElColorPicker, ElRadioGroup, ElRadioButton, ElImage, ElDrawer, ElDialog 
} from 'element-plus';
import { useDataPluckToInnerState, useInnerStateReforgeToData } from "./use.lib";

export default defineComponent({
  name:'aq-custome-el-form',
  props:{
    // 需要被处理加工的数据
    data:{
      type:Object as PropType<CTF.Data>,
      default:()=>({})
    },    
    // ui 守卫函数，负责控制ui的呈现 ui-config
    uiConfig:{
      type:Object as PropType<CTF.UiConfig>,
      default:()=>({})
    },
    vesselConfig:{
      type:Object as PropType<CTF.DisplayConfig>,
      default:()=>({type:'default',label:'设置:',trigger:'OPEN'}),
    },
    subComponents:{
      type:Object as PropType<CTF.SubComponent>,
      default:()=>({})
    },
    needCheck:{
      type:Boolean,
      default:false,
    },
    // slot 配置
    slotOption:{
      type:Object as PropType<CTF.SlotConfig>,
      default:()=>({
        component:'',
        mw:100,
      })
    }
  },
  emits:['update:data'],
  setup(props,context) {
    const Ramda = R;
    const isExpand = ref(false);
    const { proxy } = getCurrentInstance() as { proxy: ComponentPublicInstance}; // 实例对象
    let innerState = useDataPluckToInnerState( props.uiConfig.elementGroup , R.clone(props.data)); // 内部数据
    const exclude = ref(['ElSelect','aq-custome-el-form','aq-array-data']);
    // 如果切换状态太为false时，则会重置数据
    watch(()=>isExpand.value,function(n,o){ !n && stateReset()});
    // 组装基础的内置子组件
    const computedSubComponents = computed(()=>{
      return R.mergeAll([{ 
        ElButton, ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
        ElColorPicker, ElRadioGroup, ElRadioButton, ElImage, ElDrawer, ElDialog  
      },props.subComponents])
    })
    // 根据 处理数据 ui配置 决定当前UI的显示
    const computedElementGroup = computed(()=>{
      //console.log(props.data,'computedElementGroup')      
      // 此处的入参数，必须复制，避免内部修改，影响到外部原始值的触发错误情况
      const renderElementGroup = props.uiConfig.uiGuardian ? 
      props.uiConfig.uiGuardian ( R.clone(props.uiConfig.elementGroup), R.clone(props.data) ) as CTF.ElementGroup || props.uiConfig.elementGroup :
      props.uiConfig.elementGroup;
      // 当界面配置或数据发生变化时，需要重置 innerState; 且以外部数据为准;
      if(!props.needCheck){
        let state = useDataPluckToInnerState(renderElementGroup , props.data);
        innerState.value = R.mergeDeepRight(innerState.value,state.value);
      }
      //console.log(innerState.value, 'computedElementGroup end');
      /* 
       * 如果发现 守卫过滤器 修正后的配置key名与原始输入的key名内容不相符时，表明有新增或者删除, 那么将针对新增可能的数据再做一次增补，重新获取原始数据中的对应值
       * 1.ui守卫过滤器发现 props.uiConfig 与 渲染 renderUiConfig 差集不为0时表示有差异，
       * 2.且并非是因为 props.uiConfig 多余 renderUiConfig 而导致的差异，表示是新增操作或者替换操作。
       * 3.发现这种变更后，会尝试重新拉取缺少的数值扩展 innerState 里的缓存数值，并且更新数据。
      */
      // let [renderKeys,configKeys] = [ R.keys(renderElementGroup),R.keys(props.uiConfig.elementGroup) ];
      // if(R.symmetricDifference(renderKeys,configKeys).length > 0 && renderKeys.length >= configKeys.length){
      //   let state = useDataPluckToInnerState(renderElementGroup , props.data);
      //   innerState.value = R.mergeDeepRight(innerState.value,state.value);
      // }
      return renderElementGroup
    });
    function dataUpdate( key:string|number , value:any ){
      let old = R.path(( key as string ).split('.'),props.data);
      let state = props.uiConfig.beforeUpdate ? 
      props.uiConfig.beforeUpdate( (key as string), value, old, R.clone(innerState.value) ) : innerState.value;
      if(!props.needCheck){
        let data = useInnerStateReforgeToData( computedElementGroup.value ,state);
        console.log({data:R.mergeDeepRight(props.data,data),extra:computedElementGroup.value[key].extra||{}})
        context.emit('update:data',{data:R.mergeDeepRight(props.data,data),extra:computedElementGroup.value[key].extra})
      }else{
        innerState.value = state;
        console.log(innerState.value,state)
      }
    }
    // 确定按钮提交数据
    function dataUpdateByCheck(){      
      let data = useInnerStateReforgeToData( computedElementGroup.value ,innerState.value);
      console.log({data:R.mergeDeepRight(props.data,data),extra:props.uiConfig.extra||{}});
      context.emit('update:data',{data:R.mergeDeepRight(props.data,data),extra:props.uiConfig.extra||{}});
      nextTick(function(){ isExpand.value = false })
    }
    // 重置内部数据
    function stateReset(){      
      innerState.value = useDataPluckToInnerState( props.uiConfig.elementGroup , R.clone(props.data)).value; // 内部数据
      nextTick(function(){ isExpand.value = false })
    }
    return {
      Ramda,
      exclude,
      proxy,
      innerState,
      computedElementGroup,
      computedSubComponents,
      isExpand,
      stateReset,
      dataUpdateByCheck,
      dataUpdate
    }
  },
})
</script>

<style>
@import url('./theme.css/custome-theme.css');
</style>