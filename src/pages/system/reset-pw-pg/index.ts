import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/reset-pw', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'reset-pw', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  // redirect:'bpmn-editor', // 首页默认跳转至流程编辑页面
  meta:{
    tokenRequire: true,
    powerRequire: [],
    title:"重置密码",
    avoidTag:true,
    keepAlive:false,
  },
  component: () => import('./page.vue')
}
export default router;