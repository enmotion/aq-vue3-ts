import * as R from "ramda"; // 引入ramda
import { useRoute } from "vue-router";
import { Menu } from "./types"; //引入用户模型描述

export default {
  namespaced: true,
  state:{
    sysMenu:[
      {label:'应用首页', value:'dash-board', icon:'icon-flow',children:[]},
      {label:'用户管理', value:'user-manager', icon:'icon-flow',children:[
        {label:'个人办公', value:'mine-office', icon:'icon-flow',children:[]},
      {label:'系统管理', value:'system-manager', icon:'icon-flow',children:[]},
      {label:'报表管理', value:'report-manager', icon:'icon-flow',children:[]},
      {label:'代码管理', value:'code-manager', icon:'icon-flow',children:[]},
      ]},
      {label:'表单管理', value:'form-manager', icon:'icon-flow',children:[]},
      {label:'工作流程', value:'work-flow', icon:'icon-flow',children:[]},
      {label:'个人办公', value:'mine-office', icon:'icon-flow',children:[]},
      {label:'系统管理', value:'system-manager', icon:'icon-flow',children:[]},
      {label:'报表管理', value:'report-manager', icon:'icon-flow',children:[]},
      {label:'代码管理', value:'code-manager', icon:'icon-flow',children:[]},
      {label:'SaaS管理', value:'saas-manager', icon:'icon-flow',children:[]},
      {label:'常用菜单', value:'menu-manager', icon:'icon-flow',children:[]},
    ] as Menu[],
  }, 
  getters:{
    getSysMenu(state:{sysMenu:Menu[]}):Menu[]{
      return state.sysMenu;
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
  }
}