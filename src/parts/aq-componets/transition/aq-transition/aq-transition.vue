<template>
  <transition 
    :name="aniCssName" 
    :mode="aniMode" 
    @before-enter="aniMethods.beforeEnter" 
    @enter="aniMethods.enter"
    @after-enter="aniMethods.afterEnter" 
    @enter-cancelled="aniMethods.enterCancelled"
    @before-leave="aniMethods.beforeLeave" 
    @leave="aniMethods.leave" 
    @after-leave="aniMethods.afterLeave"
    @leave-cancelled="aniMethods.leaveCancelled">
    <slot></slot>
  </transition>
</template>

<script lang="ts">

import { defineComponent, ref, getCurrentInstance, Transition, onUnmounted, computed, ComponentInternalInstance} from "vue";
import type { Ref, ComputedRef } from "vue";
import jsAnimationType from "../animation-js/index";


export default defineComponent({
  components: {
    transition:Transition,
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    mode:{
      type:[String],
      default: null
    },
    align: {
      type: String,
      default: 'col', // 由于transition absolute的定位问题，导致纵向排列时，消失动画会出现定位问题，因此需通过col来修正样式
    }
  },
  setup(props, context) {
    let lastWidth: Ref<number> = ref(0);
    let lastHeight: Ref<number> = ref(0);
    let { proxy } = getCurrentInstance() as ComponentInternalInstance;
    onUnmounted(() => {
      console.log('aq-transition is Destroy');
    });
    const alignMode = computed(()=>{
      return ['col', ''].includes(props.align) ? props.align : ''
    });
    const aniMode = computed(()=>{
      return ['out-in', 'in-out'].includes(props.mode) ? props.mode : null;
    });
    const aniName = computed(()=> {
      var aniNames = ['zoomin', 'zoombounce', 'scalex', 'scaley', 'pushx', 'pushy', 'growy', 'growx', 'flipx', 'flipy', 'scrollUp', 'scrollDown', 'scrollLeft', 'scrollRight', 'falling', 'blur'];
      var name:string = aniNames.includes(props.name) ? props.name : aniNames[0];
      return name;
    }); 
    const aniCssName = computed(()=> {
      return alignMode ? aniName + '-' + alignMode : aniName;
    });
    const aniMethods:ComputedRef<{[key:string]:any}> = computed(()=>{
      var methods:{[key:string]:any} = jsAnimationType[aniName];
      var methodsNames = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];
      methodsNames.map(item => {
        methods[item] = methods[item] ? methods[item].bind(proxy) : function(){}; //赋值一个空函数就行
      })
      return methods;
    });
    return {
      lastWidth,
      lastHeight,
      proxy,

      alignMode,
      aniMode,
      aniMethods,
      aniName,
      aniCssName
    }
  }
})
</script>
<style>
@import url('../animation-css/zoom.css');
/* 缩放动画 */
@import url('../animation-css/zoombounce.css');
/* 缩放弹性动画 */
@import url('../animation-css/scalex.css');
/* x轴缩放 */
@import url('../animation-css/scaley.css');
/* y轴缩放 */
@import url('../animation-css/pushx.css');
/* x推入 */
@import url('../animation-css/pushy.css');
/* y推入 */
@import url('../animation-css/growy.css');
/* x展开 */
@import url('../animation-css/growx.css');
/* y展开 */
@import url('../animation-css/flipx.css');
/* x翻转 */
@import url('../animation-css/flipy.css');
/* y翻转 */
@import url('../animation-css/scrollup.css');
/* 向上滑入 */
@import url('../animation-css/scrolldown.css');
/* 向下滑入 */
@import url('../animation-css/scrollleft.css');
/* 向左滑入 */
@import url('../animation-css/scrollright.css');
/* 向右滑入 */
@import url('../animation-css/falling.css');
/* 缓动坠入 */
@import url('../animation-css/blur.css');
/* 缓动模糊 */
</style>