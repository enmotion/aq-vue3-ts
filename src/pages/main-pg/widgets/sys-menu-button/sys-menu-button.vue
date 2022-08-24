<template>
  <div class="xrow items-center max-h-40"
    :class="[textColor,less]"
    @mouseover="isMouseOver = true" 
    @mouseleave="isMouseOver = false">
    <span v-if="icon" 
      class="h-25 w-25 iconfont xcol items-center justify-center mr-5"
      :class="[icon]">
    </span>
    <span class="font-bold flex-grow-1 xcol text-left">{{ label }}</span>
    <span class="h-20 w-20 xcol items-center justify-center iconfont icon-arrowR scale-50 font-bold"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props:{
    label:{
      type:String as PropType<string>,
      default:'系统菜单'
    },
    less:{
      type:String as PropType<string>,
      default:'pl-15 pr-10'
    },
    icon:{
      type:String as PropType<string>,
      default:''
    },
    textColor:{
      type:String as PropType<string>,
      default:'text-white'
    }
  },
  setup(props,context) {
    const isMouseOver = ref(false);
    return {
      isMouseOver
    }
  },
})
</script>
