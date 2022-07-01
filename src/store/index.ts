/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 14:48:07
 * @ Modified by: enmotion
 * @ Modified time: 2022-07-01 15:26:05
 * @ Description:
 * 根级vuex模型对象
 */
import * as R from "ramda"; // 引入ramda
import { createStore } from 'vuex'; // 引入vuex/4.x的createStore方法
import { State , AppInfo , Screen , Device , KeepAlivePage , PluginKeys } from "./types"

export default createStore({
    state:():State=>{
        return {
            appinfo: {
                appIcon: "icon-logo",
                appName: import.meta.env.VITE_APP_NAME+'',
                version: import.meta.env.VITE_APP_VERSION,
                powerd: import.meta.env.VITE_APP_POWERD,
                copyright: import.meta.env.VITE_APP_POWERD,
            },
            screen: {
                isWS: document.body.clientWidth > 1024, // iswS:是否宽屏
                w: document.body.clientWidth, // width:屏幕宽度
                h: document.body.clientHeight, // height:屏幕高度
            },
            device:{},
            keepAlivePage: [], //缓存路由物件池
            isLoadingPage: false,
            pluginKeys: { //应用所需相关KEY
                tmapKey: "RWPBZ-QA73S-7Z7OZ-6WHXL-ZAQDO-QMFTT",
                tmapSK: "1DSEGlQhl5FOrbrCXf02KzsVuLp7cwmA",
            },
        }
    },
    getters: {
        isLoadingPage:(state:State):boolean => {
            return state.isLoadingPage;
        },
        screen:(state:State):Screen => {
            return state.screen;
        },
        device:(state:State):Device => {
            return state.device;
        },
        getkeepAlivePage: (state:State):KeepAlivePage => {
            return state.keepAlivePage;
        },
        getAppInfo: (state):AppInfo => {
            return state.appinfo;
        },
        getPluginKeys: (state):PluginKeys => {
            return state.pluginKeys;
        },
    },
    mutations: {
        setLoadingPage: function (state:State, isShow:boolean):void {
            state.isLoadingPage = isShow || false;
        },
        setDevice: function (state:State, obj:Device):void {
            state.device = R.mergeAll([state.device, obj]);
        },
        clearKeepAlivePage: function (state:State):void {
            state.keepAlivePage = [];
        },
        setKeepAlivePage: function (state, keepaliveItem: { name: string, add: boolean }):void {//设置需要缓存的路由
            let index: number = state.keepAlivePage.indexOf(keepaliveItem.name);//获取当前设置路由对象的缓存索引位
            if (keepaliveItem.add && index < 0) {//如果方式为添加，当前缓存路由注册中未包含
                state.keepAlivePage.push(keepaliveItem.name);
            }
            if (!keepaliveItem.add && index > -1) {//如果方式为删除，当前缓存路由注册中已包含
                state.keepAlivePage.splice(index, 1);
            }
            state.keepAlivePage = R.dropRepeats(state.keepAlivePage);//去重操作
        },
        updateScreenInfo: function (state, obj:Screen):void {
            state.screen = R.mergeAll([state.screen, obj]);
        },
    },
})
