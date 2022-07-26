<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
      <span class="w-40 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bp</span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
      <div class="w-40 bg-p-1 border-r border-dark-2 p-5">
        <element-menu :menu="elementsMenu" :processType="'aaa'" @buttonClick="processFuncHandler($event)"></element-menu>
      </div>
      <div ref="bpmnDesignContainer" class="xcol flex-grow-1">
        <splitpanes :horizontal="false">
          <pane class="xcol" :min-size="20" :size="100 - propEditorWidth" :max-size="100 - propEditorWidth">
            <aq-bpmn-editor ref="bpmnDom" 
              :xml-content="xmlStr"
              :process-type="processType" 
              :elements-menu="false"
              @element-click="clickEvent($event)" 
              @shape-removed="removedEvent($event)">
            </aq-bpmn-editor>
          </pane>
          <pane class="xcol" :min-size="propEditorWidth" :size="propEditorWidth" :max-size="80">
            <div class="xrow p-10 text-xs text-left break-all bg-white flex-grow-1">
              {{ currentBusinessObject }}
            </div>
          </pane>
        </splitpanes>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { ref, reactive, onMounted, onUnmounted, defineComponent, computed } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import 'splitpanes/dist/splitpanes.css';
import ElementMenu from './widgets/elementMenu.vue';
import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
import { global } from "./config/processJsonData-base";
// import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
// import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";\
import { xmlStr } from "@src/xml/xmlStr";

// console.log(elementsMenu,123)

export default defineComponent({
  components: { ElementMenu, Splitpanes, Pane },
  setup(props, context) {
    const bpmnDom = ref(null as any);
    const bpmnDesignContainer = ref(null as any);
    const bpmnPropEditorMinWidth: number = 360;
    const processType = ref('flowable');
    let bpmnDesignContainerResizeObserver = reactive({} as any);
    let propEditorWidth = ref(0);
    // 生命周期函数；
    onMounted(() => {
      bpmnDesignContainerResizeObserver = new ResizeObserver(() => {
        propEditorWidth.value = Math.min(Math.round(bpmnPropEditorMinWidth / bpmnDesignContainer.value.clientWidth * 100), 50);
      })
      bpmnDesignContainerResizeObserver.observe(bpmnDesignContainer.value)
    })
    onUnmounted(() => {
      bpmnDesignContainerResizeObserver.disconnect();
    })
    return {
      bpmnDom,
      bpmnDesignContainer,
      propEditorWidth,
      bpmnPropEditorMinWidth,
      processType,
    }
  },
  data() {
    return {
      xmlStr: xmlStr,
      elementsMenu: elementsMenu[0].children,
      currentBusinessObject: {} as any,
    };
  },
  mounted(){
    const vm = this;
  },
  methods: {
    clickEvent($event:any) {
      const vm = this;
      const params = $event.businessObject.$attrs.params?JSON.parse($event.businessObject.$attrs.params)[0]:{};
      const currentBusinessObject = R.mergeAll([global,$event.businessObject.$attrs.params||{},{
        id:$event.businessObject.id,
        name:$event.businessObject.name,
        type:$event.businessObject.$type
      }])
      vm.currentBusinessObject = JSON.stringify(currentBusinessObject).replaceAll(`\"`, `'`);
      // if($event.elementType == 'bpmn:Process'){
      var BpmnIns = vm.$refs.bpmnDom as any;
        // BpmnIns.setProcessElementById($event.elementId,{
        //   name:"aaaa",
        //   params:JSON.stringify(
        //   [{
        //     user:['admin','client','test'],
        //     worker:{
        //       postion:"sss"
        //     },
        //     news:`aaa`
        //   }]
        // )})
      // }
    },
    removedEvent($event: any) {
      console.log('removeEvent');
      console.log($event)
    },
    processFuncHandler(event: { event: Event, name: string, params?: any }) {
      const vm = this;
      var BpmnIns = vm.$refs.bpmnDom as any;
      BpmnIns.methodsDistribute(event);
    }
  },
})
</script>
