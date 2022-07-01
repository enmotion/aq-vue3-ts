/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-07-01 16:35:52
 * @ Description:
 * vue3-spa入口文件
 */
import Bowser from "bowser"; // 引入浏览器侦测模块
import { createApp } from 'vue'; // 创建 vue 实例方法
import App from '@src/App.vue'; // 根节 vue 组件文件
import store from "@src/store"; // vuex 状态管理
import router from  "@src/router"; // vue-router 路由配置
import './assets/css/index.css'; // 引入 tailwinds 编译后的全局 css

store.commit("setDevice", Bowser.getParser(window.navigator.userAgent).parse());
window.onresize=function(){
   store.commit('updateScreenInfo', {
      isWS: document.body.clientWidth >= 1280,
      h: document.body.clientHeight,
      w: document.body.clientWidth,
  })
}
const app = createApp(App);
app.use(store)
   .use(router)
   .mount('#app');

