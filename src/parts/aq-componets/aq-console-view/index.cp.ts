import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-console-view.vue')); // vue3 的懒加载方式
export default component;