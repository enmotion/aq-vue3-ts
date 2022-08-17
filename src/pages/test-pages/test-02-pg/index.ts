import { RouteRecordRaw } from "vue-router";
const router : RouteRecordRaw ={
  path: '/test02/:id', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'test02', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  meta:{
    tokenRequire: false,
    powerRequire: [],
    title:"test01",
    keepAlive:false,
  },
  component: () => import('./test-02-pg.vue')
}
export default router;