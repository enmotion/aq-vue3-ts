<template>
  <div ref="tinymceContainerDom" class="xcol">
    <textarea ref="tinymceDom" :key="tinymceRenderKey" class="xcol"></textarea>
  </div>
</template>

<script lang="ts">
/* 
 * tinymce 需要将其包内资源 拷贝到dist文件方可实现以下路径配置，具体操作见 vite.config.ts
 * vite-plugin-static-copy 插件是完成此拷贝的关键
*/
import * as R from "ramda";
import { defineComponent, ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import type { PropType } from "vue";
import tinymce from "tinymce";
import type { RawEditorOptions, Editor } from "tinymce/tinymce";
import "./language/ZH/zh-Hans.js";
import "tinymce/themes/silver/theme.js";
import "tinymce/models/dom/model.js";
import "tinymce/icons/default/icons.js";
import baseDefaultConfig from "./component.lib/config";
import useFullWidth from "./component.lib/plugin/imgFullWidth";

export default defineComponent({
  props:{
    content:{
      type:String as PropType<string>,
      default:'dfadsfsdasr',
    },
    disabled:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
    menubar:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
    resize:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
    statusbar:{
      type:Boolean as PropType<boolean>,
      default:true,
    },
  },
  setup(props,context) {
    const tinymceContainerDom = ref({} as {value?:Element}); //容器DOM
    const tinymceDom = ref({} as {value?:HTMLElement}); //实例DOM
    const tinymceVesselSize = ref({width:0,height:0} as DOMRect); // 实例容器布局数据
    const tinymceContainerObserver = reactive({} as any); // tinymceContainerDom 容器尺寸变化监听器
    let tinymceRenderKey = ref(0);
    let content = ref(props.content); // 引入外部变量
    const editorConfig = computed(()=>{
      return baseDefaultConfig
    })
    onMounted(()=>{
      tinymceVesselSize.value = (tinymceContainerDom.value as Element).getBoundingClientRect();
      tinymceContainerObserver.value = new ResizeObserver(() => {
        tinymceVesselSize.value = (tinymceContainerDom.value as Element).getBoundingClientRect();
        tinymceInit(editorConfig.value,tinymceVesselSize.value)
      })
      tinymceContainerObserver.value.observe(tinymceContainerDom.value); // 添加侦听
      tinymceInit(editorConfig.value,tinymceVesselSize.value)
    })
    onUnmounted(()=>{
      tinymceContainerObserver.value.disconnect(); // 关闭侦听
    })
    function onChanged(v:string){
      console.log(v,'here is what i say')
    }
    function tinymceInit(config:RawEditorOptions,containerSize:DOMRect){
      tinymce.init(R.mergeDeepRight( config ,{
        target:tinymceDom.value,
        height:containerSize.height,
        setup:(editor) => {
          useFullWidth(editor);
          editor.on('init', (e) => {
            editor.setContent(content.value)
          });
          editor.on('Change', (e) => {
            onChanged(editor.getContent());
          });
        }
      } as RawEditorOptions) as RawEditorOptions)
    }
    return {
      tinymceDom,
      tinymceContainerDom,
      tinymceVesselSize,
      tinymceRenderKey,
      onChanged,
    }
  },
})
</script>
