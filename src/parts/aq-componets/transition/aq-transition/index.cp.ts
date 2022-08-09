import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-transition.vue'));
export default component;