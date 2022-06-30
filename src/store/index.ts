/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 14:48:07
 * @ Modified by: enmotion
 * @ Modified time: 2022-06-22 17:06:49
 * @ Description:
 * 根级vuex模型对象
 */
import { createStore } from 'vuex'; // 引入vuex/4.x的createStore方法
import * as R from "ramda"; // 引入ramda

export default createStore({
    state:{
        appinfo:{
            appIcon:"icon-logo",
            appName:import.meta.env.VITE_APP_NAME,
            version:import.meta.env.VITE_APP_VERSION,
            powerd:'Powerd by '+import.meta.env.VITE_APP_POWERD,
            copyright:import.meta.env.VITE_APP_POWERD,
        },
        screen:{ // 屏幕数据 iswS:是否宽屏，width:屏幕宽度，height:屏幕高度
            isWS:document.body.clientWidth>1024,
            w:document.body.clientWidth,
            h:document.body.clientHeight,
        },
        device:{},
        keepAlivePage: [] as Array<string>, //缓存路由物件池
        isLoadingPage: false,
        pluginKeys:{ //应用所需相关KEY
            tmapKey:"RWPBZ-QA73S-7Z7OZ-6WHXL-ZAQDO-QMFTT",
            tmapSK:"1DSEGlQhl5FOrbrCXf02KzsVuLp7cwmA"
        },
    },
    getters:{
        isLoadingPage: (state):boolean=>{
            return state.isLoadingPage;
        },
        screen: (state):{isWS:boolean,w:number,h:number} =>{
            return state.screen;
        },
        device: state =>{
            return state.device;
        },
        getkeepAlivePage: state=>{
            return state.keepAlivePage;
        },
        getAppInfo: state=>{
            return state.appinfo;
        },
        getPluginKeys: state =>{
            return state.pluginKeys;
        },
    },
    mutations: {
        setLoadingPage:function(state,isShow){
            state.isLoadingPage = isShow || false;
        },
        setDevice:function(state,obj){
            state.device=R.merge(state.device,obj);
        },
        clearKeepAlivePage:function(state){
            state.keepAlivePage = [];
        },
        setKeepAlivePage:function(state,keepaliveItem:{name:string,add:boolean}){//设置需要缓存的路由
            let index:number = state.keepAlivePage.indexOf(keepaliveItem.name);//获取当前设置路由对象的缓存索引位
            if(keepaliveItem.add && index<0){//如果方式为添加，当前缓存路由注册中未包含
                state.keepAlivePage.push(keepaliveItem.name);
            }
            if(!keepaliveItem.add && index>-1){//如果方式为删除，当前缓存路由注册中已包含
                state.keepAlivePage.splice(index,1);
            }
            state.keepAlivePage=R.dropRepeats(state.keepAlivePage);//去重操作
        },
        updateScreenInfo:function(state,obj){
            state.screen=R.merge(state.screen,obj);
        },
    },
})
