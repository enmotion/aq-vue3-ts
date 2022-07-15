<template>
	<div class="containers xcol flex-grow-1 bpmn-editor">
		<div ref="controlDashBoard" class="xrow p-5 border-b border-dark-2 bg-light-10">
			<div class="-mx-5 xrow flex-grow-1">

				<bpmn-menu v-if="ModuleMenus.sysMenus" 
					:menu="ModuleMenus.sysMenus" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5 flex-grow-1">
				</bpmn-menu>

				<bpmn-menu v-if="ModuleMenus.historyMenu" 
					:menu="ModuleMenus.historyMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

				<bpmn-menu v-if="ModuleMenus.alignMenu" 
					:menu="ModuleMenus.alignMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

				<bpmn-menu v-if="ModuleMenus.zoomMenu" 
					:menu="ModuleMenus.zoomMenu" 
					@buttonClick="methodsDistribute($event)" 
					class="mx-5">
				</bpmn-menu>

			</div>
			<!-- 用于打开本地文件-->
      <input type="file" id="files" ref="LocalFileReader" class="hidden" accept=".xml, .bpmn, .jn-bpmn" @change="importLocalFile" />
			<!-- 用于下载触发标签 -->
			<a ref="downloadLink" class="hidden"></a>
		</div>
		<div class="flex flex-row flex-grow-1">
			<div class="flex flex-col flex-grow-1">
				<div class="canvas flex flex-col flex-grow-12" ref="canvas"></div>
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
.bpmn-editor .hljs{
	/* display:flex !important; */
	/* flex-direction: column !important; */
	/* flex-grow: 1 !important; */
}
</style>
<script>
import { defineComponent } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler'; // 建模器
import tokenSimulation from "bpmn-js-token-simulation"; // 模拟流转流程模块

import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'; // 引入样式
import ModuleMenus from "./config/controlDashBoardConfig"; // 系统菜单
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

// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'; // 右边工具栏样式

