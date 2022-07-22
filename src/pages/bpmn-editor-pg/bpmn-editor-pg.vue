<template>
  <div class="h-full w-full flex flex-col flex-grow-1">
    <div class="xrow items-center h-40 bg-white border-dark-2 border-b overflow-hidden">
      <span class="w-40 h-40 bg-p-10 items-center justify-center flex text-sm text-white font-bold uppercase">Bp</span>
    </div>
    <div class="xrow bg-dark-1 flex-grow-1">
      <div class="w-40 bg-p-1 border-r border-dark-2 p-5">
        <element-menu :menu="elementsMenu" @buttonClick="processFuncHandler($event)"></element-menu>
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
              {{ JSON.stringify(selectItem) }}
            </div>
          </pane>
        </splitpanes>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted, onUnmounted, defineComponent, computed } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import 'splitpanes/dist/splitpanes.css';
import ElementMenu from './widgets/elementMenu.vue';
import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";
// import { MenuItem } from 'types/project/bpmn-editor/controlDashBoradConfig'; // 引入流程菜单描述
// import { elementsMenu } from "@src/parts/aq/aq-bpmn-editor/config/controlDashBoardConfig";\
import { xmlStr } from "@src/xml/xmlStr";

// console.log(elementsMenu,123)

export default defineComponent({
  components: { ElementMenu, Splitpanes, Pane },
  setup(props, context) {
    const bpmnDom = ref(null as any);
    const bpmnDesignContainer = ref(null as any);
    const bpmnPropEditorMinWidth: number = 300;
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
      selectItem: ""
    };
  },
  methods: {
    clickEvent($event: any) {
      const vm = this;
      const processIgnoreElement:string[]=['bpmn:Process','bpmn:SequenceFlow','bpmn:TextAnnotation','bpmn:Association'];
      if ($event.element && !processIgnoreElement.includes($event.element.type)) {
        vm.selectItem = (JSON.stringify($event)).replaceAll(`\"`, `'`);
        console.info($event, 'Event: click configable Element');
      } else {
        vm.selectItem = '流程整体';
        console.log($event.businessObejct.$attrs, 'Event: click ProcessStage Event');
      }
    },
    removedEvent($event: any) {
      console.log('removeEvent');
      console.log($event)
    },
    processFuncHandler(event: { event: Event, name: string, params?: any }) {
      const vm = this;
      var dom = vm.$refs.bpmnDom as any;
      dom.methodsDistribute(event);
    }
  },
})
</script>
