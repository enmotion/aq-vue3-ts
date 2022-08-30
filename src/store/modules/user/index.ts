import * as R from "ramda"; // 引入ramda
import UserStore from "./types"; //引入用户模型描述
import catcher from "@src/store/persistent";

export default {
  namespaced: true,
  state:{
    userInfo : catcher.$data.UserInfo as UserStore.Info,
    token : catcher.$data.token as UserStore.Token,
  },
  getters:{
    getUserInfo(state:UserStore.State):UserStore.Info{
      return state.userInfo;
    },
    getToken(state:UserStore.State):UserStore.Token{
      return state.token;
    }
  },
  mutations:{
    setUserInfo(state:UserStore.State,params:UserStore.Info){
      state.userInfo = catcher.$data.userInfo = params;
    },
    setToken(state:UserStore.State,params:UserStore.Token){
      state.token = catcher.$data.token = params;
    }
  },
  actions:{
    logout(context:any):void{
      context.commit('setToken',{}); // 清空用户的 token
      context.commit('setUserInfo',{});  // 清空用户的 基本信息
    }
  }
}