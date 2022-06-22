/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 10:12:05
 * @ Modified by: enmotion
 * @ Modified time: 2022-06-22 14:53:18
 * @ Description:
 * vue3-spa入口文件
 */


import { createApp } from 'vue';
import store from "@src/store";
import App from './App.vue';
import './assets/css/index.css';

const app = createApp(App);
app.use(store)
   .mount('#app');