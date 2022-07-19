<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
        <span class="w-40 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bp</span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
        <div class="w-40 bg-p-1 border-r border-dark-2 p-5">
            <element-menu :menu="elementsMenu" :bpmn-ins="bpmnViewer" @buttonClick="processCreateElement($event)"></element-menu>
        </div>
        <aq-bpmn-editor ref="bpmnDom" :xml-content="xmlStr" :elements-menu="false"
            @element-click=" trackEvent($event) " 
            @shape-removed = " trackEvent($event) "></aq-bpmn-editor>
        <div class="w-200 bg-white xcol overflow-hidden">
            <div class="xrow p-20 text-xs text-left break-all">
                {{JSON.stringify(selectItem)}}
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { VueElement } from "vue";
import ElementMenu from './widgets/elementMenu.vue';
import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
// import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
// import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
import { defineComponent } from 'vue';
import { xmlStr } from "@src/xml/xmlStr";

// console.log(elementsMenu,123)

export default defineComponent({
    components:{ElementMenu},
    data() {
        return {
            xmlStr:xmlStr,
            elementsMenu:elementsMenu[0].children,
            elements:[],
            options: {
                column:[]
            },
            bpmnViewer:{} as VueElement,
            selectItem:"1111"
        };
    },
    mounted() {
        const vm = this;
    },
    methods: {
        trackEvent($event:any){
            const vm = this;
            if($event.element.type != 'bpmn:Process'){
                vm.selectItem = (JSON.stringify($event)).replaceAll(`\"`,`'`);
                console.log($event,'trackEvent');
            }
        },
        processCreateElement(event:{event:Event,name:string,params?:any}){
            const vm = this;
            var dom  = vm.$refs.bpmnDom as any;
            dom.methodsDistribute(event);
        }
    },
    setup() {
    },
})
</script>
