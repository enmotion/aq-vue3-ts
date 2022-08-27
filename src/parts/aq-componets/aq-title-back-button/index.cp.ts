import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-title-back-button.vue'));
export default component;