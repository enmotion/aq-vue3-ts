<template>
  <div class="xcol flex-gorw-1">
    <div class="xrow w-full flex-grow-1 h-50 bg-white border-b border-dark-4 px-10">
      <span class="p-5 xrow justify-start items-center w-6/12">
        
      </span>
      <span class="p-5 xcol justify-start items-center w-6/12">
        
      </span>
    </div>
    <div class="h-full w-full bg-white xrow flex-wrap justify-start">    
      <div class="w-6/12 bg-dark-2 border-r border-dark-2 p-10 xcol text-justify">
        {{handingData}}
      </div>
      <div class="w-6/12 border-r border-dark-2 p-10 xcol">
        <aq-scroll-view class="flex-grow-1">
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
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";
import aqCustomeElForm from '@src/parts/aq-componets/aq-custome-el-form/aq-custome-el-form.vue';

export default defineComponent({
  name:'custome-form',
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton ,aqCustomeElForm },
  setup(props,context) {
    const handingData = ref({
      name:'mod',
      info:{
        age:12,
        link:'www.baidu.com',
        body:{
          eye:'blue',
          skine:'yellow',
        }
      }
    });
    const uiOption = ref({
      'name':{
        component:'input',
        componentBind:{}
      },
      'info.link':{
        component:'input',
        componentBind:{}
      },
      'info.body.eye':{
        component:'input',
        componentBind:{}
      },
    })
    return {
      handingData,
      uiOption
    }
  },
})
</script>
