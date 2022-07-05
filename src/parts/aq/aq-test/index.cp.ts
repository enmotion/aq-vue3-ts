import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-test.vue'));
export default component;