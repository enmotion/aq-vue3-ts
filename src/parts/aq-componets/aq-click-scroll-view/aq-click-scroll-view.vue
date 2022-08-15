<template>
  <div class="xrow items-center text-white flex-grow-1 flex-shrink-1 px-20">
    <span v-if="showMoveArrow" @click="scrollTo(-1)" class="w-20 h-20 xcol justify-center">
      <slot name="leftArrow">
        <span class="iconfont icon-arrowL font-bold btn text-xs text-light-12 hover:text-s-10 duration-300 transition-all"></span>
      </slot>
    </span>
    <div ref="ScrollContainerDom" class="flex-grow-1 h-auto xrow overflow-hidden transition-all duration-300 scroll-smooth" style="width:0px">
      <div ref="ScrollContentDom" class="xrow w-auto flex-shrink-0">
        <slot></slot>
      </div>
    </div>
    <span v-if="showMoveArrow" @click="scrollTo(1)" class="w-20 h-20 xcol justify-center">
      <slot name="rightArrow">
        <span class="iconfont icon-arrowR font-bold btn text-xs text-light-12 hover:text-s-10 duration-300 transition-all"></span>
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onUnmounted, computed} from 'vue';
import type { } from "vue";

export default defineComponent({
  setup(props,context) {
    const ScrollContainerDom = ref(null as any);
    const ScrollContentDom = ref(null as any);
    let DisplayRect = reactive({rect:{width:0,height:0}});
    let ContentRect = reactive({rect:{width:0,height:0}});
    let ScrollContainerDomResizeObserver = reactive({} as any); // 添加侦听
    let showMoveArrow = computed(()=>{
      return DisplayRect.rect.width - ContentRect.rect.width < 0;
    })
    onMounted(() => {
      ScrollContainerDomResizeObserver = new ResizeObserver(() => {
        DisplayRect.rect = ScrollContainerDom.value.getBoundingClientRect();
        ContentRect.rect = ScrollContentDom.value.getBoundingClientRect();
      })
      ScrollContainerDomResizeObserver.observe(ScrollContainerDom.value); // 添加侦听 
      ScrollContainerDomResizeObserver.observe(ScrollContentDom.value);
    });
    onUnmounted(() => {
      ScrollContainerDomResizeObserver.disconnect();
    });
    function scrollTo(step:number){
      ScrollContainerDom.value.scrollLeft+= (step*DisplayRect.rect.width);
    }
    return {
      showMoveArrow,
      DisplayRect,
      ContentRect,
      ScrollContainerDom,
      ScrollContentDom,
      scrollTo
    }
  },
})
</script>

