import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./wg-user-info.vue'));
export default component;