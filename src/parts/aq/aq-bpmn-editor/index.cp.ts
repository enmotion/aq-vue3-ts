import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-bpmn-editor.vue')); // vue3 的懒加载方式
export default component;