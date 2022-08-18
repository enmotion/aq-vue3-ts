import * as R from "ramda";
function pipe(){
    // pathPicker 路径查找正则, keyPicker 取键名的正则
    return async function(ctx,next){
        if(ctx.extra?.pluck && ctx.payload[ctx.extra.pluck]){
            ctx.payload = ctx.payload[ctx.extra.pluck]
        }
        await next()
    }
}
export default pipe;