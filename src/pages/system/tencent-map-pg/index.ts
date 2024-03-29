import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/tencent-map', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'tencent-map', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  meta:{
    tokenRequire: false,
    powerRequire: [],
    title:"腾讯地图组件",
    avoidTag:true,
    keepAlive:false,
  },
  component: () => import('./page.vue')
}
export default router;