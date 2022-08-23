<template>
  <div class="aq-transition-vessel"
    :style="{
      perspective:perspective,
      '-webkit-perspective':perspective,
      '--orgSizeHeight':orgSize.height,
      '--orgSizeWidth':orgSize.width,
      '--cellposition':cellposition,
      '--enter':transDuration.enter,
      '--leave':transDuration.leave,
      '--entertiming':transTiming.enter,
      '--leavetiming':transTiming.leave,
    }">
    <div class="relative h-0 overflow-hidden">
      <div ref="slotSizeWrap" class="xcol h-auto" v-html="slotHtml">
      </div>
    </div>
    <Transition :name="name" :mode="mode" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @before-leave="beforeLeave">
      <slot></slot>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue';
import type { PropType } from "vue";
import TranstionTypes from "../types/transtion";

export default defineComponent({
  props:{
    name:{ // 过渡效果名称
      type:String as PropType<TranstionTypes.name>,
      default:'fade'
    },
    mode:{ // 过渡播放模式
      type:String as PropType<TranstionTypes.mode>,
      default:'default'
    },
    duration:{ // 过渡持续时长
      type:[Number,Object] as PropType<number|{enter:number,leave:number}>,
      default:()=>({enter:300,leave:300}),
    },
    absoluteCell:{ // 启用了绝对定位，可能会使得内部flex-grow失效，请自行设置内部高宽为100%
      type:Boolean,
      default:false,
    },
    timing:{
      type:[String,Object] as PropType<TranstionTypes.timing|{enter:TranstionTypes.timing,leave:TranstionTypes.timing}>,
      default:()=>({enter:'ease',leave:'ease'})
    },
    perspective:{ // 过渡效果透视强度
      type:Number,
      default:500,
    }
  },
  setup(props,context) {
    const slotSizeWrap = ref(null as any);
    const orgSize = ref({height:'0px',width:'0px'});
    let slotHtml = ref('' as string);
    const cellposition = computed(()=>{
      return props.absoluteCell?'absolute':'relative';
    })
    const transDuration = computed(()=>{
      if(props.duration.constructor == Number){
        return {enter:props.duration/1000+'s',leave:props.duration/1000+'s'}
      }else{
        let duration = props.duration as {enter:number,leave:number};
        return {enter:duration.enter/1000+'s',leave:duration.leave/1000+'s'}
      }
    });
    const transTiming = computed(()=>{
      if(props.timing.constructor !== Object){
        if(props.timing.constructor === String){
          return { enter:props.timing,leave:props.timing }
        }else{
          let timingAry:number[]|string = props.timing as number[];
          timingAry = timingAry.join(',');
          return { enter:`cubic-bezier(${timingAry})`,leave:`cubic-bezier(${timingAry})` }
        }
      }else{
        let timeingObject = props.timing as {enter:TranstionTypes.timing,leave:TranstionTypes.timing};
        let result:{enter:string,leave:string} = {enter:'',leave:''};
        if(timeingObject.enter?.constructor === String){
          result.enter = timeingObject.enter;
        }else{
          let enter:number[]|string = timeingObject.enter as number[];
          result.enter = `cubic-bezier(${enter.join(',')})`;
        }
        if(timeingObject.leave?.constructor === String){
          result.leave = timeingObject.leave;
        }else{
          let leave:number[]|string = timeingObject.leave as number[];
          result.leave = `cubic-bezier(${leave.join(',')})`;
        }
        return result;
      }
    })
    function beforeEnter(el:HTMLElement){      
      slotHtml.value = el.outerHTML;
    }
    function enter(el:HTMLElement,done:Function){
      orgSize.value.height = slotSizeWrap.value.offsetHeight+'px';
      orgSize.value.width = slotSizeWrap.value.offsetWidth+'px';
      setTimeout(function(){
        orgSize.value.height='none'
        orgSize.value.width='none'
      },parseFloat(transDuration.value.enter)*1000)
    }
    function beforeLeave(el:HTMLElement){
      orgSize.value.height = el.offsetHeight+'px';
      orgSize.value.width = el.offsetWidth+'px';
    }
    return {
      orgSize,
      slotHtml,
      slotSizeWrap,
      cellposition,
      transDuration,
      transTiming,
      beforeEnter,
      enter,
      beforeLeave,
    }
  },
})
</script>

<style scoped>
@import url('../css/fade.css');
@import url('../css/zoomin.css');
@import url('../css/scrolldown.css');
@import url('../css/scrollup.css');
@import url('../css/scrollleft.css');
@import url('../css/scrollright.css');
@import url('../css/falling.css');
@import url('../css/zoombounce.css');
@import url('../css/flipx.css');
@import url('../css/flipy.css');
@import url('../css/growy.css');
@import url('../css/growx.css');
.aq-transition-vessel{
  display:flex;
  flex-direction:column;
  position:relative;
  --orgSizeHeight:0;
  --orgSizeWidth:0;
  --cellposition:relative;
  --entertiming:ease;
  --leavetiming:ease;
  --enter:0s;
  --leave:0s;
}
/* 是否启用绝对定位样式 */
/* .aq-transition-vessel-absolute-cell > *{
  position: absolute !important;
} */
</style>

