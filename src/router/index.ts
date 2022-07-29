import { createRouter, createWebHashHistory, RouteRecordRaw, } from 'vue-router';
import store from "@src/store";
import * as R from "ramda";
import PGS from '@src/pages/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    PGS.LoginPg,
    R.mergeAll([PGS.MainPg,
    {
      children: [
        PGS.BpmnEditorPg,
        PGS.Erro404Pg,
        PGS.Erro403Pg,
      ]
    }
    ]) as RouteRecordRaw,
  ]
});
router.beforeEach(async (to, from ) => {
  console.log(to,from,store.getters.screen.isWS);
  // 1.如果匹配不上的页面，则直接404
  if (to.matched.length == 0) {
    return { name: 'erro404' };
  }
  // 2.如果路由包含登录验证，则需通过登录检测，否则直接转登录页面
  if (to.meta.tokenRequire) { //需要token校验时
    console.log('token is required redirect to login');
    return { name:'login' };
    // if (R.isEmpty(token.refresh_token) || R.isEmpty(token.access_token)) { //token为空或为null值时
    //   next({ name: 'login' }) //跳转至登录页面
    //   return
    // }
  }
  //2.检测路由访问权限问题
  if (!R.isEmpty(to.meta.powerRequire) && !R.isNil(to.meta.powerRequire)) { //路由配置信息的权限需求不为空且不为null值时
    console.log('power is required')
    return { name:'erro403'};
    // if (R.intersection(userInfo.power, to.meta.powerRequire).length < 1) { //权限交集长度<1时，即用户权限点不满路由配置条件
    //   next({ name: 'error-403' }) //跳转至403页面
    //   return
    // }
  }
});
// router.afterEach((to, from, failure) => {
//   if(to.name === "erro404" && to.redirectedFrom != undefined){
//     console.log('这次不是直接跳转到404的')
//   }
// });
export default router;