<template>
    <div class="h20 col-xs-12 xrow xac-c">
        <span v-if='!showBack' class="h15 mgr10 bdr2" :class="css" style="width:4px"></span>
        <div v-if='showBack' @click='goback' class="h20 bc-g10 btn bdr2 bd bdw-1 bdc-ag3 xpcc mgr10" :class="css" style="width:20px">
            <span class="h20 iconfont icon-arrowL is10 xpcc btn ts-bd" style="width:20px;padding-left:3px"></span>
        </div>
        <span class="xg1 xpcl fs14 tc-blk">{{title}}</span>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        showBack:{
            type:[Boolean,String],
            default:false,
        },
        css:{
            type:String,
            default:"bc-s"
        }
    },
    created:function(){
        let vm=this;
        if(vm.showBack){
            window.addEventListener("keyup",vm.keyUp);
        }        
    },
    beforeDestroy:function(){
        let vm=this;
        window.removeEventListener('keyup',vm.keyUp);
    },
    methods:{
        goback:function(){
            window.history.back(-1);
        },
        keyUp:function(e){
            let vm=this;
            if(e.key=='Escape'){
                window.addEventListener("keyup",vm.keyUp);
                window.history.back(-1);
            }
        }
    }
}
</script>