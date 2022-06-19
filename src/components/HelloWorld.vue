<script lang="ts">
import { ref,reactive, onMounted} from 'vue'
export default {
  props:{
    msg:{
      type:String
    }
  },
  setup:function(){
    interface item{
      label:string,
      value:number,
    }
    let items:item[] = reactive([
      {label:"name1",value:0},
      {label:"name2",value:0}, 
      {label:"name3",value:0}
    ]);
    function changeValue(targetItems:item[],index:number,value:number){
      targetItems[index].value+=value;
    }
    onMounted(()=>{
      console.log("onMounted")
    })
    return {
      items,
      changeValue
    }
  }
}
</script>

<template>
  <div>{{msg}}</div>
  <div class="bg-slate-500 h-auto flex items-center flex-row flex-wrap -m-1">
    <span v-for="(item,index) in items" :key="index" 
    class="w-5/12 m-1 flex-grow cursor-pointer select-none flex items-end justify-end p-5 h-800"
    :class="[item.value>10?' bg-danger':'bg-blue-100']"
    @click="changeValue(items,index,index+1)">
    {{item.label}}:{{item.value}}
    </span>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
