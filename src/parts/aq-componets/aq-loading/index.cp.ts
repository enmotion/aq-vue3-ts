import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-loading.vue'));
export default component;