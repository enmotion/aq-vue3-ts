<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
      <span class="w-40 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bp</span>
      <span class="h-40 xrow items-center justify-end flex-grow-1 p-10">
        <!-- <span class="flex flex-grow-1">{{screen}}</span> -->
        <el-button 
          size="small" 
          type="danger" 
          class="mx-0 mr-5 last:mr-0">
          发布
        </el-button>
        <el-button 
          size="small" 
          type="success" 
          class="mx-0 mr-5 last:mr-0">
          保存
        </el-button>
      </span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
      <div class="w-40 bg-p-1 border-r border-dark-2 p-5">
        <element-menu 
          :menu="elementsMenus" 
          :processType="'aaa'" 
          @buttonClick="processFuncHandler($event)">
        </element-menu>
      </div>
      <div ref="bpmnDesignDom" class="xcol flex-grow-1">
        <splitpanes :horizontal="false">
          <pane class="xcol" 
            :min-size="20" 
            :size="100 - propEditorWidthPercent" 
            :max-size="100 - propEditorWidthPercent">
            <aq-bpmn-editor ref="bpmnDom" 
              :xml-content="xmlStr"
              :process-type="processType" 
              :elements-menu="false"
              @element-click="clickEvent($event)" 
              @shape-removed="removedEvent($event)">
            </aq-bpmn-editor>
          </pane>
          <pane class="xcol bg-d-10" 
            :min-size="propEditorWidthPercent" 
            :size="propEditorWidthPercent" 
            :max-size="80">
            <div class="bg-white flex-grow-1 xcol">
              <div class="xcol p-10 text-xs text-left break-all flex-grow-1 bg-dark-2 flex-col">
                <span class="h-50 border border-dark-2 rounded-md bg-white p-10 overflow-hidden items-center text-xs xrow">
                  {{currentItem.businessObject?.name}}
                  <el-switch v-model="isSaved" size="small"></el-switch>
                </span>
                <aq-scroll-view :disabled="false" 
                  class="flex-grow-1 flex-shrink-1 -mr-10 mt-10" 
                  :scrollBarProps="{ wrapClass:'pr-10',viewClass:'bg-white', always:true, minSize:50}"
                  @on-scroll-to-top="onscroll"
                  @on-scroll-to-bottom="onscroll">
                  <div class=" flex flex-col p-10" style="height:1000px;">
                    <span class="h-20 ">ddd</span>
                  </div>
                </aq-scroll-view>
              </div>
            </div>
          </pane>
        </splitpanes>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { ref, reactive, onMounted, onUnmounted, defineComponent, inject, computed, getCurrentInstance, ComponentPublicInstance } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import 'splitpanes/dist/splitpanes.css';
import ElementMenu from './widgets/elementMenu.vue';
import { elementsMenu } from "@src/parts/aq-componets/aq-bpmn-editor/config/controlDashBoardConfig";
import { global } from "./config/processJsonData-base";
import { ElButton, ElSwitch } from "element-plus";
import { sample } from "@src/xml/xmlStr";
import { MenuItem } from "@typ/bpmn-editor/controlDashBoradConfig";
import AqScrollView from "@src/parts/aq-componets/aq-scroll-view/aq-scroll-view.vue";
import aqBpmnEditor from "@src/parts/aq-componets/aq-bpmn-editor/aq-bpmn-editor.vue";

export default defineComponent({
  components: { ElementMenu, ElSwitch, Splitpanes, Pane, ElButton, AqScrollView, aqBpmnEditor },
  setup(props, context){
    // 组件配置数据 
    const screen = inject("screen"); // 引入屏幕
    const processType = ref('flowable' as 'camunda'|'flowable'|'activiti'); // 流程引擎类型
    const { proxy } = (getCurrentInstance() as { proxy:ComponentPublicInstance });
    const isMessageBoxActived = ref(false); // 避免重复弹窗
    const isSaved = ref(false); // 是否已保存
    // 组件嵌套实例
    const bpmnDom = ref(null as any); // bpmn-editor 组件实例 Dom
    const bpmnDesignDom = ref(null as any); // bpmn-editor + prop-editor 组件实例 Dom
    // 属性编辑面板宽度计算
    let bpmnDesignContainerResizeObserver = reactive({} as any); // bpmnDesignDom 容器监听器
    const bpmnPropEditorMinWidth: number = 360; // 编辑面板最小宽度 单位px
    // data 数据
    let propEditorWidthPercent = ref(0); // 属性编辑面板百分比宽度
    let xmlStr = ref(sample as string); // 导入的流程数据
    let elementsMenus = reactive( elementsMenu[0].children as MenuItem[] ); // 流程元素添加菜单
    let currentItem = reactive({
      id:'',
      businessObject:null as any
    }); // 当前属性配置
    // 生命周期函数；
    onMounted(() => {
      // 阻止浏览器跳转
      history.pushState({title:"",url:""}, "", document.URL); // 塞空值
      window.addEventListener('popstate', preventBrowserBack); // 绑侦听
      // 计算属性面板所需宽度
      bpmnDesignContainerResizeObserver = new ResizeObserver(() => {
        propEditorWidthPercent.value = Math.min(Math.round(bpmnPropEditorMinWidth / bpmnDesignDom.value.clientWidth * 100), 50);
      })
      bpmnDesignContainerResizeObserver.observe(bpmnDesignDom.value); // 添加侦听
    })
    onUnmounted(() => {
      window.removeEventListener('popstate', preventBrowserBack); // 关闭侦听
      bpmnDesignContainerResizeObserver.disconnect(); // 关闭侦听
    })
    function preventBrowserBack(event:Event){
      let vm  = proxy as any;
      if(!isSaved.value){
        event.preventDefault();
        history.pushState({title:"",url:""}, "", document.URL);
        if(!isMessageBoxActived.value){
          isMessageBoxActived.value = true;
          vm.$confirm({
            message:`您当前的操作尚未保存，是否确认返回上一页并放弃保存`,
            customClass:'msg-light'
          }).then(()=>{
            history.go(-2);
          }).catch(()=>{
            isMessageBoxActived.value = false;
          })
        }
      }else{
        history.go(-1);
      }
    }
    function clickEvent($event:any) {
      const businessObject = R.clone( $event.businessObject );
      const currentBusinessObjects = R.mergeAll([global,$event.businessObject.$attrs.params||{},businessObject]);
      currentItem.businessObject = currentBusinessObjects;
    }
    function removedEvent($event: any) {
      console.log('removeEvent');
      console.log($event)
    }
    function processFuncHandler(event: { event: Event, name: string, params?: any }) {
      bpmnDom.value.methodsDistribute(event);
    }
    function onscroll(value:string){
      console.log(value)
    }
    return {
      screen,
      processType,
      bpmnDom,
      bpmnDesignDom,
      propEditorWidthPercent,
      xmlStr,
      elementsMenus,
      currentItem,
      isSaved,

      clickEvent,
      removedEvent,
      processFuncHandler,
      onscroll
    }
  }
})
</script>
