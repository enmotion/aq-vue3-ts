import { RouteRecordRaw } from "vue-router";
import { nextTick } from "vue";
import store from "@src/store";
const router : RouteRecordRaw ={
  path: '/login', // 全系统默认抵达页面, 故路由配置为空路径
  name: 'login', // 该页面属于路由嵌套容器页面，无法直接访问，无需配置名称
  meta:{
    tokenRequire: false,
    powerRequire: [],
    title:"登录",
    keepAlive:false,
    avoidTag:true,
  },
  component: () => import('./login.vue'),
  beforeEnter:function(){
    console.log('back to login');
    nextTick(()=>{
      setTimeout(()=>{
        store.dispatch('user/logout');
      },100)
    })
  }
}
export default router;