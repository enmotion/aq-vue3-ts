<template>
    <div class="xcol xs0 xg1">
        <iframe v-if="intervalID" ref="contentIframe" :id="htmlContent_" scrolling="no" class="">
        </iframe>
        <div class="hide" ref="head">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <link rel="stylesheet" type="text/css" id="u0" href= './tinymce_static/skins/lightgray/iframe.css'>
            <link rel="stylesheet" type="text/css" id="u0" href= './tinymce_static/skins/lightgray/content.min.css'>
        </div>
    </div>
</template>

<script>
import{ax,apis} from "@/restful"
export default {
    props:{
        htmlContent:{
            type:String,
            reqired:true,
        },
        documentBaseUrl:{
            type:String,
            default:apis.host
        }
    },
    data:function(){
        return {
            intervalID:"",
            dom:"",
        }
    },
    mounted:function(){
        var vm = this;
        vm.intervalID = setInterval(function(){
            vm.windowOnResize()
        },300)
    },
    beforeDestroy:function(){
        var vm = this;
        clearInterval(vm.intervalID)
    },
    computed:{
        htmlContent_:function(){
            var vm = this
            var str=vm.htmlContent.replace('src="/','src="'+vm.documentBaseUrl+'/');
            vm.$nextTick(function(){
                vm.$refs.contentIframe.contentDocument.head.innerHTML=vm.$refs.head.innerHTML
                vm.$refs.contentIframe.contentDocument.body.setAttribute('class','mce-content-body mce-content-body-break');
                vm.$refs.contentIframe.contentDocument.body.innerHTML="<div id='context'></div>"; 
                vm.dom = vm.$refs.contentIframe.contentDocument.getElementById('context')
                vm.dom.innerHTML = str
            })            
            return "vm.htmlContent"
        }
    },
    methods:{
        windowOnResize:function(){
            var vm = this;
            window.frames[vm.$refs.contentIframe.id].height=vm.dom.scrollHeight+10;
        }
    }    
}
</script>