<template>
  <div class="xcol flex-gorw-1">
    <div class="xrow w-full flex-grow-1 h-50 bg-white border-b border-dark-4 px-10">
      <span class="p-5 xrow justify-start items-center w-6/12">
        
      </span>
      <span class="p-5 xrow justify-start items-center  w-6/12">
        <div @click="handingData.info.age++" class="py-5 mr-5 px-10 rounded bg-d-10 text-white cursor-pointer">+</div>
        <div @click="handingData.info.age--" class="py-5 px-10 rounded bg-d-10 text-white cursor-pointer">-</div>
      </span>
    </div>
    <div class="h-full w-full bg-white xrow flex-wrap justify-start">    
      <div class="w-4/12 bg-dark-2 border-r border-dark-2 p-10 xcol text-justify">
        {{handingData}}
      </div>
      <div class="w-8/12 border-r border-dark-2 bg-gray-100 p-10 xrow flex-wrap">
        <aq-scroll-view class="flex-grow-1 w-full h-auto">
          <div class="xrow flex-wrap h-auto flex-grow-1 items-start justify-start content-start">
            <aq-custome-el-form
              class="mx-5 w-full flex-grow-0 bg-gray-200 h-auto items-start"
              parent-path="a.c"
              :data="handingData"
              :vessel-config="{
                type:'dialog',
                label:'更多设置：',
                trigger:`<span class='iconfont icon-setting w-20 h-20 bg-d-10 text-xs text-white p-5 b'>设置</span>`,
                prop:{width:'90%'}
              }"
              :ui-config="uiConfigAT"
              @update:data="handingData = $event">
            </aq-custome-el-form>
            <aq-custome-el-form
              class="mx-5 w-2/12 flex-grow-1 bg-gray-200 items-start"
              parent-path="a.c"
              :data="handingData"
              :vessel-config="{
                type:'drawer',
                label:'更多设置：',
                trigger:`<span class='iconfont icon-setting w-20 h-20 bg-d-10 text-xs text-white p-5 b'>设置</span>`,
                prop:{size:'40%'}
              }"
              :ui-config="uiConfigAT"
              @update:data="handingData = $event">
            </aq-custome-el-form>
            <aq-custome-el-form
              class="mx-5 flex-grow-1 w-5/12 items-start"
              parent-path="b.c"
              :data="handingData" 
              :ui-config="uiConfigBT"
              :sub-components="components"
              @update:data="handingData = $event">
            </aq-custome-el-form>
          </div>
        </aq-scroll-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent, ref,shallowRef, reactive } from 'vue';
import * as R from "ramda";
import { 
  ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
  ElColorPicker, ElRadioGroup, ElRadioButton, ElImage, ElDrawer, ElDialog
} from 'element-plus';
import aqCustomeElForm from '@src/parts/aq-componets/aq-custome-el-form/aq-custome-el-form.vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
import { uiConfigA, uiConfigB } from './ui-config';

export default defineComponent({
  name:'custome-form',
  components:{},
  setup(props,context) {
    const drawerOpen = ref(false);
    const components = shallowRef({
      ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
      ElRadioGroup, ElRadioButton, ElImage,
    })
    const handingData = ref({
      name:'mod',
      info:{
        age:18,
        link:'www.baidu.com',
        body:{
          size:'18cm',
          eye:'blue',
          skin:'yellow',
        }
      }
    });
    const uiConfigAT = ref(uiConfigA);
    const uiConfigBT = ref(uiConfigB);
    return {
      drawerOpen,
      handingData,
      components,
      uiConfigAT,
      uiConfigBT
    }
  },
})
</script>
