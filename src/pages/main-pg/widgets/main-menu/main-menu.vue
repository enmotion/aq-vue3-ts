<template>
  <div class="h-40 w-auto xrow mt-5 items-center px-20">
    <span v-for="(option,index) in options" 
      :key="option.label+option.value" 
      class="py-5 xcol items-center flex-shrink-0 text-sm font-bold rounded-sm mr-30 cursor-pointer last:mr-0"
      style="margin-top: 4px;"
      @click="buttonClick({index:index,option:option})">
      <span class="select-none transition-all duration-300" 
        :class="[option.value==value?
        'border-s-10 text-white' : 'bg-dark-1 border-light-1 text-light-24 hover:text-white hover:border-w-10']">
        {{option.label}}
      </span>
      <span class="rounded-md transition-all duration-300 bg-s-10 mt-5"
        style="height:3px"
        :class="[option.value==value?'w-full':'w-0 opacity-0']">
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType, SetupContext } from 'vue';
import type { MenuOption } from "types/public/mainPage";
import { useMenuBase } from "../menu.lib"; // 组合式api代码复用
export default defineComponent({
  props:{
    options:{
      type:Array as PropType<MenuOption[]>,
      default:()=>[]
    },
    value:{
      type:String as PropType<string>,
      default:''
    }
  },
  emits:['update:value'], // v-model 写法
  setup(props,context) {
    const { buttonClick, mouseoverIndex } = useMenuBase(context as SetupContext);
    return {
      buttonClick,
      mouseoverIndex
    }
  }
})
</script>
