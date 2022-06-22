<template>
    <div @click="increse(name)" class="cursor-pointer select-none"><span ref="ser"></span> {{name}} | {{setname}} </div>
</template>

<script>
import {onMounted,ref,getCurrentInstance,nextTick} from 'vue';

export default {
    props:{
        age:{
            type:String,
            default:'dddere'
        }
    },
    data:()=>{
        return {
            name:'enmotion12'
        }
    },
    setup(data){
        var vm = getCurrentInstance();
        let setname = ref('enmotion222');
        nextTick(()=>{
            console.log(vm.refs)
            console.log(vm.data.name,22222)
            setname.value = vm.data.name + 'MOD';
            console.log(setname,123123)
        })
        onMounted(()=>{
            console.log("test12321")
        })
        function increse(sss){
            console.log(this.name)
            setname.value = sss
        }
        return {
            setname,
            increse
        }
    },
}
</script>
