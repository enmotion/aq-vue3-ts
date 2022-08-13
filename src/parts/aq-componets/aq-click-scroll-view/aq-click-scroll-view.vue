<template>
  <div class="xrow text-white flex-grow-1 flex-shrink-1 px-20">
    <span v-if="showMoveArrow" class="w-20 xcol justify-center iconfont icon-arrowL border-r-1 border-light-2 btn" @click="scrollTo(-1)"></span>
    <div ref="ScrollContainerDom" class="flex-grow-1 h-auto xrow overflow-hidden transition-all duration-300 scroll-smooth" style="width:0px">
      <div ref="ScrollContentDom" class="xrow w-auto flex-shrink-0">
        <slot></slot>
      </div>
    </div>
    <span v-if="showMoveArrow" class="w-20 xcol justify-center iconfont icon-arrowR border-l-1 border-light-2 btn" @click="scrollTo(1)"></span>
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
      console.log(DisplayRect.rect.width,ContentRect.rect.width);
      return DisplayRect.rect.width - ContentRect.rect.width < 0;
    })
    onMounted(() => {
      ScrollContainerDomResizeObserver = new ResizeObserver(() => {
        DisplayRect.rect = ScrollContainerDom.value.getBoundingClientRect();
        ContentRect.rect = ScrollContentDom.value.getBoundingClientRect();
        console.log(DisplayRect,ContentRect)
        // ScrollContainerDom.value.scrollLeft = 100;
      })
      ScrollContainerDomResizeObserver.observe(ScrollContainerDom.value); // 添加侦听 
    });
    onUnmounted(() => {
      ScrollContainerDomResizeObserver.disconnect();
    });
    function scrollTo(step:number){
      console.log(step*DisplayRect.rect.width)
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

