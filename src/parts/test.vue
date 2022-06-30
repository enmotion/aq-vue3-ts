<template>
aaaaa
    <div @click="increse(name)" class="cursor-pointer h-20 bc-d select-none text"> {{$data}} | {{vdata}} </div>
</template>

<script lang="ts">
import { reduce } from 'ramda';
import {onMounted,ref,reactive,getCurrentInstance,nextTick, Static} from 'vue';
class counter{

} 
enum Color {Red='red',Blue='blue',Green='green2'};

const A:Color = Color.Green;
console.log(A,111111);

interface hobbiy{
    label:string,
    level:number
}
function printHobbiy(ho:{label:string}){
    console.log(ho.label); 
}
let hobbiys:hobbiy={label:'football',level:12};
printHobbiy(hobbiys);

interface user<T,K>{
    name:string,
    hobbiy:Array<hobbiy|string|number|{[key:string]:string|number}>,
    action:(name:T,d:K)=>T,
}
const user:user<number,object>={
    name:"mod",
    hobbiy:[12,{label:"aa",level:2},{dd:'fdafsfasf',aa:'12313',da:12312}],
    action:(aer)=>12
}
export default {
    props:{
        age:{
            type:String,
            default:'dddere'
        }
    },
    data:()=>{
        return {
            name:'原始data',
            age:0
        }
    },
    methods:{

    },
    setup(){
        var vm:any = getCurrentInstance();
        let vdata = reactive({data:{name:'setup vdata',age:1}});
        onMounted(()=>{
            vdata.data = vm?.data
        })
        function increse(){
            console.log(vm.methods)
            vdata.data.age++
        }
        return {
            vdata,
            increse
        }
    },
}
</script>
