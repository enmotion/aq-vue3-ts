/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-08-26 16:48:03
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
import './assets/css/element-plus-revise.css'; // 引入 tailwinds 编译后的全局 css
import router from  "@src/router"; // vue-router 路由配置
import store from "@src/store"; // vuex 状态管理
// import { RouteLocationRaw } from "vue-router";

import globalComponents from "@src/parts"; // 导入全部自定义公共组件
import type { ElMessageBoxOptions, MessageParams } from "element-plus";
import { ElMessage, ElMessageBox } from 'element-plus';

import { useRouter } from "vue-router";
import type { RouteLocationRaw, RouteRecordNormalized } from "vue-router";

store.commit("setDevice", Bowser.getParser(window.navigator.userAgent).parse()); //提交设备硬件系统环境数据至全局缓存
store.commit('updateScreenInfo', {
   isWS: document.body.clientWidth >= 1280,
   h: document.body.clientHeight,
   w: document.body.clientWidth,
})
window.onresize=function(){
   store.commit('updateScreenInfo', {
      isWS: document.body.clientWidth >= 1280,
      h: document.body.clientHeight,
      w: document.body.clientWidth,
  })
}; // 屏幕自适配侦测
const app = createApp(App).use(router).use(store); // 构建应用添加 store, router
/* vue 全局注入 element-plus 弹窗方法 */
// $message ------- 
app.config.globalProperties.$message =function(msgParams:MessageParams & {message:string}){
   let duration = (msgParams.message?.length||0) * 150 + 1000;
   if(msgParams){
      ElMessage(R.mergeAll([ {duration:duration}, msgParams ]));
   }
}; // 全局引入element-ui弹窗
app.provide('$message', ElMessage);
// $confirm ------- 
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

/* vue 全局注入路由方法 */
const open = function (to:RouteLocationRaw & {name:string},method:'replace'|'push'='push'):void{
   // 如果路由有名称则需要进行已存检查,或者 如果有path,则直接跳转
   if( to.name && router.hasRoute(to.name) ){
      router[method](to);
   }else{
      router.push({name:'erro404'});
   }
}
app.config.globalProperties.$open = open
app.provide('$open', open);


globalComponents.map(item=>{
   app.component(item.name,item.config);
}); // 全局引入公共组件
app.mount('#app'); // 构建


