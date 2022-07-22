<template>
  <div class="containers xcol flex-grow-1 bpmn-editor">
    <div ref="controlDashBoard" class="xrow p-5 border-b border-dark-1 bg-light-10">
      <div class="-mx-5 xrow flex-grow-1 justify-end">

        <bpmn-menu v-if="elementsMenu" 
          :menu="elementsMenu" 
          @buttonClick="methodsDistribute($event)"
          class="mx-5 flex-grow-1">
        </bpmn-menu>

        <bpmn-menu v-if="sysMenus"
          class="mx-5" 
          :menu="sysMenus" 
          @buttonClick="methodsDistribute($event)">
        </bpmn-menu>

        <bpmn-menu v-if="historyMenu"
          class="mx-5" 
          :menu="historyMenu" 
          @buttonClick="methodsDistribute($event)">
        </bpmn-menu>

        <bpmn-menu v-if="alignMenu" 
          class="mx-5"
          :menu="alignMenu" 
          @buttonClick="methodsDistribute($event)">
        </bpmn-menu>

        <bpmn-menu v-if="zoomMenu"
          class="mx-5" 
          :menu="zoomMenu"
          @buttonClick="methodsDistribute($event)">
        </bpmn-menu>

      </div>
      <!-- 用于打开本地文件-->
      <input type="file" id="files" ref="LocalFileReaderDom" class="hidden" accept=".xml, .bpmn, .jn-bpmn"
        @change="importLocalFile" />
      <!-- 用于下载触发标签 -->
      <a ref="downloadLinkDom" class="hidden"></a>
    </div>
    <div class="flex flex-row flex-grow-1 overflow-hidden">
      <div class="flex flex-col flex-grow-1 gird-bg">
        <div class="canvas flex flex-col flex-grow-12" ref="bpmnCanvasDom"></div>
      </div>
    </div>
    <el-dialog v-model="showPreview" width="90%">
      <div class="h-600 overflow-y-auto">
        <hljs-vue-plugin :code="previewCode" class="bpmn-editor text-left text-xs" :language="previewType">
        </hljs-vue-plugin>
      </div>
    </el-dialog>
  </div>
</template>

<style>
.bpmn-editor .canvas {
  width: 100%;
  height: 100%;
}

.bpmn-editor .panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}

/* 隐藏左侧元素添加工具栏 */
.bpmn-editor .djs-palette {
  left: 0px;
  top: 0px;
  height: 100%;
  display: none;
}

.bpmn-editor .bjs-powered-by {
  display: none !important;
}

