<template>
  <div class="h-full w-full bg-white xrow">
    <div class="w-6/12 bg-dark-2 border-r border-dark-2 p-10 xcol">
      <span class="h-40 bg-d-10 xrow items-center p-10 text-white text-sm font-bold uppercase rounded select-none">
        transition
      </span>
      <div class="xrow flex-wrap my-10 p-10 items-center h-auto bg-dark-2 justify-start border border-dark-2 rounded-md">
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
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-6/12">
          <span class="text-dark-24 font-bold mr-5 w-80 text-left">Mode:</span>
          <el-select v-model="transitionMode" size="small" class="w-80">
            <el-option v-for="it in transitionModeOptions" 
              :key="it.label"
              :label="it.label" 
              :value="it.value">
            </el-option>
          </el-select>
        </span>
        
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-3/12">
          <span class="text-dark-24 font-bold mr-5 w-80 text-left">AbsoluteCell:</span>
          <el-switch size="small" v-model="transitionAbsoluteCell"></el-switch>
        </span>
        <span class="p-5 flex-grow-1 xrow justify-start items-center w-3/12">
          <span class="text-dark-24 font-bold mr-5">Trigger:</span>
          <el-switch size="small" v-model="transitionSwitch"></el-switch>
        </span>
      </div>
      <div class="xrow flex-wrap -mx-5 -my-5">
        <div v-for="item in transitionItems" :key="item.name" class="w-4/12 p-5 xcol h-120">
          <div class="flex-grow-1 rounded overflow-hidden">
            <aq-transition :name="item.name" :mode="transitionMode" :timing="transitionTiming" :duration="transitionDuration" :absolute-cell="transitionAbsoluteCell">
              <div v-if="transitionSwitch" :key="item.name+'-on'" class="w-full to-cc h-120 bg-black flex-grow-1 flex text-lg font-bold text-white uppercase items-center justify-center rounded transition-container">{{item.name}}-on</div>
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
      <div class="xrow my-10 bg-dark-2 border border-dark-2 rounded-md p-10 items-center">
        <el-button size="small" type="success" @click="addGroupItems">新增</el-button>
      </div>
      <aq-transition-group>
        <div v-for="(item,index) in TransitionGroupItems" :key="item.key" class="item" @click="removeGroupItem(index)">
          <!-- <span @click="removeGroupItem(index)" class="flex-grow-1 btn bg-p-10 text-lg font-bold text-white items-center justify-center flex rounded-md">{{item.name}}</span> -->
        </div>
      </aq-transition-group>
    </div>
  </div>
</template>
<style scoped>
.item {
  display: inline-block;
  width: 20%;
  height: 50px;
  background-color: #f30000;
  border: 1px solid #666;
  box-sizing: border-box;
}
</style>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";

export default defineComponent({
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton },
  setup(props,context) {
    let transitionSwitch = ref(true);
    let transitionAbsoluteCell = ref(true);
    let transitionMode = ref('default');
    let transitionTiming = reactive({enter:'ease',leave:'ease'});
    let transitionItemIndex = ref(0)
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
    let TransitionGroupItems = reactive([] as {name:string,key:number}[]);
    function addGroupItems(){
      transitionItemIndex.value++;
      TransitionGroupItems.push({name:'item-'+transitionItemIndex.value,key:Date.now()});
    }
    function removeGroupItem(index:number){
      TransitionGroupItems.splice(index,1);
    }
    return {
      transitionSwitch,
      transitionAbsoluteCell,
      transitionMode,
      transitionModeOptions,
      transitionItems,
      transitionTiming,
      transitionTimingOptions,
      transitionDuration,
      TransitionGroupItems,
      addGroupItems,
      removeGroupItem
    }
  },
})
</script>
