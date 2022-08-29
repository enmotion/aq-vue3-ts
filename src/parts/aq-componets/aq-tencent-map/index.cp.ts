import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-tencent-map.vue'));
export default component;