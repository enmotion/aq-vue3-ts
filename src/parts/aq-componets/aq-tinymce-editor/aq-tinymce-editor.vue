<template>
  <div ref="tinymceContainerDom" class="xcol tinymce-editor overflow-hidden" >
    <div class="xcol flex-grow-1" :class="[disabled?'-mx-10 -mt-15':'']">
      <textarea ref="tinymceDom" class="xcol flex-grow-1"></textarea>
    </div>    
  </div>
</template>

<style>
@import url('tinymce/skins/content/tinymce-5/content.min.css');
/* @import url('tinymce/skins/content'); */
.tinymce-editor .tox-tinymce{
  border:none !important
}
body{
  margin: 0px !important;
}
</style>

<script lang="ts">
/* 
 * tinymce 需要将其包内资源 拷贝到dist文件方可实现以下路径配置，具体操作见 vite.config.ts
 * vite-plugin-static-copy 插件是完成此拷贝的关键
*/
import * as R from "ramda";
import { defineComponent, ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue';
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
      default:'',
    },
    disabled:{
      type:Boolean as PropType<boolean>,
      default:false,
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
    initOption:{
      type:Object as PropType<RawEditorOptions>,
      default:()=>({}),
    }
  },
  emits:['update:content'],
  setup(props,context) {
    const tinymceContainerDom = ref({} as {value?:Element}); //容器DOM
    const tinymceDom = ref({} as {value?:HTMLElement}); //实例DOM
    const tinymceVesselSize = ref({width:0,height:0} as DOMRect); // 实例容器布局数据
    const tinymceEditorInstance = ref({} as Editor)
    const tinymceContainerObserver = reactive({} as any); // tinymceContainerDom 容器尺寸变化监听器

    let content = ref(props.content); // 引入外部变量
    const editorConfig = computed(()=>{
      let config:RawEditorOptions = R.mergeDeepRight(R.pick(['menubar','resize','statusbar'],props), props.initOption);
      if(props.disabled){
        config.menubar=false;
        config.resize=false;
        config.statusbar=false;
        config.readonly=true,
        config.plugins='autoresize'
        config.toolbar=''
      }
      return R.mergeDeepRight(baseDefaultConfig,config) as RawEditorOptions
    })    
    function onChanged(content:string){
      context.emit('update:content',content);
    }
    function tinymceInit(config:RawEditorOptions,containerSize:DOMRect){
      console.log(config,'tinymceInit')
      tinymce.init(R.mergeDeepRight( config ,{
        target:tinymceDom.value,
        height:containerSize.height,
        setup:(editor) => {
          tinymceEditorInstance.value = editor;
          useFullWidth(editor);          
          editor.on('init', (e) => {
            editor.setContent(content.value)
          });
          editor.on('Change', (e) => {
            editor.getContent()
            onChanged(editor.getContent());
          });
        }
      } as RawEditorOptions) as RawEditorOptions)
    }
    // watch
    watch(()=>props.content,(n,o)=>{
      // 只有在预览模式下，才可以侦听外部内容的变化
      if(props.disabled){
        tinymceEditorInstance.value.setContent(n)
      }
    })
    // 生命周期处理函数
    onMounted(()=>{
      tinymceContainerObserver.value = new ResizeObserver(() => {
        tinymceVesselSize.value = (tinymceContainerDom.value as Element).getBoundingClientRect();
        tinymceInit(editorConfig.value,tinymceVesselSize.value)
      })
      tinymceContainerObserver.value.observe(tinymceContainerDom.value); // 添加侦听
    })
    onUnmounted(()=>{
      tinymceContainerObserver.value.disconnect(); // 关闭侦听
    })
    return {
      tinymceDom,
      tinymceContainerDom,
      tinymceVesselSize,
      onChanged,
    }
  },
})
</script>
