<template>
  <div class="h-full w-full flex felx-col flex-grow-1">
    <aq-bpmn-editor></aq-bpmn-editor>
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
