<template>
  <div class="xcol w-30 rounded overflow-hidden bg-white">
    <span v-for="(item,index) in menu" :key="index" 
      class="h-30 w-30 
      flex items-center text-lg justify-center border-b border-dark-2 last:border-none shadow-sm last:mb-0 
      hover:text-d-10 cursor-pointer hover:bg-w-1 hover:border-1 hover:border hover:border-d-2
      bg-white text-black duration-300 transition-all iconfont"
      @click="subClick($event,item.method)"
      :class="[item.icon]" style="">
    </span>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { PropType, VueElement } from "vue";
import { elementsMenu } from "@src/parts/aq-componets/aq-bpmn-editor/config/controlDashBoardConfig";
import { MenuItem } from "@typ/bpmn-editor/controlDashBoradConfig";
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
