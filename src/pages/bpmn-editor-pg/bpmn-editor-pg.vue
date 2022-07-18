<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
        <span class="w-40 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bp</span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
        <div class="w-40 bg-white border-r border-dark-2">
            <element-menu :menu="elements"></element-menu>
        </div>
        <aq-bpmn-editor ref="bpmnDom" :xml-str="xmlStr"></aq-bpmn-editor>
        <div class="w-200 bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import ElementMenu from './widgets/elementMenu.vue';
// import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
import { defineComponent } from 'vue';
import { xmlStr } from "@src/xml/xmlStr";

// console.log(elementsMenu,123)

export default defineComponent({
    components:{ElementMenu},
    data() {
        return {
            xmlStr,
            elements:[],
            options: {
                column:[]
            },
            bpmnViewer:{},
        };
    },
    mounted() {
        const vm = this;
    },
    methods: {},
    setup() {
    },
})
</script>
