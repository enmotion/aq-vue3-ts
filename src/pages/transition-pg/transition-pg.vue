<template>
  <div class="xrow w-full flex-grow-1 h-50 bg-white border-b border-dark-4 px-10">
    <span class="p-5 xrow justify-start items-center w-6/12">
        <span class="text-dark-24 font-bold mr-5 w-80 text-left">Duration:</span>
        <el-input-number v-model="transitionDuration.enter" class="w-60 flex-grow-1 mr-5" size="small" :controls="false"></el-input-number>
        <el-input-number v-model="transitionDuration.leave" class="w-60 flex-grow-1" size="small" :controls="false"></el-input-number>
      </span>
      <span class="p-5 xrow justify-start items-center w-6/12">
        <span class="text-dark-24 font-bold mr-5 w-80 text-left">Timing:</span>
        <el-select v-model="transitionTiming.enter" size="small" class="w-60 flex-grow-1 mr-5">
          <el-option v-for="it in transitionTimingOptions" 
            :key="it.label"
            :label="it.label" 
            :value="it.value">
          </el-option>
        </el-select>
        <el-select v-model="transitionTiming.leave" size="small" class="w-60 flex-grow-1">
          <el-option v-for="it in transitionTimingOptions" 
            :key="it.label"
            :label="it.label" 
            :value="it.value">
          </el-option>
        </el-select>
      </span>
  </div>
  <div class="h-full w-full bg-white xrow flex-wrap justify-start">    
    <div class="w-6/12 bg-dark-2 border-r border-dark-2 p-10 xcol">
      <span class="h-40 bg-d-10 xrow items-center p-10 text-white text-sm font-bold uppercase rounded select-none">
        transition
      </span>
      <div class="xrow flex-wrap my-10 p-5 items-center h-auto bg-dark-2 justify-start border border-dark-2 rounded-md">
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-5/12">
          <span class="text-dark-24 font-bold mr-5 w-40 text-left">Mode:</span>
          <el-select v-model="transitionMode" size="small" class="w-80">
            <el-option v-for="it in transitionModeOptions" 
              :key="it.label"
              :label="it.label" 
              :value="it.value">
            </el-option>
          </el-select>
        </span>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-2/12">
          <span class="text-dark-24 font-bold mr-5 w-80 text-left">StaticHeight:</span>
          <el-switch size="small" v-model="staticHeigh"></el-switch>
        </span>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-2/12">
          <span class="text-dark-24 font-bold mr-5 w-80 text-left">AbsoluteCell:</span>
          <el-switch size="small" v-model="transitionAbsoluteCell"></el-switch>
        </span>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-2/12">
          <span class="text-dark-24 font-bold mr-5">Trigger:</span>
          <el-switch size="small" v-model="transitionSwitch"></el-switch>
        </span>
      </div>
      <div class="xrow flex-wrap -mx-5 -my-5">
        <div v-for="item in transitionItems" :key="item.name" class="w-4/12 p-5 xcol" :class="[staticHeigh?'h-130':'']">
          <div class="flex flex-grow-1 w-full bg-dark-32 flex-shrink-0 rounded overflow-hidden">
            <aq-transition :name="item.name" :mode="transitionMode" :timing="transitionTiming" :duration="transitionDuration" :absolute-cell="transitionAbsoluteCell">
              <div v-if="transitionSwitch" :key="item.name+'-on'" class="w-full to-cc h-120 bg-p-10 flex-grow-1 flex text-lg font-bold text-white uppercase items-center justify-center rounded transition-container">{{item.name}}-on</div>
              <div v-if="!transitionSwitch" :key="item.name+'-off'" class="w-full to-cc h-120 bg-s-10 flex-grow-1 flex text-lg font-bold text-white uppercase items-center justify-center rounded transition-container">{{item.name}}-off</div>
            </aq-transition>
          </div>
        </div>
      </div>
    </div>
    <div class="w-6/12 border-r border-dark-2 p-10 xcol">
      <span class="h-40 bg-p-10 xrow items-center p-10 text-white text-sm font-bold uppercase rounded select-none">
        transition-group
      </span>
      <div class="xrow my-10 bg-dark-2 border border-dark-2 rounded-md p-5 items-center">
        <el-button size="small" type="success" class="ml-5" @click="addGroupItems">新增</el-button>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-6/12">
          <span class="text-dark-24 font-bold mr-5 w-120 text-left">TransitionTypeName:</span>
          <el-select v-model="transitionGroupTypeName" size="small" class="w-80">
            <el-option v-for="it in transitionItems" 
              :key="it.name"
              :label="it.name" 
              :value="it.name">
            </el-option>
          </el-select>
        </span>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-6/12">
          <span class="text-dark-24 font-bold mr-5 w-120 text-left">ItemDisplay:</span>
          <el-select v-model="transitionGroupItemDisplay" size="small" class="w-80">
            <el-option v-for="it in transtionGroupItemDisplayTypes" 
              :key="it.name"
              :label="it.name" 
              :value="it.name">
            </el-option>
          </el-select>
        </span>
      </div>
      <div class="-mr-10 flex flex-grow-1 -m-5">
        <aq-scroll-view :scroll-bar-props="{wrapClass:'pr-10'}">
          <aq-transition-group 
            :name="transitionGroupTypeName" 
            :timing="transitionTiming" 
            :item-display="transitionGroupItemDisplay"
            :duration="transitionDuration">
            <div v-for="(item,index) in TransitionGroupItems" :key="item.key" 
              class="p-5 h-100 to-tc flex-grow-1"
              :class="[transitionGroupItemDisplay=='block'?'w-full':'w-2/12']"
              @click="removeGroupItem(index)">
              <span class="flex h-full items-center justify-center bg-p-10 text-white font-bold text-sm flex-grow-1 btn rounded">{{item.name}}</span>
            </div>
          </aq-transition-group>
        </aq-scroll-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";

