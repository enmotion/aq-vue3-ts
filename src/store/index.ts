/**
 * @ Author: enmoion
 * @ Create Time: 2022-06-20 14:48:07
 * @ Modified by: enmotion
 * @ Modified time: 2022-06-20 17:36:39
 * @ Description:
 * 根级vuex模型对象
 */
import { createStore } from 'vuex'; // 引入vuex/4.x的createStore方法
import * as R from "ramda"; // 引入ramda
console.log(R);

export default createStore({
    state:{
        name:'enmotion'
    },
    getters:{
        getName(state){
            return state.name
        }
    }
})
