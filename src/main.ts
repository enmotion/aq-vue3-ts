/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-08-09 17:29:20
 * @ Description:
 * vue3-spa入口文件
 */
import Bowser from "bowser"; // 引入浏览器侦测模块
import * as R from "ramda";
import { createApp,AppContext } from 'vue'; // 创建 vue 实例方法
import App from '@src/App.vue'; // 根节 vue 组件文件

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'; // 引入element-ui 
import './assets/css/index.css'; // 引入 tailwinds 编译后的全局 css
import store from "@src/store"; // vuex 状态管理
import { RouteLocationRaw } from "vue-router";
import router from  "@src/router"; // vue-router 路由配置
import globalComponents from "@src/parts"; // 导入全部自定义公共组件
import type { ElMessageBoxOptions, MessageParams } from "element-plus";
import { ElMessage, ElMessageBox } from 'element-plus'

store.commit("setDevice", Bowser.getParser(window.navigator.userAgent).parse()); //提交设备硬件系统环境数据至全局缓存
window.onresize=function(){
   store.commit('updateScreenInfo', {
      isWS: document.body.clientWidth >= 1280,
      h: document.body.clientHeight,
      w: document.body.clientWidth,
  })
}; // 屏幕自适配侦测
const app = createApp(App).use(store).use(router); // 构建应用添加 store, router
app.config.globalProperties.$message =function(msgParams:MessageParams & {message:string}){
   let duration = (msgParams.message?.length||0) * 150 + 1000;
   if(msgParams){
      ElMessage(R.mergeAll([ {duration:duration}, msgParams ]));
   }
}; // 全局引入element-ui弹窗
app.provide('$message', ElMessage);
const confirm = function(params:ElMessageBoxOptions,appContext?:AppContext|null){
   const defaultParams = {
      title:'操作提示:',
      showCancelButton: true,
      dangerouslyUseHTMLString:true,
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      customClass:'msg-light',
      inputPlaceholder:'请输入...'
   }
   let mergedParams = R.mergeAll([defaultParams,params]);
   return ElMessageBox(mergedParams,appContext);
} // 全局引入element-ui确认组件
app.config.globalProperties.$confirm = confirm
app.provide('$confirm', confirm);
globalComponents.map(item=>{
   app.component(item.name,item.config);
}); // 全局引入公共组件
app.mount('#app'); // 构建


