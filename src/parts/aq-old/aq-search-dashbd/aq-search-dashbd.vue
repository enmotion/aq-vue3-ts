<template>
    <div class="pdlr5 pdbt10 xs0 hauto bc-g xrow xac-c xwarp">
        <div v-if="funcButtons.length>0" ref="funcButtons" class="hauto xrow xwarp" :class="[isWS?'wauto':'col-xs-12']">
            <el-button 
                v-for="(b,bidx) in funcButtons"
                :key="bidx"
                @click='buttonsClicked(b.name)' 
                size='small'
                :type="b.type"
                :plain="b.plain"
                :class="[isWS?'':'col-xs-5 mgb5 xg1']" 
                class="pdlr10 mglr5 ts-bd">
                {{b.label}}
            </el-button>
        </div>
        <div v-if="rangePicker.length>0" ref="rangePicker" class="hauto xrow xwarp" :class="[isWS?'wauto mglr5':'col-xs-12 mgt5']">            
            <aq-rangepicker
                @change="rangeChanged"
                :pickers="rangePicker"
                value-format="YYYY-MM-DD" 
                class="xg1 xs1"
                :isDouble="isDouble"
                :isWS="isWS"
                :clearable="rangeClearable"
                :input-value="rangeDefault"
                type="date" 
                format="yyyy-MM-dd" 
                :default-time="['00:00:00','23:59:59']">
            </aq-rangepicker>
        </div>
        <div v-if="R.keys(typeFilters).length>0" ref="typeFilters" class="xg1 xrow xwarp" :class='[isWS?"mglr5 col-xs-4":"col-xs-12"]'>
            <span v-for="(v,k) in typeFilters" :key="k" class="pdlr5 xcol" :class="[isWS?'col-xs-1 xg1':'col-xs-5 xg1 mgt5']">
                <el-select v-model="output[k]" @change="filtersChanged" size="small" class="xg1" :clearable="true" :placeholder="v.txt">
                    <el-option
                        v-for="(value,key) in v.opts"
                        :key="key"
                        :label="value.label"
                        :value="key">
                    </el-option>
                </el-select> 
            </span>                
        </div>
        <div v-if="searchTypes.length>0" ref="searchTypes" class="xrow xjc-e" :class='[isWS?"col-xs-1 xg1":"col-xs-12 mgt5"]'>
            <aq-search :isWS="isWS" :drop-menu="searchTypes" @actived="searchChanged"></aq-search>
        </div> 
    </div>
</template>

<script>
import Vue from "vue";
import {Select,Option,DropdownItem,Button} from "element-ui";
Vue.use(Select);
Vue.use(Option);
Vue.use(DropdownItem);
Vue.use(Button);
//event:click,output
const R = require('ramda');

export default {
    props:{ 
        funcButtons:{type:Array,default:function(){return[]}},//范例:[{label:"按钮",type:"success",name:"sample"}]
        rangePicker:{type:Array,default:function(){return[]}},//范例:[{label:"创建时间",key:"ct"}]
        typeFilters:{type:Object,default:function(){return{}}},//范例:{'id':{txt:"创建时间范围",opts:{'':'全部内容'}}}
        searchTypes:{type:Array,default:function(){return[]}},//范例：[{label:"名称搜索",type:"name"}]
        rangeClearable:{type:Boolean,default:true},//日期选择器是否可滞空
        rangeDefault:{type:Array,default:function(){return[]}},//日期选择器，默认数值
        input:{type:Object,default:function(){return{}}},
        isWS:{type:Boolean,default:true},
        isDouble:{type:Boolean,default:true},//日期是否为双日期范围
        // outputFormat:{type:Object,defalut:function(){return {}}},//默认输入值
    },
    data:function(){
        let vm = this;
        return {
            R,
            output:R.merge({},vm.input)
        }
    },
    mounted:function(){
    },
    methods:{
        buttonsClicked:function(name){
            let vm = this;
            vm.$emit("click",name);
        },
        rangeChanged:function(v){
            let vm = this;
            vm.output.rangePicker=v
            vm.outputData()
        },
        filtersChanged:function(v){
            let vm = this;
            vm.outputData()
        },
        searchChanged:function(v){
            let vm = this;
            vm.output.searchTypes=v;
            vm.outputData()
        },
        inputData:function(v){
            let vm = this;
            vm.output=R.merge(vm.output,v);
            vm.outputData()
        },
        outputData:function(){
            let vm = this;
            // console.log(vm.output)
            vm.$emit("output",vm.output);
        }
    }
}
</script>