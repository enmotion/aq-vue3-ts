<template>
  <span class="h-45 xrow items-end select-none">
    <span v-for="option in options" :key="option.label+option.value" 
      class="xrow items-center cursor-pointer rounded-t-md border-t border-light-2 font-bold transition-all duration-200" 
      :class="[option.value==value?'px-5 h-40 bg-gray-100 text-gray-600':'px-15 h-35 text-light-24 hover:text-white hover:bg-p-10 hover:h-40']" 
      @click="buttonClick(option)">
      <div class="flex items-center mx-5">{{option.label}}</div>
      <span 
        class="flex h-20 iconfont icon-x text-xs text-gray-600 items-center justify-center transition-all scale-75 duration-200 overflow-hidden rounded-md hover:bg-d-2 hover:text-d-10 hover:scale-90" 
        :class="[option.value==value?'w-20':'w-0']"
        @click.capture.stop="doe(option)">
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import * as R from "ramda";
import menu from "../menu.lib";

export default R.mergeAll([menu,{name:'tag-menu',methods:{
  buttonClick(v:any){
    console.log('buttonClick',v)
  },
  doe(v:any){
    console.log(v)
  }
}}]);
</script>