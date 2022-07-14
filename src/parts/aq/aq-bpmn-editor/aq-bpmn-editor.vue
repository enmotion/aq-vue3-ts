<template>
	<div class="containers xcol flex-grow-1">
		<div ref="controlDashBoard" class="xrow p-5 bg-white border-b border-dark-2">
			<div class="-mx-5 xrow">
				<bpmn-menu :menu="ModuleMenus.sysMenus" @buttonClick="doFunc($event)" class="mx-5"></bpmn-menu>
				<bpmn-menu :menu="ModuleMenus.alignMenu" @buttonClick="doFunc($event)" class="mx-5"></bpmn-menu>
				<bpmn-menu :menu="ModuleMenus.historyMenu" @buttonClick="doFunc($event)" class="mx-5"></bpmn-menu>
			</div>
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
// import customModule from './widgets/custom'

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
	components: { ElButton, ElTooltip, ElPopper, BpmnMenu },
	data() {
		let vm = this;
		return {
			popoverRef: null,
			ModuleMenus: ModuleMenus,
			BpmnIns: null,// bpmn建模器
		}
	},
	mounted() {// 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
		let vm = this;
		console.log()
		vm.initBpmn(vm.xmlContent);
		vm.popoverRef = vm.$refs.popoverRef;
		console.log(vm.popoverRef, 1111)
	},
	methods: {
		doFunc(event) {
			const vm = this;
			console.log(event, 'dufunc')
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
				this.success();// 这里是成功之后的回调, 可以在这里做一系列事情
			}).catch(err => {

			})
		},
		success() {
			var vm = this;
			vm.addModelerListener(); // 监听modeler并绑定事件
			vm.addEventBusListener(); // 监听element并绑定事件
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
		getBusinessObject(id) {
			return this.BpmnIns.get('elementRegistry').get(id).businessObject;
		},
		save(type) {
			var vm = this;
			var linkElement = vm.$refs[type];
			switch (type) {
				case 'svg':
					// console.log('save svg');
					vm.BpmnIns.saveSVG((err, svg) => {
						vm.setEncoded(linkElement, 'diagram.svg', err ? null : svg);
					})
					break;
				case 'file':
					// console.log('save file');
					vm.BpmnIns.saveXML({ format: true }, (err, xml) => {
						vm.setEncoded(linkElement, 'diagram.bpmn', err ? null : xml);
					})
					break;
			}
		},
		setEncoded(link, name, data) {
			// 把xml转换为URI，下载要用到的
			const encodedData = encodeURIComponent(data);
			if (data) {
				link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
				link.download = name
			}
		}
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

