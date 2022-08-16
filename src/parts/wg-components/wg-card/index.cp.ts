import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./wg-card.vue'));
export default component;