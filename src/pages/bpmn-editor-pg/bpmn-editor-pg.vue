<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
        <span class="w-80 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bpmn</span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
        <div class="w-80 bg-white border-r border-dark-2"></div>
        <aq-bpmn-editor ref="bpmnDom"></aq-bpmn-editor>
        <div class="w-200 bg-white"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
// import Modeler from 'bpmn-js/lib/Modeler';

export default defineComponent({
    data() {
        return {
            options: {
                column:[]
            },
            bpmnViewer:{},
        };
    },
    mounted() {
        // var vm = this;
        // vm.bpmnViewer = new Modeler({ container: '#canvas' });
        // console.log(vm.bpmnViewer)
    },
    methods: {},
    setup() {
    },
})
</script>
