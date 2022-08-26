import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/erro403', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'erro403', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  meta:{
    tokenRequire: true,
    powerRequire: [],
    title:"权限错误",
    avoidTag:true,
    keepAlive:false,
  },
  component: () => import('./erro403.vue')
}
export default router;