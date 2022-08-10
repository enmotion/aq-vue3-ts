<template>
  <div class="aq-transition-vessel" :style="{perspective:perspective,'--enter':transDuration.enter,'--leave':transDuration.leave,}">
    <!-- <span class="text-white absolute bg-black p-10">{{name}}</span> -->
    <Transition :name="name" :mode="mode">
      <slot></slot>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import type { PropType } from "vue";
import transtionTypes from "../types/transtion";

export default defineComponent({
  props:{
    name:{ // 过渡效果名称
      type:String as PropType<transtionTypes.name>,
      default:'fade'
    },
    mode:{ // 过渡播放模式
      type:String as PropType<transtionTypes.mode>,
      default:'default'
    },
    duration:{ // 过渡持续时长
      type:[Number,Object] as PropType<number|{enter:number,leave:number}>,
      default:()=>({enter:300,leave:300}),
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
    return {
      transDuration,
    }
  },
})
</script>

<style scoped>
@import url('../css/fade.css');
@import url('../css/scrolldown.css');
.aq-transition-vessel{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  flex-grow:1;
  align-items:flex-start;
  align-content:flex-start;
  position:relative;
  --enter:0s;
  --leave:0s;
}
</style>

