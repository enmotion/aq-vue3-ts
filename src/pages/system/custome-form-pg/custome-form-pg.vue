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
              class="w-full p-10 flex-grow-0 bg-gray-200 h-auto items-start"
              parent-path="a.c"
              :data="handingData"
              :vessel-config="{
                type:'dialog',
                label:'更多设置：弹窗',
                trigger:`<span class='iconfont icon-setting py-5 px-10 bg-d-10 rounded-sm text-xs xrow items-center justify-center text-white whitespace-nowrap'>设置</span>`,
                prop:{width:'90%'}
              }"
              :ui-config="uiConfigAT"
              @update:data="handingData = $event.data">
            </aq-custome-el-form>
            <aq-custome-el-form
              class="w-2/12 p-10 flex-grow-1 bg-gray-200 items-start border"
              parent-path="a.c"
              :data="handingData"
              :need-check="true"
              :vessel-config="{
                type:'drawer',
                label:'更多设置：',
                trigger:`<span class='iconfont icon-setting py-5 px-10 bg-d-10 rounded-sm text-xs xrow items-center justify-center text-white whitespace-nowrap'>设置</span>`,
                prop:{size:'40%'}
              }"
              :ui-config="uiConfigAT"
              @update:data="handingData =  $event.data">
            </aq-custome-el-form>
            <aq-custome-el-form
              class="px-5 flex-grow-1 w-5/12 items-start border-l"
              parent-path="b.c"
              :data="handingData" 
              :ui-config="uiConfigBT"
              :sub-components="components"
              @update:data="handingData =  $event.data">
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
import aqCustomeElForm from '@src/parts/aq-componets/aq-custome-el-form/aq-custome-el-form.vue';
import aqMonacoEditor from '@src/parts/aq-componets/aq-monaco-editor/aq-monaco-editor.vue';
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";
import { uiConfigA, uiConfigB } from './ui-config';

export default defineComponent({
  name:'custome-form',
  components:{},
  setup(props,context) {
    const drawerOpen = ref(false);
    const components = shallowRef({ aqMonacoEditor });
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
