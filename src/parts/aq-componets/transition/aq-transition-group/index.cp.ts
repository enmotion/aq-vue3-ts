import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-transition-group.vue'));
export default component;