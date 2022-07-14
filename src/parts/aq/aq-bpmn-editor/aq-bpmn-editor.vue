<template>
	<div class="containers xcol flex-grow-1">
		<div ref="controlDashBoard" class="xrow p-5 border-b border-dark-2 bg-light-10">
			<div class="-mx-5 xrow flex-grow-1">
				<bpmn-menu :menu="ModuleMenus.sysMenus" @buttonClick="methodsDistribute($event)" class="mx-5 flex-grow-1"></bpmn-menu>
				<bpmn-menu :menu="ModuleMenus.historyMenu" @buttonClick="methodsDistribute($event)" class="mx-5"></bpmn-menu>
				<bpmn-menu :menu="ModuleMenus.alignMenu" @buttonClick="methodsDistribute($event)" class="mx-5"></bpmn-menu>
				<bpmn-menu :menu="ModuleMenus.zoomMenu" @buttonClick="methodsDistribute($event)" class="mx-5"></bpmn-menu>
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
	</div>
</template>
<script>
import { defineComponent } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler'; // 建模器
import customModule from './CustomModeler/index';
// import BpmnViewer from 'bpmn-js/lib/Viewer'; // 浏览器
import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'; // 引入样式
import ModuleMenus from "./config/controlDashBoardConfig"; // 系统菜单
import { xmlStr } from '@src/xml/xmlStr'; // 导入模型默认xml结构
import { ElButton, ElTooltip, ElPopper } from "element-plus"; // 引入 element 配置

import BpmnMenu from "./widgets/bpmn-menu/bpmn-menu";
import ZoomControl from "./widgets/zoom-control/zoom-control.vue";
// methods
import DefaultEmptyXML from "./methods/defaultEmpty";
import importLocalFile from "./methods/importLocalFile.js"; // 导入本地文件方法
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
	components: { ElButton, ElTooltip, ElPopper, BpmnMenu, ZoomControl },
	data() {
		let vm = this;
		return {
			ModuleMenus: ModuleMenus,
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
		initBpmn(xmlStr) {
			const vm = this;
			vm.BpmnIns = new BpmnModeler({
				container: vm.$refs.canvas,
				additionalModules: [
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
		// 监听element并绑定事件
		addEventBusListener() {
			let vm = this;
			const eventBus = vm.BpmnIns.get('eventBus') // 需要使用eventBus
			const eventTypes = ['element.click', 'element.changed'] // 需要监听的事件集合
			eventTypes.forEach(eventType => {
				eventBus.on(eventType, function (e) {
					// console.log(eventType,e,'element addEventBusListener');
					if (eventType == 'element.click') {
						var elementRegistry = vm.BpmnIns.get('elementRegistry');
						var modeling = vm.BpmnIns.get('modeling');
						// console.log(e.element.id,e.element.type,'is clicked');
						// console.log(elementRegistry.get(e.element.id).businessObject);
						console.log(vm.getBusinessObject(e.element.id));
						if (e.element.type == 'bpmn:Task') { // 改值的方法
							var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
							modeling.updateProperties(shape, {
								name: '我是修改后的Task名称',
								isInterrupting: false,
								customProps: '乱'
							})
						}
					}
				})
			})
		},
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

