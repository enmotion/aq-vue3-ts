<template>
    <transition-group 
        :name="aniCssName" 
        :class="[aniCssName]"
        @before-enter="aniMethods.beforeEnter"
        @enter="aniMethods.enter"
        @after-enter="aniMethods.afterEnter"
        @enter-cancelled="aniMethods.enterCancelled"
        
        @before-leave="aniMethods.beforeLeave"
        @leave="aniMethods.leave"
        @after-leave="aniMethods.afterLeave"
        @leave-cancelled="aniMethods.leaveCancelled">
        <slot></slot>
    </transition-group>
</template>
<script>
import jsAnimationType from "../animation-js"

export default {
    props:{
        name:{
            type:String,
            default:""
        },
        align:{
            type:String,
            default:'', // 由于transition absolute的定位问题，导致纵向排列时，消失动画会出现定位问题，因此需通过col来修正样式
        }
    },
    data(){
        return {
            lastWidth:0,
            lastHeight:0,
            lastElement:"",
        }
    },
    computed:{
        alignMode(){
            var vm = this;
            return ['col',''].includes(vm.align)?vm.align:''
        },
        aniMethods(){
            var vm = this;
            var methods = jsAnimationType[vm.aniName] || {};
            var methodsNames  = ['beforeEnter','enter','afterEnter','enterCancelled','beforeLeave','leave','afterLeave','leaveCancelled'];           
            methodsNames.map(item=>{
              methods[item] = methods[item] ? methods[item].bind(vm) : function(){} //赋值一个空函数就行
            })
            return methods;
        },
        aniCssName(){
            var vm = this;
            return vm.alignMode ? vm.aniName +'-'+ vm.alignMode : vm.aniName;
        },
        aniName(){
            var vm = this;
            var aniNames = ['zoomin','zoombounce','scalex','scaley','pushx','pushy','growy','growx','flipx','flipy','scrollUp','scrollDown','scrollLeft','scrollRight','blur','falling'];
            var name = aniNames.includes(vm.name) ? vm.name : aniNames[0];
            return name;
        }
    },
}
</script>
<style>
@import url('../animation-css/zoom.css'); /* 缩放动画 */
@import url('../animation-css/zoombounce.css'); /* 缩放弹性动画 */
@import url('../animation-css/scalex.css'); /* x轴缩放 */
@import url('../animation-css/scaley.css'); /* y轴缩放 */
@import url('../animation-css/pushx.css'); /* x推入 */
@import url('../animation-css/pushy.css'); /* y推入 */
@import url('../animation-css/growy.css'); /* x展开 */ 
@import url('../animation-css/growx.css'); /* y展开 */
@import url('../animation-css/flipx.css'); /* x翻转 */
@import url('../animation-css/flipy.css'); /* y翻转 */
@import url('../animation-css/scrollup.css'); /* 向上滑入 */
@import url('../animation-css/scrolldown.css'); /* 向下滑入 */
@import url('../animation-css/scrollleft.css'); /* 向左滑入 */
@import url('../animation-css/scrollright.css'); /* 向右滑入 */
@import url('../animation-css/falling.css'); /* 缓动坠入 */
@import url('../animation-css/blur.css'); /* 缓动模糊 */
</style>