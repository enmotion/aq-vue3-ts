import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./wg-slider-pop.vue'));
export default component;