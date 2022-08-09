import * as R from "ramda"; // 引入ramda
import UserStore from "./types"; //引入用户模型描述
import store from "@src/store/persistent";

export default {
  namespaced: true,
  state:{
    userInfo : store.$data.UserInfo as UserStore.Info,
    token : store.$data.token as UserStore.Token,
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
      state.userInfo = store.$data.userInfo = params;
    },
    setToken(state:UserStore.State,params:UserStore.Token){
      state.token = store.$data.token = params;
    }
  },
  actions:{
    userlogin(context:any,data:any):UserStore.Token{
      return context.commit('setToken',{})
    }
  }
}