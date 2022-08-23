import * as R from "ramda"; // 引入ramda
import { useRoute } from "vue-router";
import { Menu, MenuRecord } from "./types"; //引入用户模型描述

export default {
  namespaced: true,
  state:{
    appMenu:[
      {label:'用户管理', value:'user', icon:'icon-flow',children:[
        {label:'员工管理', value:'user-manager', icon:'icon-flow',children:[]},
        // {label:'等级管理', value:'system-manager', icon:'icon-flow',children:[]},
        // {label:'组织管理', value:'report-manager', icon:'icon-flow',children:[]},
        // {label:'岗位管理', value:'code-manager', icon:'icon-flow',children:[]},
        // {label:'角色管理', value:'code-manager', icon:'icon-flow',children:[]},
        // {label:'分级组织管理', value:'code-manager', icon:'icon-flow',children:[]},
        // {label:'参与者属性管理', value:'code-manager', icon:'icon-flow',children:[]},
        // {label:'用户组管理', value:'code-manager', icon:'icon-flow',children:[]},
        // {label:'上下级管理', value:'code-manager', icon:'icon-flow',children:[]},
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
      {label:'统计面板', icon:'icon-target', value:'dash-board'},
      {label:'重置密码', icon:'icon-pw', value:'reset-pw'},
      {label:'切换租户', icon:'icon-flow', value:'org-list'},
      {label:'退出登录', icon:'icon-sys', value:'login'},
    ] as Menu[],
    tagMenu:[
      {label:'统计面板',value:'dash-board',static:true}
    ] as Array <Menu&{static?:boolean}>,
    current:{
      tagRouteName:'', // 当前路由名
      firstLevelValue:'' // 当前一级菜单名
    } as MenuRecord
  }, 
  getters:{
    getCurrent(state:{current:MenuRecord,appMenu:Menu[],tagMenu:Array < Menu & {static?:boolean} >}):MenuRecord{
      let current = R.clone(state.current);
      current.tagRouteName = current.tagRouteName || state.tagMenu[0].value,
      current.firstLevelValue = current.firstLevelValue || state.appMenu[0].value
      return current;
    },
    getAppMenu(state:{appMenu:Menu[]}):Menu[]{
      return state.appMenu;
    },
    getSysMenu(state:{sysMenu:Menu[]}):Menu[]{
      return state.sysMenu;
    },
    getTagMenu(state:{tagMenu:Menu[]}):Menu[]{
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
    setCurrent(state:{current:MenuRecord},data:MenuRecord){
      state.current = R.mergeAll([state.current,data]);
    }
  },
  actions:{}
}