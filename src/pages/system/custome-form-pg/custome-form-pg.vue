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
      <div class="w-6/12 bg-dark-2 border-r border-dark-2 p-10 xcol text-justify">
        {{handingData}}
      </div>
      <div class="w-6/12 border-r border-dark-2 p-10 xrow flex-wrap items-start">
        <aq-scroll-view class="flex-grow-1 w-full h-full">
          <aq-custome-el-form 
            :data="handingData" 
            :ui-config="uiOption"
            :ui-guard="uiGuard">
          </aq-custome-el-form>
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
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton, inputEmits } from "element-plus";
import aqCustomeElForm from '@src/parts/aq-componets/aq-custome-el-form/aq-custome-el-form.vue';

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
          eye:'blue',
          skin:'yellow',
        }
      }
    });
    const uiOption = ref({
      'name':{
        label:'姓名:',
        append:'px',
        component:'ElInput',
        componentBind:{}
      },
      'info.age':{
        label:'姓名:',
        append:'px',
        component:'ElInputNumber',
        componentBind:{}
      },
      'info.link':{
        label:'链接:',
        append:'internet',
        component:'ElInput',
        componentBind:{}
      },
      'info.body.eye':{
        label:'瞳色:',
        component:'ElInput',
        componentBind:{}
      },
    })
    function uiGuard(ui:any,data:any){
      console.log('sss',data);
      if(data.info.age>20){
        data.info.body.skin='pink'
        ui['info.age'].component='switch';
        ui['info.body.skin']={
          component:'input',
          componentBind:{}
        }
        return ui
      }
      return ui
    }
    return {
      handingData,
      uiOption,
      uiGuard
    }
  },
})
</script>
