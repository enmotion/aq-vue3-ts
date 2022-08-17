<template>
  <span class="h-50 xrow items-end select-none">
    <span v-for="option in options"
      :key="option.label+option.value"
      class="px-10 xrow flex-shrink-0 text-xs font-bold rounded-t-md mr-5 last:mr-0 xcol items-center justify-center cursor-pointer transition-all duration-300"
      :class="[option.value==value?'h-45 bg-gray-100 text-gray-600':'h-40 text-light-18 hover:h-45 hover:bg-p-10 hover:text-white']"
      @click="buttonClick(option)">
        <span class="text-xs">
          {{option.label}}
        </span>
        <span class="flex rounded-full iconfont icon-x items-center justify-center text-dark-30 font-bold flex-shrink-0 flex-grow-0 hover:bg-dark-6 duration-300 transition-all" 
          :class="[option.value==value?'w-0':'opacity-0 pointer-events-none']"
          style="font-size:12px;width:20px;height:20px;">
        </span>
    </span>
  </span>
</template>

<script lang="ts">
import * as R from "ramda";
import menu from "../menu.lib";
export default R.mergeAll([menu,{name:'tag-menu'}]);
</script>