<template>
  <div class="h-40 w-auto xrow mt-5 items-center px-20">
    <span v-for="option in options" 
      :key="option.label+option.value" 
      class="py-5 xcol items-center flex-shrink-0 text-sm font-bold rounded-sm mr-30 last:mr-0"
      style="margin-top: 4px;"
      @click="buttonClick(option)">
      <span class="select-none transition-all duration-300 cursor-pointer" :class="[option.value==value?'border-s-10 text-white':'bg-dark-1 border-light-1 text-light-24 hover:text-white hover:border-w-10']">
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
import * as R from "ramda";
import menu from "../menu.lib";
export default R.mergeAll([menu,{name:'main-menu'}]);
</script>