export default defineComponent({
	name: 'bpmn-editor',
	props: {
		xmlContent: {
			type: String,
			default: xmlStr,
		}
	},
	components: { ElButton, ElTooltip, ElPopper, BpmnMenu, ElDialog, hljsVuePlugin:hljsVuePlugin.component },
	data() {
		let vm = this;
		return {
			showPreview:false,
			previewType:'json',
			previewCode:`{'a':12,'b':'sser'}`,
			defaultZoom:1, // 默认缩放比例
			ModuleMenus: ModuleMenus, // 模块菜单
			BpmnIns: null,// bpmn建模器
		}
	},
	mounted() {// 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
		let vm = this;
		vm.initBpmn(vm.xmlContent);
	},
	methods: {
		// 方法分发函数
		methodsDistribute(event) {
			const vm = this;
			if(vm[event.name]){
				vm[event.name](event.params);
			}
		},
		// 打开本地文件 方法块
		open(){this.$refs.LocalFileReader.click()},
		importLocalFile(){
			const vm = this;
      const file = vm.$refs.LocalFileReader.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        let loadedXml = this.result;
        vm.createNewDiagram(loadedXml);
      };
		},
		async createNewDiagram(xml) {
			const vm = this;
      // 将字符串转换成图显示出来
      let newId = this.processId || `Process_${new Date().getTime()}`;
      let newName = this.processName || `业务流程_${new Date().getTime()}`;
      let xmlString = xml || DefaultEmptyXML(newId, newName, this.prefix);
      try {
        let { warnings } = await vm.BpmnIns.importXML(xmlString);
        if (warnings && warnings.length) {
          warnings.forEach(warn => console.warn(warn));
        }
      } catch (e) {
        console.error(`[Process Designer Warn]: ${e?.message || e}`);
      }
    },
		// 下载流程图到本地 方法块
    /**
     * @param {string} type
     * @param {*} name
     */
    async downloadProcess(type, name) {
			const vm = this;
			// 按需要类型创建文件并下载
      try {
        if (type === "xml" || type === "bpmn") {
					vm.BpmnIns.saveXML().then( res => {
						let { href, filename } = setEncoded(type.toLowerCase(), name, res.xml);
            downloadFunc(href, filename);
					}).catch(err=>{
						console.error(`[Process Designer Warn ]: ${err.message || err}`);
					});
        } else {
					vm.BpmnIns.saveSVG().then( res => {
						console.log(res.svg,'111111')
						let { href, filename } = setEncoded(type.toLowerCase(), name, res.svg);
            downloadFunc(href, filename);
					}).catch(err=>{
						return console.error(err);
					});
        }
      } catch (e) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`);
      }
			// 文件编码操纵
			function setEncoded(type, filename = "diagram", data){
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
					let alink = vm.$refs.downloadLink;
					alink.download = filename;
					alink.href = href; //  URL对象
          alink.click(); // 模拟点击
					URL.revokeObjectURL(alink.href);
        }
      }
    },
		// 预览流程数据
		previewProcess(type){
			const vm = this;
			vm.BpmnIns.saveXML({ format: true }).then(({ xml }) => {
				switch(type){
					case 'json':
						const newConvert = new X2JS();
						vm.BpmnIns.saveXML({ format: true }).then(({ xml }) => {
							const { definitions } = newConvert.xml2js(xml);
							if (definitions) {
								vm.previewCode = JSON.stringify(definitions, null, 4);
							} else {
								vm.previewCode = "";
							}
							vm.previewType = "json";
							vm.showPreview = true;
						});
					break;
					default:
						vm.previewCode = xml;
						vm.previewType = "xml";
						vm.showPreview = true;
					break;
				}
      });
		},
		// 触发流程模拟工具
		processSimulation() {
			const vm = this;
      vm.simulationStatus = !vm.simulationStatus;
      vm.BpmnIns.get("toggleMode").toggleMode();
    },
		// 流程编辑步骤跳转
		processEditJump(FuncName){
			this.BpmnIns.get("commandStack")[FuncName]();
		},
		// 重置为空流程
		processRestart() {
      this.createNewDiagram(null);
    },
		// 流程画布缩放操纵
		processZoom(zoomStep=0.1){
			let newZoom = Math.floor(this.defaultZoom * 100 + zoomStep * 100) / 100;
      if (newZoom < 0.2) {
        throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");
      }
      this.defaultZoom = newZoom;
      this.BpmnIns.get("canvas").zoom(this.defaultZoom);
		},
		// 节点对齐操作
		elementsAlign(align) {
			const vm = this;
      const Align = vm.BpmnIns.get("alignElements");
      const Selection = vm.BpmnIns.get("selection");
      const SelectedElements = Selection.get();
      if (!SelectedElements || SelectedElements.length <= 1) {
        vm.$message.warning("请按住 Ctrl 键选择多个元素对齐");
        return;
      }
     	Align.trigger(SelectedElements, align);
    },
		// 初始化流程模型
		initBpmn(xmlStr) {
			const vm = this;
			vm.BpmnIns = new BpmnModeler({
				container: vm.$refs.canvas,
				additionalModules: [
					tokenSimulation
					// 自定义的节点
					// customModule
				]
			}); // 建模
			vm.BpmnIns.importXML(xmlStr).then(res => {
				vm.addModelerListener(); // 监听modeler并绑定事件
				vm.addEventBusListener(); // 监听element并绑定事件
			}).catch(err => {

			})
		},
		// 监听 commandStack 事件
		addEventBusListener() {
      const EventBus = this.BpmnIns.get("eventBus");
      const vm = this;
      // 注册需要的监听事件, 将. 替换为 - , 避免解析异常
      ['element.click', 'element.changed'].forEach(event => {
        EventBus.on(event, function(eventObj) {
          let eventName = event.replace(/\./g, "-");
          let element = eventObj ? eventObj.element : null;
          vm.$emit(eventName, element, eventObj);
        });
      });
      // 监听图形改变返回xml
      EventBus.on("commandStack.changed", async event => {
				console.log("commandStack.changed")
        try {
					if(vm.ModuleMenus.historyMenu){
						vm.ModuleMenus.historyMenu[0].disabled = !vm.BpmnIns.get("commandStack").canUndo();
						vm.ModuleMenus.historyMenu[1].disabled = !vm.BpmnIns.get("commandStack").canRedo();
					}
          let { xml } = await vm.BpmnIns.saveXML({ format: true });
          vm.$emit("commandStack-changed", event);
          vm.$emit("input", xml);
          vm.$emit("change", xml);
        } catch (e) {
          console.error(`[Process Designer Warn]: ${e.message || e}`);
        }
      });
      // 监听视图缩放变化
      vm.bpmnModeler.on("canvas.viewbox.changed", ({ viewbox }) => {
        vm.$emit("canvas-viewbox-changed", { viewbox });
        const { scale } = viewbox;
        vm.defaultZoom = Math.floor(scale * 100) / 100;
      });
    },
		// 监听modeler并绑定事件
		addModelerListener() {
			var vm = this;
			const events = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end', 'connect.move'];
			events.forEach(function (event) {
				vm.BpmnIns.on(event, (e) => {
					var elementRegistry = vm.BpmnIns.get('elementRegistry');
					var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
					console.log(event, e, shape, 'shape addModelerListener')
				})
			})
		},
		// // 监听element并绑定事件
		// addEventBusListener() {
		// 	let vm = this;
		// 	const eventBus = vm.BpmnIns.get('eventBus') // 需要使用eventBus
		// 	const eventTypes = ['element.click', 'element.changed'] // 需要监听的事件集合
		// 	eventTypes.forEach(eventType => {
		// 		eventBus.on(eventType, function (e) {
		// 			// console.log(eventType,e,'element addEventBusListener');
		// 			if (eventType == 'element.click') {
		// 				var elementRegistry = vm.BpmnIns.get('elementRegistry');
		// 				var modeling = vm.BpmnIns.get('modeling');
		// 				// console.log(e.element.id,e.element.type,'is clicked');
		// 				// console.log(elementRegistry.get(e.element.id).businessObject);
		// 				console.log(vm.getBusinessObject(e.element.id));
		// 				if (e.element.type == 'bpmn:Task') { // 改值的方法
		// 					var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
		// 					modeling.updateProperties(shape, {
		// 						name: '我是修改后的Task名称',
		// 						isInterrupting: false,
		// 						customProps: '乱'
		// 					})
		// 				}
		// 			}
		// 		})
		// 	})
		// },
		// 获取流程节点业务对象;
		getBusinessObject(id) {return this.BpmnIns.get('elementRegistry').get(id).businessObject;},
	}
})
</script>

<style scoped>
.canvas {
	width: 100%;
	height: 100%;
}

.panel {
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}
</style>

