/*
 * @Author: enmotion
 * @Date: 2021-03-08 16:34:28
 * @LastEditTime: 2021-12-19 01:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \liwen-saas-center\src\restful\pipes\req\simulate.js
 */
import * as R from "ramda";
let simulate = import.meta.globEager('./simulate/**/*.js');
let simulateDatas = {};
// 组装本地的数据 并过滤无效的数据
const keys = R.keys(simulate).filter(x=>{
    return x.split("/").length <=4
});
keys.forEach(name=>{
    let content = simulate[name].default||simulate[name];
    simulateDatas = R.mergeAll([simulateDatas,content]);
})
// 在 config 表示符 penetrate 穿透 启用穿透为true后，模拟数据可单接口失效
function pipe(delay,usePenetrate){
    var responseDelay = R.mergeAll([{bounce:300,base:10},delay.constructor==Object ? delay:{}])
    return async function(ctx,next){
        // 只有在启用penetrate的模式下，且并没有开启穿透模拟数据配置的接口 则启用本地模拟数据，否则访问真实的服务器
        if(!(ctx.config && ctx.config.penetrate) || !usePenetrate){
        // if(process.env.NODE_ENV==='development' && !(ctx.config && ctx.config.penetrate)){
            var simulateData = simulateDatas[ctx.keyname]||{};
            // 组装默认模拟数据
            let defaultLocalRes={
                data:{},
                code:200,
                msg:"操作成功"
            };
            return new Promise((resolve,reject)=>{
                console.warn("LocalTestReq:\n",ctx.name,ctx.axios.url,"\n",ctx);
                setTimeout(function(){
                    ctx[ctx.method == 'post'?'data':'params'] = ctx.payload;
                    delete ctx.payload;
                    delete ctx.config;
                    // console.log(ctx,'befor in to simulate');
                    simulateData = simulateData.constructor == Function ? simulateData(ctx) : simulateData;
                    ctx.response = {'data':R.mergeAll([defaultLocalRes||{},simulateData||{}])};
                    console.log(ctx.response)
                    console.warn("LocalTestRes:\n",ctx.name,ctx.axios.url,"\n",ctx.response);
                    resolve(ctx.response);         
                },Math.round(Math.random()*responseDelay.bounce)+responseDelay.base)
            })
        }else{
            await next()
        }
    }
}
export default pipe;