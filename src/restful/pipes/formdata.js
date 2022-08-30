import * as R from "ramda";
function pipe(){
    return async function(ctx,next){
        // 当 Content-Type 为 fromdata 时，打包数据
        if(ctx.payload && ctx.axios.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
            let formdata = new FormData();
            for(var key in ctx.payload){
                formdata.append(key,ctx.payload[key])
            }
            ctx.payload = formdata;
        }
        await next()
    }
}
export default pipe;