.bpmn-editor .gird-bg {
  background:
    -webkit-linear-gradient(top, #00000015 1px, transparent 1px, transparent 10px, #00000010 10px,transparent 11px, transparent 19px),
    -webkit-linear-gradient(left, #00000015 1px, transparent 1px, transparent 10px, #00000010 10px,transparent 11px, transparent 19px);
  -webkit-background-size: 41px 41px;
  -moz-background-size: 41px 41px;
  background-size: 41px 41px;
  margin: -1px -1px;
  -webkit-background-size: 20px 20px;
  -moz-background-size: 20px 20px;
  background-size: 20px 20px;
}
</style>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watch, getCurrentInstance, PropType, ComponentPublicInstance } from 'vue';
import * as R from "ramda";
// @ts-ignore ts忽视下一行检测
import uniqid from "uniqid";
import type { MenuItem } from 'types/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
// @ts-ignore ts忽视下一行检测
import BpmnModeler from "bpmn-js/lib/Modeler"; // 建模器
// @ts-ignore ts忽视下一行检测
import tokenSimulation from "bpmn-js-token-simulation"; // 模拟流转流程模块
import customTranslate from "./translate/customTranslate"; // 流程翻译插件
import translationsCN from "./translate/zh"; // 流程翻译文本映射
import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'; // 引入样式
// 系统菜单
import * as ModuleMenusDefault from "./config/controlDashBoardConfig"; // 系统菜单
// heighlight-js 显示
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
// 引入json 转换
import X2JS from "x2js";
const newConvert = new X2JS();
// element 组件引入
import { ElButton, ElTooltip, ElPopper, ElDialog } from "element-plus"; // 引入 element 配置
import customModule from './CustomModeler/index'; // 用户自定义模块
// import BpmnViewer from 'bpmn-js/lib/Viewer'; // 浏览器
import BpmnMenu from "./widgets/bpmn-menu/bpmn-menu";
// methods
import DefaultEmptyXML from "./methods/defaultEmpty"; // 默认空白xml文件创建器
import { HeapProfiler } from 'inspector';

export default defineComponent({
  name: 'bpmn-editor',
  props: { // vue3 中 props 键名首字母不可大写，不可大写，不可大写！！！
    xmlContent: {
      type: [String],
      default: "",
    },
    processType:{
      type: String as PropType<'camunda'|'flowable'|'activiti'>,
      default:"activiti"
    },
    processConfigIgnoreElementTypes:{ // 流程元素扩展配置属性时，可忽略的元素配置;
      type: Array as PropType<string[]>,
      default:()=>['bpmn:Process','bpmn:SequenceFlow','bpmn:TextAnnotation','bpmn:Association']
    },
    elementsMenu: {
      type: [Array, Boolean] as PropType<MenuItem[] | Boolean>,
      default: () => ModuleMenusDefault.elementsMenu
    },
    sysMenus: {
      type: [Array, Boolean] as PropType<MenuItem[] | Boolean>,
      default: () => ModuleMenusDefault.sysMenus
    },
    alignMenu: {
      type: [Array, Boolean] as PropType<MenuItem[] | Boolean>,
      default: () => ModuleMenusDefault.alignMenu
    },
    zoomMenu: {
      type: [Array, Boolean] as PropType<MenuItem[] | Boolean>,
      default: () => ModuleMenusDefault.zoomMenu
    },
    historyMenu: {
      type: [Array, Boolean] as PropType<MenuItem[] | Boolean>,
      default: () => ModuleMenusDefault.historyMenu
    },
  },
  components: { ElButton, ElTooltip, ElPopper, BpmnMenu, ElDialog, hljsVuePlugin: hljsVuePlugin.component },
  setup(props, context) {
    const bpmnCanvasDom = ref(null as any); // 流程画布dom对象
    const LocalFileReaderDom = ref(null as any); // 流程画布dom对象
    const downloadLinkDom = ref(null as any); // 流程画布dom对象
    const { proxy } = (getCurrentInstance() as { proxy:ComponentPublicInstance });
    let showPreview = ref(false); // xml json 预览显示
    let previewCode = ref(``); // 默认代码
    let previewType = ref(``); // 预览模式
    let defaultZoom = ref(1);
    let historyMenu = reactive(R.clone(props.historyMenu));
    let BpmnIns = reactive({} as any);
    // const processConfigIgnoreElementTypes = ref(R.clone(props.processConfigIgnoreElementTypes));
    watch(
      ()=>props.processType,
      (n,o)=>{
        console.log(n,o);
        processRestart()
      }
    );
    onMounted(function () {
      initBpmn(props.xmlContent);
    })
    // methods ---------------------------------------------------------------
    function methodsDistribute(payload: { event?: Event, name: string, params?: any }) {
      const vm = proxy as any;
      if (vm[payload.name]) {
        vm[payload.name](payload.event, payload.params);
      }
    };
    // 打开本地文件 方法块
    function open() {
      LocalFileReaderDom.value?.click()
    }
    function importLocalFile() {
      const file = LocalFileReaderDom.value.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        let loadedXml: string = this.result as string;
        createNewDiagram(loadedXml);
      };
    }
    async function createNewDiagram( xml?:string, processId?:string, processName?:string ) {
      // 将字符串转换成图显示出来
      let newId = processId || uniqid('Process-').toUpperCase();
      let newName = processName || uniqid('未命名流程-').toUpperCase();
      let xmlString = xml || DefaultEmptyXML(newId, newName, props.processType);
      try {
        // @ts-ignore
        let { warnings } = await BpmnIns.importXML(xmlString);
        if (warnings && warnings.length) {
          warnings.forEach((warn:object) => console.warn(warn));
          return;
        }
        addEventBusListener(); // 重新绑定监听element并绑定事件
        addModelerListener(); // 监听modeler并绑定事件
      } catch (e:any) {
        console.error(`[Process Designer Warn]: ${e?.message || e}`);
      }
    }
    // 下载流程图到本地 方法块
    async function downloadProcess(event:PointerEvent, params:any) {
      // 按需要类型创建文件并下载
      try {
        BpmnIns.saveXML().then((res:{xml:string}) => {
          const { definitions } = newConvert.xml2js(res.xml);
          let saveData : {href:string, filename:string} = {href:'',filename:''};
          if (params.type === "xml" || params.type === "bpmn") {
            saveData = setEncoded(params.type.toLowerCase(), res.xml, definitions.process._name);
            downloadFunc(saveData.href, saveData.filename);
          }else{
            BpmnIns.saveSVG().then((res:{svg:string}) => {
              saveData = setEncoded(params.type.toLowerCase(), res.svg, definitions.process._name);
              downloadFunc(saveData.href, saveData.filename);
            })
          }
        }).catch((err:TypeError) => {
          console.error(`[Process Designer Warn ]: ${err.message || err}`);
        });
      } catch (e:any) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`);
      }
      // 文件编码操纵
      function setEncoded(type:string, data:string, filename = "diagram") {
        // console.log(filename)
        const encodedData = encodeURIComponent(data);
        return {
          filename: `${filename}.${type}`,
          href: `data:application/${type === "svg" ? "text/xml" : "bpmn20-xml"};charset=UTF-8,${encodedData}`,
          data: data
        };
      }
      // 文件下载方法
      function downloadFunc(href:string, filename:string) {
        if (href && filename) {
          let alink = downloadLinkDom.value;
          alink.download = filename;
          alink.href = href; //  URL对象
          alink.click(); // 模拟点击
          URL.revokeObjectURL(alink.href);
        }
      }
    }
    // 预览流程数据
    function previewProcess(event:PointerEvent, params:any) {
      BpmnIns.saveXML({ format: true }).then(({ xml }:{xml:string}) => {
        switch (params) {
          case 'json':
            BpmnIns.saveXML({ format: true }).then(({ xml }:{xml:string}) => {
              const { definitions } = newConvert.xml2js(xml);
              if (definitions) {
                previewCode.value = JSON.stringify(definitions, null, 4);
              } else {
                previewCode.value = "";
              }
              previewType.value = "json";
              showPreview.value = true;
            });
            break;
          default:
            previewCode.value = xml;
            previewType.value = "xml";
            showPreview.value = true;
            break;
        }
      });
    }
    // 触发流程模拟工具
    function processSimulation() {
      // const vm = this;
      // vm.simulationStatus = !vm.simulationStatus;
      BpmnIns.get("toggleMode").toggleMode();
    }
    // 流程编辑步骤跳转
    function processEditJump(event:PointerEvent, FuncName:string) {
      BpmnIns.get("commandStack")[FuncName]();
    }
    // 重置为空流程
    function processRestart(event?:PointerEvent, params?:any) {
      createNewDiagram();
    };
    // 流程画布缩放操纵
    function processZoom(event:PointerEvent, zoomStep:number = 0.1) {
      let newZoom = Math.floor(defaultZoom.value * 100 + zoomStep * 100) / 100;
      if (newZoom < 0.2) {
        throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");
      }
      defaultZoom.value = newZoom;
      BpmnIns.get("canvas").zoom(defaultZoom.value);
    }
    // 节点对齐操作
    function elementsAlign(event:PointerEvent, align:string) {
      const Align = BpmnIns.get("alignElements");
      const Selection = BpmnIns.get("selection");
      const SelectedElements = Selection.get();
      if (!SelectedElements || SelectedElements.length <= 1) {
        console.log(getCurrentInstance());
        //$message.warning("请按住 Ctrl 键选择多个元素对齐");
        return;
      }
      Align.trigger(SelectedElements, align);
    }
    // 流程面板自定义添加元素 方法
    function processCreateElement(event:PointerEvent, params:any) {
      // console.log(event,params);
      const ElementFactory = BpmnIns.get('elementFactory');
      const create = BpmnIns.get("create");
      const options:any = params.options | {} as any;
      const shape = ElementFactory.createShape(R.mergeAll([{ type: `bpmn:${params.type}` }, options]));
      if (R.isEmpty(options)) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }
      create.start(event, shape);
    }
    // 启动面板工具
    function startTool(event:PointerEvent, params:any) {
      // console.log(event, params)
      if (params === "handTool") {
        BpmnIns.get("handTool").activateHand(event);
      }
      if (params === "lassoTool") {
        BpmnIns.get("lassoTool").activateSelection(event);
      }
      if (params === "connectTool") {
        BpmnIns.get("globalConnect").toggle(event);
      }
    }
    // 初始化流程模型
    function initBpmn(xmlStr = '') {
      BpmnIns = new BpmnModeler({
        container: bpmnCanvasDom.value,
        additionalModules: [
          tokenSimulation,
          {
            translate: ["value", customTranslate(translationsCN)]
          }
        ]
      }); // 建模
      if (R.isEmpty(xmlStr) || R.isNil(xmlStr)) {
        console.warn('未能成功导入流程数据，当前工作更改为创建新的流程！')
        processRestart();
      } else {
        BpmnIns.importXML(xmlStr).then(() => {
          addEventBusListener(); // 监听element并绑定事件
          addModelerListener(); // 监听modeler并绑定事件
        }).catch((err:Error) => {
          console.error(err, 'xml内容加载失败！');
        })
      }
    }
    // 监听 commandStack 事件
    function addEventBusListener() {
      const EventBus = BpmnIns.get("eventBus");
      // 注册需要的监听事件, 将. 替换为 - , 避免解析异常
      ['element.click', 'element.changed'].forEach(event => {
        EventBus.on(event, function (e:any) {
          let eventName = event.replace(/\./g, "-");
          if(!props.processConfigIgnoreElementTypes.includes(e.element.type)){
            let element = e ? e.element : null;
            let businessObject = getProcessElementById(element.id,eventName)?.businessObject;
            context.emit(eventName, R.mergeAll([e,{ 
              eventName:eventName, // 事件名称
              elementId:e.element.id, // 元素ID
              elementType:e.element.type, // 元素类型
              businessObject:businessObject // 业务对象
            }]));
          }else{
            let elementId = BpmnIns._definitions.id.split('_')[1];
            let element = getProcessElementById(elementId,eventName);
            context.emit(eventName,R.mergeAll([e,{ 
              eventName:eventName, // 事件名称
              elementId:elementId, // 元素ID
              element:element,
              elementType:element.type, // 元素类型
              businessObject:element.businessObject // 业务对象
            }]));
          }
        });
      });
      // 监听图形改变返回xml
      EventBus.on("commandStack.changed", async (event:any) => {
        try {
          if (historyMenu!=false) {
            let prevIndex:number = R.findIndex(R.propEq('tips','前进'))(historyMenu as []);
            let backIndex:number = R.findIndex(R.propEq('tips','后退'))(historyMenu as []);
            prevIndex >= 0 && ((historyMenu as MenuItem[])[prevIndex].disabled = !BpmnIns.get("commandStack").canUndo());
            backIndex >= 0 && ((historyMenu as MenuItem[])[backIndex].disabled = !BpmnIns.get("commandStack").canRedo());
          }
          let { xml } = await BpmnIns.saveXML({ format: true });
          context.emit("commandStack-changed", event);
          context.emit("input", xml);
          context.emit("change", xml);
        } catch (e:any) {
          console.error(`[Process Designer Warn]: ${e.message || e}`);
        }
      });
      // // 监听视图缩放变化
      BpmnIns.on("canvas.viewbox.changed", ({ viewbox }:{ viewbox:unknown }) => {
        context.emit("canvas-viewbox-changed", { viewbox });
        const { scale } = viewbox as { scale:number };
        defaultZoom.value = Math.floor(scale * 100) / 100;
        // console.log(defaultZoom.value,'3333')
      });
    }
    // 监听modeler并绑定事件
    function addModelerListener() {
      const events = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end', 'connect.move'];
      events.forEach(function (event) {
        BpmnIns.on(event, (e:any ) => {
          let eventName = event.replace('.', '-');
          let elementRegistry = BpmnIns.get('elementRegistry');
          let shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
          e.type = event;
          context.emit(eventName, { event:R.clone(e), shape: shape });
        })
      })
    }
    // 通过ID获取流程元素;
    function getProcessElementById( id:string, eventName?:string ) {
      return BpmnIns.get('elementRegistry')?.get(id);
    }
    // 设置流程元素
    function setProcessElementById( id:string, properties?:any, funcName:string='updateProperties' ){
      let element = getProcessElementById(id);
      console.log(1,BpmnIns.get('modeling')[funcName],funcName);
      // ['updateProperties','updateModdleProperties','toggleCollapse']
      BpmnIns.get('modeling')[funcName](element,properties);
    }
    return {
      bpmnCanvasDom,
      LocalFileReaderDom,
      downloadLinkDom,

      showPreview,
      previewCode,
      previewType,
      defaultZoom,
      historyMenu,
      BpmnIns,

      initBpmn,
      open,
      importLocalFile,
      downloadProcess,
      methodsDistribute,
      getProcessElementById,
      setProcessElementById,
      elementsAlign,
      processZoom,
      startTool,
      previewProcess,
      processCreateElement,
      processRestart,
      processSimulation,
      processEditJump
    }
  },
})
</script>
