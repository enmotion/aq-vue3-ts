<template>
  <el-tooltip :content="tip" :disabled="tip==''" :placement="tipPlacement">
    <span class="h-25 w-25 xrow items-center justify-center iconfont text-light-36 font-thin text-xl mr-10 last:mr-0 relative cursor-pointer"
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
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue';
import type { PropType } from 'vue';
import { ElTooltip } from 'element-plus';
import type { Placement } from 'element-plus';

export default defineComponent({
  components:{ ElTooltip },
  props:{
    icon:{
      type:String as PropType<string>,
      default:'icon-notice',
    },
    tip:{
      type:String as PropType<string>,
      default:'系统消息',
    },
    tipPlacement:{
      type:String as PropType<Placement>,
      // type:String as PropType<'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'left'|'left-start'|'left-end'|'right'|'right-start'|'right-end'>,
      default:'top',
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
