<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
function ganerateAlphaStepColor(key:string='ad',color:string='#FF0000',step:number=10):object{
  var obj:any={}
  for(let i=1;i<=step;i++){
    obj[key+''+i] = color + (Math.max(Math.round(256/step*i-1),0).toString(16))
  }
  return obj
}
console.log(parseInt('ff',16))
export default{
  data(){
    return {
      containerColor:ganerateAlphaStepColor(),
      textColor:ganerateAlphaStepColor(),
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<template>
  <div class="h-auto flex flex-col">
    <span class=" border-d-a9 border bg-d-a3 text-blue-900 p-50">{{containerColor}}</span>
    <span class=" text-blue-900 p-50">{{textColor}}</span>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
