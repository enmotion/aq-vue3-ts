<template>
  <div class="xrow flex-wrap">
    <div class="w-full xcol h-auto text-justify">
      <div class="p-10 bg-s-4">data:{{data}}</div>
      <div class="p-10 bg-p-4">uiConfig:{{uiConfig}}</div>
      <div class="p-10 bg-w-4">innerState:{{innerState}}</div>
      <div class="p-10 bg-d-4">computedUiConfig:{{computedUiConfig}}</div>
    </div>
    <div class="w-1/2 bg-s-10 p-10 flex-grow-1">
      <div v-for="(item,key) in computedUiConfig" 
        :key="key" 
        class="xrow xwarp items-center" 
        :class="[item.outerClass||'mb-5 last:mb-0']"
        :style="item.outerStyle||{}">
        <span v-if="item.label" class="w-auto whitespace-nowrap mr-5">{{item.label}}</span>
        <component v-model="innerState[key]" :is="item.component" @change="updataKeyValue(key,$event)"></component>
        <span v-if="item.append" class="w-auto whitespace-nowrap mx-5">{{item.append}}</span>
      </div>
    </div>
    <div class="xcol h-auto bg-p-10 flex-grow-0 flex-shrink-0">
      <slot>
        <span class="w-200"></span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { defineComponent, ref, reactive, onMounted, computed, unref } from 'vue';
import type { PropType } from "vue";
import type { UIConfigOptions, HandingData, SlotOption } from "./types";
import { 
  ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
  ElColorPicker, ElRadioGroup, ElRadioButton, ElImage 
} from 'element-plus';
import { usePluckDeepToKeyValue } from "./use.lib";

export default defineComponent({
  name:'aq-custome-el-form',
  components:{ 
    ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
    ElColorPicker, ElRadioGroup, ElRadioButton, ElImage 
  },
  props:{
    // 需要被处理加工的数据
    data:{
      type:Object as PropType<HandingData>,
      default:()=>({})
    },
    // 前置路径，当组件进入嵌套模式时，需要前置路径进行相关处理
    parentPath:{
      type:String as PropType<string>,
      default:''
    },
    // ui 守卫函数，负责控制ui的呈现 ui-config
    uiConfig:{
      type:Object as PropType<UIConfigOptions>,
      default:()=>({})
    },
    // ui 守卫函数，当数据或者ui发生变化时，会触发ui守卫，来更新相应的值 C:UIConfigOptions,D:HandingData
    uiGuard:{
      type:Function as PropType<<C,D>(ui:C,data:D)=>C|Promise<C>>,
      default:<C,D>(ui:C,data:D) => ui
    },
    // slot 配置
    slotOption:{
      type:Object as PropType<SlotOption>,
      default:()=>({
        component:'',
        mw:100,
      })
    }
  },
  setup(props,context) {
    // 平展内部数据，在数据更新时，可触发响应的值
    const { innerState } = usePluckDeepToKeyValue(props.data,props.uiConfig);
    function updataKeyValue(key:string|number,value:any){
      console.log(key,value)
    }
    // 根据 处理数据 ui配置 决定当前UI的显示
    const computedUiConfig = computed(()=>{
      // 此处的入参数，必须复制，避免内部修改，影响到外部原始值的触发错误情况
      const renderUiConfig = props.uiGuard(R.clone(props.uiConfig),R.clone(props.data)) as UIConfigOptions||props.uiConfig;
      // 如果发现 守卫过滤器 修正后的配置key名与原始输入的key名内容不相符时，表明有新增或者删除, 那么将针对新增可能的数据再做一次增补，重新获取原始数据中的对应值
      // 1.ui守卫过滤器发现 props.uiConfig 与 渲染 renderUiConfig 差集不为0时表示有差异，
      // 2.且并非是因为 props.uiConfig 多余 renderUiConfig 而导致的差异，表示是新增操作或者替换操作。
      // 3.发现这种变更后，会尝试重新拉取缺少的数值扩展 innerState 里的缓存数值，如果已经存在的数值，则会保持不变，如果是新增的则会从原数组中拉取。
      if(R.symmetricDifference(R.keys(renderUiConfig),R.keys(props.uiConfig)).length > 0 && renderUiConfig.length >= props.uiConfig.length){
        let state = usePluckDeepToKeyValue(props.data,renderUiConfig);
        innerState.value = R.mergeDeepRight(state.innerState.value,innerState.value);
      }
      return renderUiConfig
    })
    return {
      innerState,
      computedUiConfig,
      updataKeyValue
    }
  },
})
</script>
