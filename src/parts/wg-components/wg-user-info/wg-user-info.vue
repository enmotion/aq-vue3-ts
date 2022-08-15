<template>
  <div class="xcol">
    <div class="h-auto flex-grow-1 xrow items-center">
      <span v-show="userInfo.avatar"
        :style="{height:size+'px',width:size+'px'}" 
        class="flex rounded-full flex-shrink-0 flex-grow-0 "
        :class="[glowAvatar?'border-1 border-white shadow-lg shadow-white bg-white overflow-hidden':'']">
        <img :src="userInfo.avatar" class="rounded-full  bg-center" style="transform:scale(0.97)" alt="">
      </span>
      <span v-show="userInfo.nickname||userInfo.id||userInfo.signature" class="xrow w-auto ml-10 flex-wrap text-white flex-grow-1 flex-shrink-1 overflow-hidden" style="margin-top: 3px;">
        <span v-show="userInfo.nickname" 
          class="w-full text-sm text-left h-15 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" 
          style="line-height:14px"
          v-html="userInfo.nickname">
        </span>
        <span v-show="userInfo.id" 
          class="w-full text-xs origin-top-left text-light-24 text-left font-bold overflow-hidden text-ellipsis break whitespace-nowrap" 
          style="line-height:12px;transform: scale(0.9);"
          v-html="userInfo.id">
        </span>
        <span v-show="userInfo.signature"
          class="w-full text-xs origin-top-left text-light-24 text-left mt-5 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" 
          style="line-height:12px;"
          v-html="userInfo.signature">
        </span>
      </span>
    </div>
    <div v-if="useSlot" class="mb-5 mt-10 border-t border-light-4"></div>
    <div v-if="useSlot" class="flex-grow-1 h-35 xrow items-center justify-between">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, useSlots } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props:{
    userInfo:{
      type:Object as PropType<{nickname?:string,avatar?:string,id?:string,signature?:string}>,
      default:()=>({
        nickname:'叶文洁',
        // id:'threebody@qq.com',
        signature:'最高统帅',
        avatar:"http://i1.go2yd.com/image.php?url=0W8wDjc3Sh",
      })
    },
    size:{
      type:Number as PropType<number>,
      default:45
    },
    glowAvatar:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
  },
  setup(props,context) {
    let useSlot = computed(()=>!!useSlots().default);
    return {
      useSlot,
    }
  },
})
</script>
