<script lang="ts">
import { useStore } from 'vuex'; 
import { ref,reactive, onMounted,computed} from 'vue'
export default {
  props:{
    msg:{
      type:String
    }
  },
  setup:function(){
    const store = useStore();
    console.log(store);
    const name = computed(()=>{
      return store.getters.getName;
    })
    interface item{
      label:string,
      value:number,
    }
    let items:item[] = reactive([
      {label:"name1",value:0},
      {label:"name2",value:0}, 
      {label:"name3",value:0}
    ]);
    function changeValue(targetItems:any[],key:string,index:number,value:number){
      targetItems[index][key]+=value;
    }
    onMounted(()=>{
      console.log("onMounted")
    })
    return {
      items,
      name,
      changeValue
    }
  }
}
</script>

<template>
  <div class=" bg-d-a9">{{msg}} | {{name}}</div>
  <div class="bg-slate-500 h-auto flex items-center flex-row flex-wrap -m-1">
    <span v-for="(item,index) in items" :key="index" 
      class="w-5/12 m-1 flex-grow cursor-pointer select-none flex items-end justify-end h-100 m-5 p-10 rounded-sm hover:bg-blue-500 hover:rounded-xl hover:text-blue-50 transition-all duration-300"
      :class="[item.value>10?' bg-danger':'bg-blue-100']"
      @click="changeValue(items,'value',index,index+1)">
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
