import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./aq-tinymce-editor.vue'));
export default component;