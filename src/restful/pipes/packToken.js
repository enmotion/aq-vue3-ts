import store from '@src/store/';
import * as R from "ramda";
function pipe(){
    return async function(ctx,next){
        let token = store.getters["user/getToken"];
        // console.log(token,'pack token');
        //判断地址中是否携带pub路径，携带则无需在headers中拼装token参数，否则反之
        if(ctx.url.split('/').indexOf('pub')<0){
            ctx.headers = R.mergeAll([{'Blade-Auth':'bearer '+ (R.isNil(ctx.extra?.token) || R.isEmpty(ctx.extra.token) ? token.access_token : ctx.extra.token)},ctx.headers]);
        }
        await next()
    }
}
export default pipe;
