<template>
    <div class="hauto xrow xwarp xac-c">
        <div class="xrow xac-c" :class="[isWS?'':'col-xs-12']">
            <el-tooltip :disabled="!isWS" class="item" effect="dark" :content="pickers.length>0?pickers[currentKey].label:placeHolder" placement="top-start">
                <span class="xsg0 h30 xpcc pdlr5 iconfont ts-bd btn" style="width:30px" :class="[pickers.length<=1?'is18 tc-s icon-time':'fs8 tc-g4 icon-arrowD']" v-popover:rangeTypePop></span>                
            </el-tooltip>
            <span v-show="!isWS" class="xg1 h25 xpcl tc-g6">{{pickers.length>0?pickers[currentKey].label:placeHolder}}</span>            
            <el-popover
                ref="rangeTypePop"
                :disabled="pickers.length<=1"
                placement="bottom-start"
                width="40"
                :trigger="isWS?'click':'hover'"
                :v-model="false">
                <slot name="buttons" v-bind:selects="pickers">
                    <div 
                        v-for="(p,pidx) in pickers" 
                        :key="pidx"
                        @click="dropMenuOnClick(pidx)"
                        class="h30 bd-b bdc-g10 bc-wht fs12 btn xrow xac-c">
                        <span class="h20 xsg0 iconfont xpcc fs10 tc-w" style="width:20px" :class="[ pidx == currentKey ?'icon-right':'']"></span>
                        <span class="h20 wauto xsg0 xg1 xpcl">{{p.label}}</span>                 
                    </div>
                </slot>
            </el-popover>
        </div>
        <!-- :class="[isWS? type :'col-xs-1 xg1']" -->
        <div v-if="isDouble" class="xrow xwarp" :class="[isWS?'xg1':'col-xs-12 pdlr5']">
            <el-date-picker
                :size="size"
                v-model="F"
                class="xg1"
                @change="onChanged"
                :class="[isWS? type :'w100p mgb5 xg1 xs0']"
                :disabled="disabled"
                :time-arrow-control="timeArrowControl"
                :type="type"
                :format="format"
                :clearable="clearable"
                placeholder="开始"
                :picker-options="optionsF"
                :default-time="defaultTime_[0]">
            </el-date-picker>
            <span v-if="isWS" class="xpcc mgr5"></span>
            <el-date-picker
                class="xg1"
                :size="size"
                v-model="T"
                @change="onChanged"
                :class="[isWS? type :'w100p xg1 xs0']"
                :disabled="disabled"
                :time-arrow-control="timeArrowControl"
                :type="type"
                :format="format"
                :clearable="clearable"
                placeholder="截止"
                :picker-options="optionsT"
                :default-time="defaultTime_[1]">
            </el-date-picker> 
        </div>
        <div v-if="!isDouble" class="xrow xwarp" :class="[isWS?'xg1':'col-xs-12 pdlr5']">
            <el-date-picker
                :size="size"
                v-model="F"
                class="xg1"
                @change="onChanged"
                :class="[isWS? type :'w100p mgb5 xg1 xs0']"
                :disabled="disabled"
                :time-arrow-control="timeArrowControl"
                :type="type"
                :format="format"
                :clearable="clearable"
                placeholder="开始"
                :picker-options="optionsF"
                :default-time="defaultTime_[0]">
            </el-date-picker>            
        </div>     
    </div>
</template>

<style scoped>
.w100p{width: 100% !important;}
.datetime{width:200px;}
.date{width:134px;}
.week{width:120px;}
.year{width:100px;}
.month{width:115px;}
</style>

<script>
import Vue from 'vue';
import {DatePicker,Popover,Tooltip} from "element-ui";
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Tooltip);

const R = require('ramda');
import D from 'dayjs'

export default {
    props:{
        size:{//时间选择器尺寸
            type:String,
            default:"small"
        },
        type:{//时间选择器类型
            type:String,
            default:"week",
        },
        pickers:{
            type:Array,
            default:function(){return[]}
        },
        disabled:{//是否禁用操作
            type:Boolean,
            default:false,
        },
        timeArrowControl:{//是否开启时间选择时箭头操作，开启后，鼠标无法控制
            type:Boolean,
            default:true,
        },
        clearable:{
            type:Boolean,
            default:true,
        },
        valueFormat:{//输入输出格式类型
            type:String,
            default:"YYYY-MM-DD HH:mm:ss" // valueFormat使用的格式为dayjs标准，请注意大小写与format规则不同 也可设置为 "timestamp" 直接以秒为单位
        },
        format:{//显示格式类型
            type:String,
            default:"yyyy-MM-dd HH:mm:ss"
        },
        defaultTime:{//默认时间，如果需要分别设置开始与结束时间，请用数组
            type:[String,Array],
            default:function(){
                return "00:00:00"
            }
        },
        inputValue:{//当前输入时间
            type:Array,
            default:function(){
                return ["",""]
            }
        },
        placeHolder:{//默认提示文字
            type:String,
            default:"创建时间范围"
        },
        isDouble:{
            type:Boolean,
            default:true,
        },
        isWS:{//是否宽屏文字
            type:Boolean,
            default:true,
        }
    },
    data:function() {
        let vm = this;
        return {
            R:R,
            currentKey:"0",
            F:vm.inputValue[0]||"",
            T:vm.inputValue[1]||"",
            optionsF:{
                disabledDate:function(time){
                    if(vm.T===""){
                        return false;
                    }else{
                        return time.getTime()/1000 > vm.unixToTimestamp_(vm.T);
                    }                    
                }
            },
            optionsT:{
                disabledDate:function(time){
                    if(vm.F===""){
                        return false;
                    }else{
                        return time.getTime()/1000 < vm.unixToTimestamp_(vm.F);
                    }                    
                }
            }
        };
    },
    mounted:function(){
        var vm = this;
    },
    computed:{
        defaultTime_:function(){
            var vm = this;
            if(Array.isArray(vm.defaultTime)){
                return vm.defaultTime
            }else{
                return [vm.defaultTime,vm.defaultTime]
            }
        }
    },
    methods: {
        dropMenuOnClick:function(v){
            let vm = this;
            if(vm.currentKey!=v){
                vm.currentKey=v;
                vm.onChanged();
            }           
        },
        onChanged:function(){
            var vm = this;
            if(vm.valueFormat=="timestamp"){
                vm.$emit("change",[vm.unixToTimestamp_(vm.F)||"",vm.unixToTimestamp_(vm.T)||""]);
            }else{
                var out=[];
                var F = vm.unixToTimestamp_(vm.F)||"";
                var T = vm.unixToTimestamp_(vm.T)||""
                F=F!="" ? D(F*1000).format(vm.valueFormat) : "";
                T=T!="" ? D(T*1000).format(vm.valueFormat) : "";
                if(vm.pickers.length==0){
                    vm.$emit("change",[F,T]);
                }else{
                    vm.$emit("change",{key:vm.pickers[vm.currentKey].key,value:[F,T]})
                }                
            }
        }
    }
}
</script>