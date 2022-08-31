import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-custome-el-form.vue'));
export default component;