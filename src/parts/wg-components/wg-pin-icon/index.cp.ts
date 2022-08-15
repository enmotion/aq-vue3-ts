import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./wg-pin-icon.vue'));
export default component;