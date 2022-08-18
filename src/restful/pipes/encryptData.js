import md5 from 'md5';
function pipe(){
    return async function(ctx,next){
        if(ctx.config && ctx.config.encryptKeys && ctx.config.encryptKeys.constructor === Array){
            for(var i in ctx.payload){
                if(ctx.config.encryptKeys.indexOf(i)>-1){
                    ctx.payload[i] = md5(ctx.payload[i]) // 具体加密规则
                }
            }
        }
        console.log(ctx,'encryptData');
        await next()
    }
}
export default pipe;