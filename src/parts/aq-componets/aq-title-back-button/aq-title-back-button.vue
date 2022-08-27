<template>
  <div class="h-20 w-full xrow items-center">
      <span v-if='!showBack' class="h-15 mr-5 rounded-sm" :class="css" style="width:4px"></span>
      <span v-if='showBack' 
        class="h-20 w-20 mr-5 rounded-sm iconfont icon-arrowL xrow items-center justify-center font-bold text-xs text-white cursor-pointer transition-all duration-300" 
        :class="[css]"
        @click='clickBack'>
      </span>
      <span class="font-bold text-sm">
        <slot >{{title}}</slot>
      </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useEscapeBack } from "./compsition.lib"

export default defineComponent({
  props:{
     title:{
      type:String as PropType<string>,
       default:"返回"
    },
    css:{
      type:String as PropType<string>,
       default:"bg-s-10 hover:bg-w-10"
    },
    showBack:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
  },
  setup(props,context) {
    const { clickBack } = useEscapeBack(props.showBack)
    return {
      clickBack
    }
  },
})
</script>