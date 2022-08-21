import * as R from "ramda"; // 引入ramda
import { useRoute } from "vue-router";
import type { RouteRecordName } from "vue-router";
import { MediaMarixOption } from "types/public/mainPage";
import { Menu} from "./types"; //引入用户模型描述

import qrcode from "@src/assets/img/qrcode.png";

export default {
  namespaced: true,
  state:{
    sysMenu:[
      {label:'百穗康', value:'home', icon:'icon-power',children:[
        {label:'关于我们',value:'product'},
        {label:'产品品质',value:'about'},
        {label:'组织架构',value:'about'},
        {label:'企业文化',value:'about'},
      ]},
      {label:'产品系列',icon:'icon-project',value:'product'},
      {label:'企业资讯',icon:'icon-content',value:'news'},
      {label:'生产工艺',icon:'icon-yingjian',value:'tech'},
      {label:'合作客户',icon:'icon-team',value:'client',children:[
        {label:'成功案例',value:'case',children:[
          {label:'产品系列',value:'product'},
          {label:'企业资讯',value:'news'},
          {label:'生产工艺',value:'tech'},
        ]},
        {label:'合作品牌',value:'case'},
        {label:'客户评价',value:'case'},
      ]},
      {label:'联系我们',icon:'icon-email',value:'contact'},
    ] as Menu[],
    mediaMatrixOptions:[
      {name:'微信公众号',icon:'icon-wechat',qrcode:qrcode},
      {name:'斗音平台',icon:'icon-douyin'},
      {name:'Facebook',icon:'icon-facebook'},
      {name:'Twitter',icon:'icon-twitter'},
      {name:'Instagram',icon:'icon-instagram'}
    ] as MediaMarixOption[]
  }, 
  getters:{
    getSysMenu(state:{sysMenu:Menu[]}):Menu[]{
      return state.sysMenu;
    },
    getSMediaMarixOption(state:{mediaMatrixOptions:MediaMarixOption[]}):MediaMarixOption[]{
      return state.mediaMatrixOptions;
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