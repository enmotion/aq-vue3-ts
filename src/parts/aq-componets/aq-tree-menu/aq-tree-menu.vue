<template>
  <div class="xcol text-justify">
    <div v-for="(option,index) in options" 
      :key="option.label" 
      class="xcol h-auto flex-grow-0 flex-shrink-0 border-b last:border-none last:border-light-1 border-dark-2">
      <div class="xrow h-40 font-bold items-center cursor-pointer pl-20"
        :class="[valuePath[level]==option.value?'tree-menu':'text-gray-500']"
        @click="buttonClick(option,index)">
        <span class="h-full" :style="{width:level*10+'px'}"></span>
        <span v-if="level!=0 || option.icon" class="tree-menu-icon w-15 h-15 xcol items-center justify-center iconfont mr-10 font-normal text-xs" 
          :class="[option.icon||'icon-sub-sm']">
        </span>
        <span class="flex-grow-1 w-0 text-ellipsis h-full items-center xrow" :class="[level<1?'text-sm text-gray-600':'text-xs text-gray-500']">
          <span class="tree-menu-label text-ellipsis overflow-hidden w-0 whitespace-nowrap flex-grow-1">
           {{option.label}}
          </span>
        </span>
        <span class="tree-menu-side w-15 h-15 xcol items-center justify-center iconfont mr-10 scale-75 text-xs" 
          :class="[option.children && option.children.length > 0 ? 'icon-dots rotate-90 text-dark-12':'icon-arrowR text-gray-400']">
        </span>
      </div>
      <aq-transition name="growy" :duration="{enter:300,leave:200}">
        <div v-if="currentIndex.includes(index) && option.children" class="h-auto flex-shrink-0 xcol bg-dark-2 overflow-hidden">
          <aq-tree-menu 
            :options="option.children"
            :value-path="valuePath"
            :level="level+1"
            :is-serial-expanded="isSerialExpanded"
            class="h-auto flex-shrink-0"
            @update:value="getSubOption($event,index)">
          </aq-tree-menu>
        </div>
      </aq-transition>
    </div>    
  </div>
</template>
<style scoped>
.tree-menu .tree-menu-icon{
  color:rgb(255, 187, 0) !important
}
.tree-menu .tree-menu-label{
  color:rgb(255, 187, 0) !important
}
.tree-menu .tree-menu-label{
  color:rgb(255, 187, 0) !important
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType, Ref } from 'vue';

export default defineComponent({
  name:'aq-tree-menu',
  props:{
    options:{
      type:Array as PropType<any[]>,
      default:()=>[]
    },
    valuePath:{
      type:Array as PropType<string[]>,
      default:()=>[]
    },    
    heightLightClass:{
      type:String as PropType<string>,
      default:''
    },
    isSerialExpanded:{ // 是否为串行展开
      type:Boolean as PropType<boolean>,
      default:false,
    },
    level:{
      type:Number as PropType<number>,
      default:0
    },
  },
  emits:['update:value'], // v-model 写法
  setup(props,context) {
    const currentIndex:Ref<(string|number)[]> = ref([]);
    function buttonClick(option:any,index:number){
      if(currentIndex.value.includes(index)){
        if(props.isSerialExpanded){
          currentIndex.value = []
        }else{
          currentIndex.value.splice(currentIndex.value.indexOf(index),1);
        }
      }else{
        if(props.isSerialExpanded){
          currentIndex.value = [index]
        }else{
          currentIndex.value.push(index);
        }
      }
      if(!option.children||option.children.length <=0 ){
        context.emit('update:value',{index,option});
      }
    };
    function getSubOption(option:any,index:number){
      context.emit('update:value',{index,option});
    };
    return {
      currentIndex,
      buttonClick,
      getSubOption
    }
  },
})
</script>

