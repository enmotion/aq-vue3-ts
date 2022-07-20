<template>
	<div class="containers xcol flex-grow-1 bpmn-editor">
		<div ref="controlDashBoard" class="xrow p-5 border-b border-dark-2 bg-light-10">
			<div class="-mx-5 xrow flex-grow-1 justify-end">

				<bpmn-menu v-if="elementsMenu" 
					:menu="elementsMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5 flex-grow-1">
				</bpmn-menu>
				
				<bpmn-menu v-if="sysMenus" 
					:menu="sysMenus" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

				<bpmn-menu v-if="historyMenu" 
					:menu="historyMenu"
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

				<bpmn-menu v-if="alignMenu" 
					:menu="alignMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

				<bpmn-menu v-if="zoomMenu" 
					:menu="zoomMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

			</div>
			<!-- 用于打开本地文件-->
      <input type="file" id="files" ref="LocalFileReaderDom" class="hidden" accept=".xml, .bpmn, .jn-bpmn" @change="importLocalFile" />
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
				<hljs-vue-plugin :code="previewCode" class="bpmn-editor text-left text-xs" :language="previewType"></hljs-vue-plugin>
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
.bpmn-editor .djs-palette{
	left:0px;
	top:0px;
	height:100%;
	display: none;
}
.bpmn-editor .bjs-powered-by{
	display: none !important;
}
.bpmn-editor .gird-bg{
	background:
	-webkit-linear-gradient(top, transparent 1px, #F0F0F0 1px, #cdcdcd 2px, transparent 2px, transparent 69px, #F0F0F0 60px),
	-webkit-linear-gradient(left, transparent 1px, #F0F0F0 1px, #cdcdcd 2px, transparent 2px, transparent 69px, #F0F0F0 60px);
	-webkit-background-size: 31px 31px;
	-moz-background-size: 31px 31px;
	background-size: 31px 31px;
	margin: -3px -2px;
	-webkit-background-size: 15px 15px;
	-moz-background-size: 15px 15px;
	background-size: 15px 15px;
}

</style>
<script>
import { defineComponent, ref, reactive, onMounted, watch, getCurrentInstance } from 'vue';
import * as R from "ramda";
// @ts-ignore
import BpmnModeler from "bpmn-js/lib/Modeler"; // 建模器
// @ts-ignore
import tokenSimulation from "bpmn-js-token-simulation"; // 模拟流转流程模块

import customTranslate from "./translate/customTranslate";
import translationsCN from "./translate/zh";

import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'; // 引入样式
import * as ModuleMenusDefault from "./config/controlDashBoardConfig"; // 系统菜单
// heighlight-js
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import { xmlStr } from '@src/xml/xmlStr'; // 导入模型默认xml结构
import { ElButton, ElTooltip, ElPopper, ElDialog } from "element-plus"; // 引入 element 配置
import customModule from './CustomModeler/index';
// import BpmnViewer from 'bpmn-js/lib/Viewer'; // 浏览器
import BpmnMenu from "./widgets/bpmn-menu/bpmn-menu";
// methods
import DefaultEmptyXML from "./methods/defaultEmpty"; // 默认空白xml文件创建器

// 引入json转换
import X2JS from "x2js";

export default defineComponent({
	name: 'bpmn-editor',
	props: { // vue3 中 props 键名首字母不可大写，不可大写，不可大写！！！
		xmlContent: {
			type:[String],
			default:"",
		},
		elementsMenu:{
			type:[Array,Boolean],
			default:() => ModuleMenusDefault.elementsMenu
		},
		sysMenus:{
			type:[Array,Boolean],
			default:() => ModuleMenusDefault.sysMenus
		},
		alignMenu:{
			type:[Array,Boolean],
			default:() => ModuleMenusDefault.alignMenu
		},
		zoomMenu:{
			type:[Array,Boolean],
			default:() => ModuleMenusDefault.zoomMenu
		},
		historyMenu:{
			type:[Array,Boolean],
			default:() => ModuleMenusDefault.historyMenu
		},
	},
	components: { ElButton, ElTooltip, ElPopper, BpmnMenu, ElDialog, hljsVuePlugin:hljsVuePlugin.component },
	setup( props, context){
		const bpmnCanvasDom = ref(null); // 流程画布dom对象
		const LocalFileReaderDom = ref(null); // 流程画布dom对象
		const downloadLinkDom = ref(null); // 流程画布dom对象

		let showPreview = ref(false); // xml json 预览显示
		let previewCode = ref(``); // 默认代码
		let previewType = ref(``); // 预览模式
		let defaultZoom = ref(1);
		let historyMenu = reactive(R.clone(props.historyMenu));
		let BpmnIns = reactive({});
		
		onMounted(function(){
			initBpmn(props.xmlContent);
		})
		// methods ---------------------------------------------------------------
		function methodsDistribute(payload){
			const vm = this ;
			if(vm[payload.name]){
				vm[payload.name](payload.event,payload.params);
			}
		};
		// 打开本地文件 方法块
		function open(){
			LocalFileReaderDom.value.click()
		}
		function importLocalFile(){
      const file = LocalFileReaderDom.value.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        let loadedXml = this.result;
        createNewDiagram(loadedXml);
      };
		}
		async function createNewDiagram(xml, processId, processName) {
      // 将字符串转换成图显示出来
      let newId = processId || `Process_${new Date().getTime()}`;
      let newName = processName || `业务流程_${new Date().getTime()}`;
      let xmlString = xml || DefaultEmptyXML(newId, newName, 'activiti');
      try {
        let { warnings } = await BpmnIns.importXML(xmlString);
        if (warnings && warnings.length) {
          warnings.forEach(warn => console.warn(warn));
					return;
        }
				addEventBusListener(); // 重新绑定监听element并绑定事件
				addModelerListener(); // 监听modeler并绑定事件
      } catch (e) {
        console.error(`[Process Designer Warn]: ${e?.message || e}`);
      }
    }
		// 下载流程图到本地 方法块
    /**
     * @param {string} type
     * @param {*} name
     */
    async function downloadProcess(event,params) {
			// 按需要类型创建文件并下载
      try {
        if (params.type === "xml" || params.type === "bpmn") {
					BpmnIns.saveXML().then( res => {
						let { href, filename } = setEncoded(params.type.toLowerCase(), res.xml);
            downloadFunc(href, filename);
					}).catch(err=>{
						console.error(`[Process Designer Warn ]: ${err.message || err}`);
					});
        } else {
					BpmnIns.saveSVG().then( res => {
						let { href, filename } = setEncoded(params.type.toLowerCase(), res.svg);
            downloadFunc(href, filename);
					}).catch(err=>{
						return console.error(err);
					});
        }
      } catch (e) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`);
      }
			// 文件编码操纵
			function setEncoded(type, data, filename = "diagram"){
				// console.log(filename)
				const encodedData = encodeURIComponent(data);
				return {
					filename: `${filename}.${type}`,
					href: `data:application/${type === "svg" ? "text/xml" : "bpmn20-xml"};charset=UTF-8,${encodedData}`,
					data: data
				};
			}
      // 文件下载方法
      function downloadFunc(href, filename) {
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
		function previewProcess(event,params){
			BpmnIns.saveXML({ format: true }).then(({ xml }) => {
				switch(params){
					case 'json':
						const newConvert = new X2JS();
						BpmnIns.saveXML({ format: true }).then(({ xml }) => {
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
		function processEditJump(event,FuncName){
			BpmnIns.get("commandStack")[FuncName]();
		}
		// 重置为空流程
		function processRestart(event,params) {
    	createNewDiagram(null);
    };
		// 流程画布缩放操纵
		function processZoom(event,zoomStep=0.1){
			let newZoom = Math.floor(defaultZoom.value * 100 + zoomStep * 100) / 100;
      if (newZoom < 0.2) {
        throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");
      }
      defaultZoom.value = newZoom;
      BpmnIns.get("canvas").zoom(defaultZoom.value);
		}
		// 节点对齐操作
		function elementsAlign(event,align) {
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
		function processCreateElement(event,params){
			// console.log(event,params);
			const ElementFactory = BpmnIns.get('elementFactory');
      const create = BpmnIns.get("create");
			const options = params.options|{};
      const shape = ElementFactory.createShape(R.mergeAll([{ type: `bpmn:${params.type}` }, options]));
      if (R.isEmpty(options)) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }
      create.start(event, shape);
		}
		// 启动面板工具
		function startTool(event, params) {
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
		function initBpmn(xmlStr='') {
			BpmnIns = new BpmnModeler({
				container: bpmnCanvasDom.value,
				additionalModules: [
					tokenSimulation,
					{
						translate: ["value", customTranslate(translationsCN)]
					}
				]
			}); // 建模
			if(R.isEmpty(xmlStr)||R.isNil(xmlStr)){
				console.warn('未能成功导入流程数据，当前工作更改为创建新的流程！')
				processRestart();
			}else{
				BpmnIns.importXML(xmlStr).then(res => {
					addEventBusListener(); // 监听element并绑定事件
					addModelerListener(); // 监听modeler并绑定事件
				}).catch(err => {
					console.error(err,'xml内容加载失败！');
				})
			}
		}
		// 监听 commandStack 事件
		function addEventBusListener() {
      const EventBus = BpmnIns.get("eventBus");
      // 注册需要的监听事件, 将. 替换为 - , 避免解析异常
      ['element.click', 'element.changed'].forEach(event => {
        EventBus.on(event, function(eventObj) {
          let eventName = event.replace(/\./g, "-");
          let element = eventObj ? eventObj.element : null;
					let businessObejct = getBusinessObject(element.id);
					console.log(businessObejct,'businessObject');
					console.log(eventName, element, eventObj);
          context.emit(eventName, {element, eventObj,businessObejct});
        });
      });
      // 监听图形改变返回xml
      EventBus.on("commandStack.changed", async event => {
        try {
					if(historyMenu){
						let canUnDo=!BpmnIns.get("commandStack").canUndo();
						let canReDo=!BpmnIns.get("commandStack").canRedo();
						historyMenu[0].disabled = canUnDo;
						historyMenu[1].disabled = canReDo;
					}
          let { xml } = await BpmnIns.saveXML({ format: true });
          context.emit("commandStack-changed", event);
          context.emit("input", xml);
          context.emit("change", xml);
        } catch (e) {
          console.error(`[Process Designer Warn]: ${e.message || e}`);
        }
      });
      // // 监听视图缩放变化
      BpmnIns.on("canvas.viewbox.changed", ({ viewbox }) => {
        context.emit("canvas-viewbox-changed", { viewbox });
        const { scale } = viewbox;
        defaultZoom.value = Math.floor(scale * 100) / 100;
				// console.log(defaultZoom.value,'3333')
      });
    }
		// 监听modeler并绑定事件
		function addModelerListener() {
			const events = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end', 'connect.move'];
			events.forEach(function (event) {
				BpmnIns.on(event, (e) => {
					let elementRegistry = BpmnIns.get('elementRegistry');
					let shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
					let eventName = event.replace('.','-');
					// console.log(eventName, e, shape, 'shape addModelerListener');
					context.emit(eventName,{event:e,shape:shape});
				})
			})
		}
		function getBusinessObject(id) {
			return BpmnIns.get('elementRegistry').get(id).businessObject;
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
			getBusinessObject,
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
