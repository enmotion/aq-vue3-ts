<template>
  <div class="h-full w-full bg-white xrow">
    <div class="w-6/12 bg-dark-2 border-r border-dark-2 p-10 xcol">
      <span class="h-40 bg-d-10 xrow items-center p-10 text-white text-sm font-bold uppercase rounded select-none">
        transition
      </span>
      <div class="xrow my-10 items-center h-30 bg-light-10 justify-end">
        <span class="mr-10">
          <span class="text-dark-24 font-bold mr-5">Duration:</span>
          <el-input-number v-model="transitionDuration.enter" class="w-60 mr-5" size="small" :controls="false"></el-input-number>
          <el-input-number v-model="transitionDuration.leave" class="w-60" size="small" :controls="false"></el-input-number>
        </span>
        <span class="mr-10">
          <span class="text-dark-24 font-bold mr-5">Mode:</span>
          <el-select v-model="transitionMode" size="small" class="w-80">
            <el-option v-for="it in transitionModeOptions" 
              :key="it.label"
              :label="it.label" 
              :value="it.value">
            </el-option>
          </el-select>
        </span>
        <span class="">
          <span class="text-dark-24 font-bold mr-5">Trigger:</span>
          <el-switch size="small" v-model="transitionSwitch"></el-switch>
        </span>
      </div>
      <div class="xrow -mx-5 -my-5">
        <div v-for="item in transitionItems" :key="item.name" class="w-6/12 xcol p-5">
          <aq-transition :name="item.name" :mode="transitionMode" :duration="transitionDuration">
            <div v-if="transitionSwitch" :key="item.name+'-on'" class="h-100 bg-black flex-grow-1 flex text-lg font-bold text-white uppercase items-center justify-center rounded">{{item.name}}-on</div>
            <div v-if="!transitionSwitch" :key="item.name+'-off'" class="h-100 bg-s-10 flex-grow-1 flex text-lg font-bold text-white uppercase items-center justify-center rounded">{{item.name}}-off</div>
          </aq-transition>
        </div>
      </div>
    </div>
    <div class="w-6/12 border-r border-dark-2 p-10 xcol">
      <span class="h-40 bg-p-10 xrow items-center p-10 text-white text-sm font-bold uppercase rounded select-none">
        transition-group
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber } from "element-plus";

export default defineComponent({
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber },
  setup(props,context) {
    let transitionSwitch = ref(true);
    let transitionMode = ref('default');
    let transitionModeOptions = reactive([
      {label:'defalut',value:'default'},
      {label:'in-out',value:'in-out'},
      {label:'out-in',value:'out-in'},
    ]);
    let transitionDuration = reactive({
      enter:1000,
      leave:1000,
    })
    let transitionItems = reactive([
      {name:'fade'},
      {name:'scrolldown'}
    ])
    return {
      transitionSwitch,
      transitionMode,
      transitionModeOptions,
      transitionItems,
      transitionDuration
    }
  },
})
</script>
