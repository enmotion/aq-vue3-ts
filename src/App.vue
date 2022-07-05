<!-- <script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './parts/HelloWorld.vue';
// import Test from "./parts/test.vue"
// function ganerateAlphaStepColor(key:string='ad',color:string='#FF0000',step:number=10):object{
//   var obj:any={}
//   for(let i=1;i<=step;i++){
//     obj[key+''+i] = color + (Math.max(Math.round(256/step*i-1),0).toString(16)).toUpperCase()
//   }
//   return obj
// }
// export default{
//   data(){
//     return {
//       containerColor:ganerateAlphaStepColor(),
//       textColor:ganerateAlphaStepColor(),
//     }
//   },
//   mounted(){
//     console.log("in mounted inside")
//   },
//   components:{
//     HelloWorld,
//     Test,
//   }
// }
</script> -->

<template>
  <div class="h-full bg-p-1 flex flex-col">
    <router-view key="root_router" />
  </div>
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
