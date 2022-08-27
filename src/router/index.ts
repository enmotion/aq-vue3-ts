import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from "vue-router";
import store from "@src/store";
import * as R from "ramda";
import PGS from '@src/pages/index';

console.log(store.getters['menu/getAppMenu']); // 考虑到页面路由需要交由后台管理, 此处将添加路由 routes 它将在主app执行前完成

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    PGS.LoginPg,
    PGS.BpmnEditorPg,
    PGS.TransitionPg,
    PGS.TinymcePg,
    R.mergeAll([PGS.MainPg,
    {
      children: [
        PGS.DashBoardPg,
        PGS.UserManagerPg,
        PGS.FormManagerPg,
        PGS.WorkFlowPg,
      ]
    }
    ]) as RouteRecordRaw,
    PGS.ResetPwPg,
    PGS.OrgListPg,
    PGS.Erro403Pg,
    PGS.ErroDevPg,
    PGS.Erro404Pg,
  ]
});
router.beforeEach(async (to, from ) => {
  
  // 0.屏宽检测，部分页面不可在窄屏模式下显示
  if ( to.meta.onlyWS &&  !store.getters.screen.isWS) {
    return { name: 'erroDev' };
  }
  // 1.如果匹配不上的页面，则直接404
  if (to.matched.length == 0) {
    return { name: 'erro404' };
  }
  // 2.如果路由包含登录验证，则需通过登录检测，否则直接转登录页面
  if (to.meta.tokenRequire) { //需要token校验时
    const token = store.getters['user/getToken']||{}; // 取出token
    if (R.isNil(token.refresh_token) || R.isNil(token.access_token)) { //token为空或为null值时
      console.warn('尚未登录，现返回登录页面...');
      return { name:'login' };
    }
  }
  //2.检测路由访问权限,如有权限约束，但用户未获得权限，则会直接跳转至403
  if (!R.isEmpty(to.meta.powerRequire) && !R.isNil(to.meta.powerRequire)) { //路由配置信息的权限需求不为空且不为null值时
    const userInfo = store.getters['user/getInfo']||{}; // 取出user状态
    if (R.intersection(userInfo.power||[], to.meta.powerRequire as readonly (string|number)[]).length < 1) { //权限交集长度<1时，即用户权限点不满路由配置条件
      console.warn('用户权限不符，该页面禁止访问。')
      return { name:'erro403'};
    }
  }
  if(!to.meta.avoidTag){ // 如果该页面 meta 配置中 avoidTag 为 false 时，则会塞入新的标签菜单
    store.commit('menu/tagInsert',{label:to.meta.title,value:to.name,static:to.meta.static,to:R.pick([
      'fullPath',
      'hash',
      'href',
      'meta',
      'name',
      'params',
      'path',
      'query',
    ],to)});
  }
});
router.beforeResolve(async (to, from ) => {
  // console.log(to,from,'beforeResolve')
})
export default router;