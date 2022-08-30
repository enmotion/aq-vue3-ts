import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-monaco-editor.vue'));
export default component;