import * as R from "ramda";
import axios from "axios"
function pipe(){
    return async function(ctx,next){
        return new Promise((resolve,reject)=>{
          console.log(ctx.axios);
          axios.request(ctx.axios).then(res=>{
            console.log(res,'success');
            resolve(res);
          }).catch(err=>{
            console.log(err,'error');
            reject(err);
          })
        })
        await next()
    }
}
export default pipe;