import * as R from "ramda";
import PGS from '@src/pages/index';
import { RouteRecordRaw } from "vue-router";
import {createRouter,createWebHashHistory} from 'vue-router';
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        PGS.LoginPg,
        R.mergeAll([
            PGS.MainPg,
            {
                children:[
                    
                ]
            }
        ]) as RouteRecordRaw,
        PGS.Erro404Pg
    ]
})