import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./key-visual.vue'));
export default component;