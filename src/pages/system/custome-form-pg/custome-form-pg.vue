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
      <div class="w-8/12 border-r border-dark-2 p-10 xrow flex-wrap items-start">
        <aq-scroll-view class="flex-grow-1 w-full h-full">
          <div class="xrow">
            <aq-custome-el-form
              class="mx-5"
              parent-path="a.c"
              :data="handingData" 
              :ui-config="uiConfigAT"
              @update:data="handingData = $event">
            </aq-custome-el-form>
            <aq-custome-el-form
              parent-path="b.c"
              :data="handingData" 
              :ui-config="uiConfigBT"
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
import { defineComponent, ref, reactive } from 'vue';
import * as R from "ramda";
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton, ElSlider } from "element-plus";
import aqCustomeElForm from '@src/parts/aq-componets/aq-custome-el-form/aq-custome-el-form.vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
import { uiConfigA, uiConfigB } from './ui-config';

export default defineComponent({
  name:'custome-form',
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton ,aqCustomeElForm },
  setup(props,context) {
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
      handingData,
      uiConfigAT,
      uiConfigBT
    }
  },
})
</script>
