import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/dash-board', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'dash-board', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  // redirect:'bpmn-editor', // 首页默认跳转至流程编辑页面
  meta:{
    title:"统计面板", // 标签名称
    tokenRequire: true, // 登录需要 否则跳转登录界面
    powerRequire: [], // 权限需要，否则跳转403
    keepAlive:false, // 是否缓存
    static:true, // 是否在标签内不可删除，目前只有dash-board页面需要此配置
  },
  component: () => import('./page.vue')
}
export default router;