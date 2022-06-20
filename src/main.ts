/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-06-20 17:47:41
 * @ Description:
 * vue3-spa入口文件
 */


import { createApp } from 'vue';
import store from "r@/store";
import App from './App.vue';
import './assets/css/index.css';

const app = createApp(App);
app.use(store);
app.mount('#app');