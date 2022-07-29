import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/bpmn-editor', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'bpmn-editor',
  meta:{
    tokenRequire: false,
    powerRequire: ['ddd'],
    title:"bpmn-editor",
    keepAlive:false,
  },
  component: () => import('./bpmn-editor-pg.vue')
}
export default router;