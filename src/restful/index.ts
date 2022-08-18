import * as R from "ramda"
import ModAxios from './init/init';//引入封装后的axios类
import apis from './apis';//引入apis集合            

// 引入相关请求处理管道 中间件
import packPath from "./pipes/packPath"// 引入路径传参数打包 中间件
import encryptData from "./pipes/encryptData"// 引入加密字段打包 中间件
// import pluckData from "./pipes/pluckData" // 引入平补

// import packToken from "./pipes/packToken"// 引入TOKEN打包 中间件
import simulate from "./pipes/simulate/simulate.js" // 引入本地模拟数据 中间件
import formdata from "./pipes/formdata.js" // 引入本地模拟数据 中间件
import queryOrBody from "./pipes/queryOrBody.js"
import request from "./pipes/request.js";
// 相关服务地址地址声明
// const dev_host = import.meta.env.VITE_APP_API_BASE_URL; // 开发环境地址 开启代理模式后，请依照代理模式配置
// const pud_host = import.meta.env.VITE_APP_API_BASE_URL;
const host = import.meta.env.VITE_APP_API_BASE_URL; // 打包时自动切换地址
//websocket主服务地址
const wsst = "wss://www.xxxxxxx.cn:81";//socket地址
//初始化axios实例
const ax = new ModAxios({
  axios:{
    baseURL:host,
    method:"post",
    headers: {
        'Authorization': 'Basic c2FiZXI6MWNlMzY0YzRjZmQ4OTgzYTlkMTc2MjZmYzE3NGQzYmU=',
        'Tenant-Id': '000000'
    },//请求头
    timeout:10000, //超时时间
  },
  config:{
    encryptKeys:['userSpace','talentID'],// 需加密的字段
    removeMatchedPathValuesFromPayload:true, // 移除已匹配路径传参的数值
    slience:true,// 开发模式下是否关闭请求前后数据输出
    useCancelToken:true, //是否打开axios 的cancelToken功能，避免同一请求尚未返回时，重复发起请求重复请求; 需配合 请求配置中的tokenID一起使用
  }
})
// 二次封装的 ax 实例 为双向管道 类似 koa 洋葱皮 模型，可在管道内自行决定是否传递数据
ax.use(encryptData()); // 添加加密中间件
ax.use(packPath(/\{\w+\}/g,/\w+/g)); // 添加路径传参中间件
// 添加路径传参中间件
//ax.use(pluckData()); // 添加路径传参中间件
ax.use(queryOrBody());
ax.use(request()); // 添加中间件
// ax.use(simulate({bounce:2000,base:1000},true));//添加模拟数据中间件,除接口 参数 extra.penetrate = ture 的接口外，其余将直接使用本地模式数据，方便调试

ax.use(formdata()); // formdata 组装中间件

export { ax,apis,host,wsst};
