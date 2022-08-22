<template>
  <div class="xrow items-end h-45 select-none" 
    @mouseleave="mouseoverIndex = -1">
    <span v-for="(option, index) in options" :key="option.label+index" 
      class="xrow items-center cursor-pointer rounded-t-md border-t border-light-2 transition-all duration-300"
      :class="[
        option.value == value ? 'px-10 h-40 bg-gray-100 text-gray-600' : 'px-20',
        option.value != value && mouseoverIndex == index ? 'h-40 text-white bg-p-10' : 'h-40'
      ]"
      @mouseover="mouseoverIndex = index"
      @click="buttonClick({index:index,option:option})">
      <span class=" transition-all duration-300"
        :class="[option.value== value?'ml-10':'']">
        <span :class="[option.value== value?'text-gray-600 font-bold':'text-light-32']">{{option.label}}</span>
      </span>
      <span :style="{width:option.value== value?'20px':'0px'}" class=" overflow-hidden transition-all duration-300">
        <span class="xrow items-center justify-center rounded scale-75 hover:bg-d-2 hover:scale-110 transition-all duration-200" 
          style="width:16px;height:16px;margin-left:4px">
          <span class="iconfont icon-x text-xs text-d-10 font-bold scale-90" 
            @click.capture.stop="tagRemoveClick({index:index,option:option})">
          </span>
        </span>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    function tagRemoveClick(event:{index:number,option:MenuOption}){
      console.log(event);
    }
    return {
      mouseoverIndex,
      buttonClick,
      tagRemoveClick,
    }
  }
})
</script>