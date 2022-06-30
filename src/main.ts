/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-06-30 18:21:27
 * @ Description:
 * vue3-spa入口文件
 */
import Bowser from "bowser"; // 引入浏览器侦测模块
import * as R from "ramda"; // 引入ramda
import { createApp } from 'vue'; // 创建 vue 实例方法
import App from '@src/App.vue'; // 根节 vue 组件文件
import store from "@src/store"; // vuex 状态管理
import router from  "@src/router"; // vue-router 路由配置
import './assets/css/index.css'; // 引入 tailwinds 编译后的全局 css

window.onresize=function(){
   console.log('is resize');
   console.log(store.getters.getName)
}
const app = createApp(App);
app.use(store)
   // .use(router)
   .mount('#app');

