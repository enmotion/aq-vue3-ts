import {createRouter,createWebHashHistory} from 'vue-router';
import PGS from '@src/pages/index';
import main from "@src/pages/main";
console.log(PGS.Main,33333)
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        PGS.Main,
        PGS.Login
    ]
})