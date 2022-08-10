<template>
  <div class="aq-transition-group-vessel">
    <TransitionGroup tag="ul" name="fade" class="container">
      <slot></slot>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
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
      default:true,
    },
    timing:{
      type:[String,Object] as PropType<TranstionTypes.timing|{enter:TranstionTypes.timing,leave:TranstionTypes.timing}>,
      default:()=>({enter:'ease',leave:[0,0.5,1,0.5]})
    },
    perspective:{ // 过渡效果透视强度
      type:Number,
      default:500,
    }
  },
  setup(props,context) {
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
    return {
      transDuration,
      transTiming,
    }
  },
})
</script>

<style>
/* @import url('../css/fade.css');
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
@import url('../css/growx.css'); */
.aq-transition-group-vessel .container{
  text-align: left !important;
  position:relative;
  padding: 0;
  /* display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  flex-grow:1;
  align-items:flex-start;
  align-content:flex-start; */
  --entertiming:ease;
  --leavetiming:ease;
  --enter:0s;
  --leave:0s;
}
.aq-transition-group-vessel .container>*{
  background-color: #000 !important;
}
/* 是否启用绝对定位样式 */
.aq-transition-vessel-absolute-cell >*{
  position: absolute !important;
}

/* 1. 声明过渡效果 */
.aq-transition-group-vessel .fade-move,
.aq-transition-group-vessel .fade-enter-active,
.aq-transition-group-vessel .fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.aq-transition-group-vessel .fade-enter-from,
.aq-transition-group-vessel .fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(0px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.aq-transition-group-vessel .fade-leave-active {
  position: absolute;
}
</style>

