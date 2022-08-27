<template>
    <div class="xrow xwarp xg1 xac-c">
        <div class="pdlr5 xrow xac-c" :class="[isWS?'col-xs-1 xg1':'col-xs-12 mgb5']">
            <span v-if="dropMenu.length>1">
                <slot name="dropMenu">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="xpcc btn el-dropdown-link mgr5 bdr2" style="width:20px;height:20px">
                            <el-tooltip :content="bl_">
                                <i class="iconfont icon-arrowD fs8"></i>
                            </el-tooltip>                            
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(i,index) in dropMenu" :command="i" :key="index">{{i.label}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </slot>
            </span>                
            <el-input v-model.trim="inputData.content" :size='size' :clearable="true" @clear="onClear" class="fs12 col-xs-1 xg1" :placeholder="ph_" prefix-icon="el-icon-search">
            </el-input>
        </div>
        <div v-if="showButton" :class="[isWS?'pdr5':'col-xs-12 pdlr5']">
            <slot name="Button">
                <el-button @click='active' :size='size' class="col-xs-12 pdlr10" type="primary">{{buttonLabel}}</el-button>
            </slot>
        </div>  
    </div>
</template>

<script>
import Vue from 'vue';
import {Dropdown,Tooltip,DropdownMenu,DropdownItem,Input,Button} from "element-ui";
Vue.use(Dropdown)
Vue.use(Tooltip)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Input)
Vue.use(Button)

export default {
    props:{
        buttonLabel:{
            type:String,
            default:"搜索"
        },
        showButton:{
            type:Boolean,
            default:true,
        },
        isWS:{
            type:Boolean,
            default:true,
        },
        size:{
            type:String,
            default:"small"
        },
        dropMenu:{
            type:Array,
            default:function(){
                return [
                    {label:"搜索内容",type:"text"},
                ]
            }
        },
        EnterActivate:{
            type:Boolean,
            default:true
        },
        ClearActivate:{
            type:Boolean,
            default:true
        },
        placeholder:{
            type:String,
            default:"请输入"
        },
    },
    data:function(){
        return {
            inputData:{
                content:"",
                type:"",
            },
            ph_:"",
            bl_:"",
        }
    },
    watch:{
        "inputData.content":function(n,o){
            var vm = this;
            if(n===""&& vm.ClearActivate){
                vm.active();
            }
        }
    },
    mounted:function(){
        var vm = this;
        var ph=vm.dropMenu[0]?vm.dropMenu[0].label:"";
        vm.inputData.type=vm.dropMenu[0]?vm.dropMenu[0].type:"text";
        vm.ph_=vm.placeholder +" "+ ph;
        vm.bl_=vm.buttonLabel + ph;  
        window.addEventListener("keyup",vm.keyDown);
    },
    activated:function(){
        var vm = this;
        window.addEventListener("keyup",vm.keyDown);
    },
    deactivated:function(){
        var vm = this;
        window.removeEventListener('keyup',vm.keyDown);
    },
    beforeDestroy:function(){
        var vm=this;
        window.removeEventListener('keyup',vm.keyDown);
    },
    methods:{
        keyDown:function(e){
            var vm=this;
            if(e.key=='Enter' && vm.EnterActivate){
                vm.active();
            }
        },
        onClear:function(){
            var vm = this;
            if(vm.ClearActivate){
                vm.active();
            }
        },
        active:function(){
            var vm = this;
            vm.$emit("actived",vm.inputData);
        },
        handleCommand:function(i){
            var vm = this;
            vm.ph_=vm.placeholder+" "+i.label;
            vm.bl_=vm.buttonLabel + i.label;  
            vm.inputData.type=i.type;
        }
    }
}
</script>