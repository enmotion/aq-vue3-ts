import * as R from "ramda"; // 引入ramda
import type { ActionContext } from "vuex";
import { useRoute } from "vue-router";
import type { Menu, MenuRecord } from "./types"; //引入用户模型描述
import type { TagRecordRaw } from "@typ/public/mainPage";
import catcher from "@src/store/persistent"; // 引入本地缓存库

export default {
  namespaced: true,
  state:{
    appMenu:[
      {label:'用户管理', value:'user', icon:'icon-flow',children:[
        {label:'员工管理', value:'user-manager', icon:'icon-flow',children:[]},
        {label:'等级管理', value:'system-manager', icon:'icon-flow',children:[]},
        {label:'组织管理', value:'report-manager', icon:'icon-flow',children:[]},
        {label:'岗位管理', value:'position-manager', icon:'icon-flow',children:[]},
        {label:'角色管理', value:'role-manager', icon:'icon-flow',children:[]},
        {label:'分级组织管理', value:'level-manager', icon:'icon-flow',children:[]},
        {label:'参与者属性管理', value:'props-manager', icon:'icon-flow',children:[]},
        {label:'用户组管理', value:'group-manager', icon:'icon-flow',children:[]},
        {label:'上下级管理', value:'leader-manager', icon:'icon-flow',children:[]},
      ]},
      {label:'表单管理', value:'form', icon:'icon-flow',children:[
        {label:'业务对象管理', value:'mine-office', icon:'icon-flow',children:[]},
        {label:'表单管理', value:'system-manager', icon:'icon-flow',children:[]},
        {label:'表单详情管理', value:'report-manager', icon:'icon-flow',children:[]},
        {label:'套件管理', value:'code-manager', icon:'icon-flow',children:[]},
        {label:'数据管理', value:'code-manager', icon:'icon-flow',children:[]},
      ]},
      {label:'工作流程', value:'work', icon:'icon-flow',children:[
        {label:'流程定义管理', value:'mine-office', icon:'icon-flow',children:[]},
        {label:'流程审批管理', value:'system-manager', icon:'icon-flow',children:[]},
        {label:'流程实例管理', value:'report-manager', icon:'icon-flow',children:[]},
        {label:'流程数据管理', value:'code-manager', icon:'icon-flow',children:[]},
        {label:'流程代理设置', value:'code-manager', icon:'icon-flow',children:[]},
        {label:'流程日志统计', value:'code-manager', icon:'icon-flow',children:[]},
      ]},
      {label:'个人办公', value:'office', icon:'icon-flow',children:[]},
      {label:'系统管理', value:'system-manager', icon:'icon-flow',children:[]},
      {label:'报表管理', value:'report-manager', icon:'icon-flow',children:[]},
      {label:'代码管理', value:'code-manager', icon:'icon-flow',children:[]},
      {label:'SaaS管理', value:'saas-manager', icon:'icon-flow',children:[]},
      {label:'常用菜单', value:'menu-manager', icon:'icon-flow',children:[]},
    ] as Menu[],
    sysMenu:[ 
      // {label:'统计面板', icon:'icon-target', value:'dash-board'},
      {label:'重置密码', icon:'icon-pw', value:'reset-pw'},
      {label:'切换租户', icon:'icon-flow', value:'org-list'},
      {label:'退出登录', icon:'icon-sys', value:'login'},
    ] as Menu[],
    tagMenu: catcher.$data.tagMenu as TagRecordRaw[],
    mainNavigateValue: catcher.$data.mainNavigateValue as string,
  }, 
  getters:{
    getMainNavigateValue(state:{mainNavigateValue:string,appMenu:Menu[]}):string{
      // 当前主菜单位置，如果主菜单标记不在一级导航中，则会回归成0索引位的值
      return R.pluck('value',state.appMenu).includes(state.mainNavigateValue)? state.mainNavigateValue : state.appMenu[0].value;
    },
    getAppMenu(state:{appMenu:Menu[]}):Menu[]{
      return state.appMenu;
    },
    getSysMenu(state:{sysMenu:Menu[]}):Menu[]{
      return state.sysMenu;
    },
    getTagMenu(state:{tagMenu:TagRecordRaw[]}):TagRecordRaw[]{
      return state.tagMenu;
    },
    getCrumbPath(state:{sysMenu:Menu[]}):Menu[]{
      const route = useRoute();
      let path = [] as Menu[];
      function findpath(Routes:Menu[]=[],value:string,){
        for(var i in Routes){
          path.push(R.omit(['children'],Routes[i]));
          if(Routes[i].value == value){
            return true;
          }
          if(Routes[i].children && findpath(Routes[i].children,value)){
            return true;
          }
          path.pop();          
        }
        return false;
      }
      findpath(state.sysMenu,route.name as string);
      return R.pluck('value')(path as any[]);
    }
  },
  mutations:{
    setMainNavigateValue(state:{mainNavigateValue:string},value:string):void{
      state.mainNavigateValue = value;
      catcher.$data.mainNavigateValue = state.mainNavigateValue;
    },
    tagInsert(state:{tagMenu:TagRecordRaw[]},tagItem:TagRecordRaw):void{
      if(!R.pluck('value',state.tagMenu).includes(tagItem.value)){
        state.tagMenu.push(tagItem);
        catcher.$data.tagMenu = state.tagMenu;
      }
    },
    tagRemove(state:{tagMenu:TagRecordRaw[]},index:number){
      state.tagMenu.splice(index,1);
      catcher.$data.tagMenu = state.tagMenu;
    },
    clearTags(state:{tagMenu:TagRecordRaw[]}){
      state.tagMenu = [];
      catcher.$data.tagMenu = state.tagMenu;
    }
  },
  actions:{
    removeTagitemFromTagMenu(context:any,tagItem:TagRecordRaw):TagRecordRaw{
      const tags = context.getters.getTagMenu;
      console.log(tags,tagItem);
      const index = R.findIndex(R.propEq('value',tagItem.value))(tags);
      const result = tags[index+1]||tags[index-1];
      console.log(result,index);
      context.commit('tagRemove',index);
      return result;
    },
    clearTagItems(context:any):void{

    }
  }
}