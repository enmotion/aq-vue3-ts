import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-bpmn-editor.vue'));
export default component;