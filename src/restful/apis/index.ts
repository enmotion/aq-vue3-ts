import * as R from "ramda";
import ModAxiosType from "../types/ModAxios";
const lib = import.meta.globEager("./**/*.ts");
let apis:{[key:string]: ModAxiosType.RequestOption } = {};
//过滤深度超过3的JS文件
console.log(lib)
const libs = R.keys(lib).filter(x=>{
    return x.split("/").length <=4
});
//组装文件
libs.forEach(name=>{
    let content = lib[name].default || lib[name];
    // 为方便模拟数据加载的识别，取方法名赋值给方法属性 keyname
    for(var name in content){ 
        content[name].keyname = name;
    } 
    apis = R.mergeAll([apis,content]);
})
Object.defineProperties(apis,{
    host:{
        value:"",
        enumerable:false,
        writable:true,
        configurable:false
    },
    wsst:{
        value:"",
        enumerable:false,
        writable:true,
        configurable:false
    }
})
// 输出API接口数据与模拟数据
export default apis;