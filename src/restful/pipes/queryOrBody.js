import * as R from "ramda";
function pipe(){
    return async function(ctx,next){
        var hasParams = ctx.config.queryOrBody?.params && ctx.config.queryOrBody?.params.constructor === Array && ctx.config.queryOrBody.params.length>0;
        var hasData = ctx.config.queryOrBody?.data && ctx.config.queryOrBody?.data.constructor === Array && ctx.config.queryOrBody.data.length>0;
        // 当 Content-Type 为 fromdata时，打包数据
        // console.log(hasParams , hasData,ctx.config.queryOrBody?.params.constructor,ctx.config.queryOrBody?.data)
        if( hasParams || hasData ){
          if(hasParams){
            ctx.axios.params = {};
            R.keys(ctx.payload).map(item=>{
              if(ctx.config.queryOrBody?.params.includes(item)){
                ctx.axios.params[item]=ctx.payload[item]
                delete ctx.payload[item];
              }
            })
          }
          if(hasData){
            ctx.axios.data = {};
            R.keys(ctx.payload).map(item=>{
              if(ctx.config.queryOrBody?.data.includes(item)){
                ctx.axios.data[item]=ctx.payload[item]
                delete ctx.payload[item];
              }
            })
          }
        }
        if(ctx.axios.method == 'GET'){
          ctx.axios.params = ctx.payload;
        }else{
          ctx.axios.data = ctx.payload;
        }
        await next()
    }
}
export default pipe;