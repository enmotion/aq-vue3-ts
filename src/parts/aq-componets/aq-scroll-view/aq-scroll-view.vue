<template>
  <div class="flex flex-col flex-grow-1 flex-shrink-1 overflow-hidden">
    <div ref="ScrollContainerDom" class="relative h-full overflow-hidden">
      <div class="absolute h-full w-full">
        <el-scrollbar v-if="!disabled" v-bind="scrollBarProps" :height="ScrollContainerDomSize.h" @scroll="scroll">
          <div ref="SlotContainerDom" class="h-auto w-auto flex-grow-0 flex-shrink-0">
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
  emits: ['onScrollToTop','onScrollToBottom'],
  setup(props,context) {
    const ScrollContainerDom = ref(null as any);
    const SlotContainerDom = ref(null as any);
    const ScrollContainerDomSize = reactive({w:0,h:0});
    const isAlreadyTrigged = reactive({
      top:false,
      bottom:false,
    })
    let ScrollContainerDomResizeObserver = reactive({} as any); // bpmnDesignDom 容器监听器
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
      if(data.scrollTop <= 0 ){
        if(!isAlreadyTrigged.top){
          isAlreadyTrigged.top = true;
          context.emit('onScrollToTop','top');
        }
      }else{
        isAlreadyTrigged.top = false;
      }
      if(data.scrollTop >= SlotContainerDom.value.clientHeight-ScrollContainerDomSize.h){
        if(!isAlreadyTrigged.bottom){
          isAlreadyTrigged.bottom = true;
          context.emit('onScrollToBottom','bottom');
        }
      }else{
        isAlreadyTrigged.bottom = false;
      }
    }
    return {
      scrollBarProps,
      ScrollContainerDom,
      SlotContainerDom,
      ScrollContainerDomResizeObserver,
      ScrollContainerDomSize,
      isAlreadyTrigged,
      scroll
    }
  },
})
</script>
