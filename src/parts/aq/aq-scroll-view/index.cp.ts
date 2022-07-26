import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-scroll-view.vue'));
export default component;