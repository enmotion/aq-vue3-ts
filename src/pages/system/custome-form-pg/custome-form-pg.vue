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
            :ui-config="uiOption">
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
import CTF from "@src/parts/aq-componets/aq-custome-el-form/types";

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
      uiGuard:function(ui:CTF.ElementGroup,data:any):CTF.ElementGroup{
        if(data.info.age>20){
          data.info.body.skin=data.info.age+'pink'
          ui['info.age'].component='ElSwitch'
          ui['info.body.skin']={
            label:'肤色:',
            component:'ElInput',
            binds:{}
          }
          return ui
        }else{
          data.info.body.skin='yellow'
        }
        return ui
      },
      elementGroup:{
        'name':{
          label:'姓名:',
          append:'px',
          component:'ElInput',        
          binds:{
            size:'small'
          }
        },
        'info.age':{
          label:'年龄:',
          append:'px',
          component:'ElInputNumber',
          binds:{
            size:'small',
            activeValue:18,
            inactiveValue:0,
            class:"flex-grow-1"
          }
        },
        'info.link':{
          label:'链接:',
          append:'internet',
          component:'ElInput',
          binds:{
            size:'small'
          }
        },
        'info.body.eye':{
          label:'瞳色:',
          component:'ElInput',
          binds:{
            size:'small'
          }
        },
      }
    } as CTF.UiConfig)
    return {
      handingData,
      uiOption,
    }
  },
})
</script>
