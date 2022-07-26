import * as R from "ramda";
import PGS from '@src/pages/index';
import { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from 'vue-router';
// console.log(PGS)
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    PGS.LoginPg,
    R.mergeAll([PGS.MainPg,
    {
      children: [
        PGS.Erro404Pg,
        PGS.BpmnEditorPg,
      ]
    }
    ]) as RouteRecordRaw,
  ]
})