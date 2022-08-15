<template>
  <span class="h-25 w-25 xrow items-center justify-center iconfont text-light-36 font-thin text-xl mr-10 last:mr-0 relative"
    :class="[icon]"
    :style="iconStyle">
    <span v-show="showPin"
      style="height:16px;width:16px;top:-2px;right:-2px"
      :style="aniStyle" 
      class="absolute animate-ping inline-flex rounded-full bg-d-10 xcol items-center justify-center">
    </span>
    <span v-show="showPin"
      style="height:8px;width:8px;top:2px;right:2px"
      :style="pinStyle"
      class="absolute inline-flex rounded-full bg-d-10">
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props:{
    icon:{
      type:String as PropType<string>,
      default:'icon-notice',
    },
    showPin:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
    iconStyle:{
      type:Object as PropType<StyleValue>,
      default:()=>({}),
    },
    pinStyle:{
      type:Object as PropType<StyleValue>,
      default:()=>({}),
    },
    aniStyle:{
      type:Object as PropType<StyleValue>,
      default:()=>({}),
    }
  },
  setup() {
    
  },
})
</script>
