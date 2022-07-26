<template>
  <div class="flex flex-col flex-grow-1 flex-shrink-1 overflow-hidden">
    <div ref="ScrollContainerDom" class="relative h-full overflow-hidden">
      <div class="absolute h-full w-full overflow-hidden">
        <el-scrollbar v-if="!disabled" v-bind="scrollBarProps" :height="ScrollContainerDomSize.h" @scroll="scroll">
        <div ref="ContentContainerDom" class="flex flex-col">
          <slot></slot>
        </div>
        </el-scrollbar>
        <div v-if="disabled" class="flex flex-col">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted, onUnmounted, PropType } from 'vue';
import { ElScrollbar } from 'element-plus';

export default defineComponent({
  props:{
    disabled:{
      type:Boolean,
      default:false,
    },
    scrollBarProps:{
      type:Object as PropType<{
        height?:string|number,
        maxHeight?:string|number,
        native?:boolean,
        wrapStyle?:string,
        wrapClass?:string,
        viewStyle?:string,
        viewClass?:string,
        noresize?:boolean,
        tag?:string,
        always?:boolean,
        minSize?:number
      }>,
      default:()=>({})
    }
  },
  components:{ ElScrollbar },
  setup(props,context) {
    const ScrollContainerDom = ref(null as any);
    const ScrollContainerDomSize = reactive({w:0,h:0});
    let ScrollContainerDomResizeObserver = reactive({} as any); // bpmnDesignDom 容器监听器
    console.log(props,123)
    const scrollBarProps = computed(()=>props.scrollBarProps)
    onMounted(() => {
      // 计算属性面板所需宽度
      ScrollContainerDomResizeObserver = new ResizeObserver(() => {
        ScrollContainerDomSize.w = ScrollContainerDom.value.clientWidth;
        ScrollContainerDomSize.h = ScrollContainerDom.value.clientHeight;
      })
      ScrollContainerDomResizeObserver.observe(ScrollContainerDom.value); // 添加侦听
    })
    onUnmounted(() => {
      ScrollContainerDomResizeObserver.disconnect(); // 关闭侦听
    })
    function scroll(data:any){
      console.log(data)
    }
    return {
      scrollBarProps,
      ScrollContainerDom,
      ScrollContainerDomResizeObserver,
      ScrollContainerDomSize,
      scroll
    }
  },
})
</script>