export default defineComponent({
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton },
  setup(props,context) {
    let transitionSwitch = ref(true);
    let transitionAbsoluteCell = ref(false);
    let staticHeigh = ref(true);
    let transitionMode = ref('default');
    let transitionTiming = reactive({enter:'ease',leave:'ease'});
    let transitionItemIndex = ref(0);
    let transitionGroupItemDisplay = ref('inline-block');
    let transitionGroupTypeName = ref('growy');
    let transitionTimingOptions = reactive([
      {label:'ease',value:'ease'},
      {label:'ease-out',value:'ease-out'},
      {label:'ease-in',value:'ease-in'},
      {label:'ease-in-out',value:'ease-in-out'},
    ]);
    let transitionModeOptions = reactive([
      {label:'defalut',value:'default'},
      {label:'in-out',value:'in-out'},
      {label:'out-in',value:'out-in'},
    ]);
    let transitionDuration = reactive({
      enter:300,
      leave:300,
    })
    let transitionItems = reactive([
      {name:'fade'},
      {name:'scrolldown'},
      {name:'zoomin'},
      {name:'scrollup'},
      {name:'scrollleft'},
      {name:'scrollright'},
      {name:'falling'},
      {name:'zoombounce'},
      {name:'flipx'},
      {name:'flipy'},
      {name:'growy'},
      {name:'growx'},
    ])
    let transtionGroupItemDisplayTypes = reactive([
      {name:'block'},
      {name:'inline-block'}
    ])
    let TransitionGroupItems = reactive([] as {name:string,key:number}[]);
    function addGroupItems(){
      transitionItemIndex.value++;
      TransitionGroupItems.push({name:'item-'+transitionItemIndex.value,key:Date.now()});
    }
    function removeGroupItem(index:number){
      TransitionGroupItems.splice(index,1);
    }
    return {
      staticHeigh,
      transitionSwitch,
      transitionAbsoluteCell,
      transitionMode,
      transitionModeOptions,
      transitionItems,
      transitionTiming,
      transitionTimingOptions,
      transitionDuration,
      TransitionGroupItems,
      transitionGroupTypeName,
      transitionGroupItemDisplay,
      transtionGroupItemDisplayTypes,
      addGroupItems,
      removeGroupItem
    }
  },
})
</script>
