<template>
  <div class="xcol p-5">
    <span v-for="(item,index) in menu" :key="index" 
      class="h-30 w-30 
      flex items-center text-lg justify-center border border-dark-2 shadow-sm rounded last:mb-0 
      hover:text-white cursor-pointer hover:bg-p-10 hover:border-1 hover:border-p-2
      bg-dark-2 text-black duration-300 transition-all iconfont"
      @click="subClick($event,item.method)"
      :class="[item.icon]" style="margin-bottom:2px">
    </span>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { PropType, VueElement } from "vue";
import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
import { MenuItem } from "types/bpmn-editor/controlDashBoradConfig";
import { defineComponent } from 'vue';

export default defineComponent({
  props:{
    menu:{
      type:Array as PropType<MenuItem[]>,
      default:()=> elementsMenu[0].children
    },
    BpmnIns:{
      type:Object as PropType<VueElement>,
      default:()=>({} as PropType<VueElement>)
    }
  },
  setup() {
    
  },
  methods:{
    subClick($event:Event,method?:{name:string,params?:any}){
      const vm = this;
      vm.$emit('buttonClick',R.mergeAll([{event:$event},method||{}]));
    }
  }
})
</script>
