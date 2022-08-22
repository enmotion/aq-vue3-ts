import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-tree-menu.vue'));
export default component;