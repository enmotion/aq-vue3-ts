import * as R from "ramda";
import axios from "axios"
function pipe(){
  return async function(ctx,next){
    return new Promise((resolve,reject)=>{
      console.group(`RequestProcess:\n${ctx.name}`);
      console.log(`REQUEST:\n`,ctx)
      axios.request(ctx.axios).then(res=>{
        console.log(`RESPONSE:\n`,res)
        console.groupEnd();
        ctx.response = res;
        resolve();
      }).catch(err=>{
        console.log(`ERROR:\n`,err.response)
        console.groupEnd();
        ctx.response= err.response;
        reject(ctx.response);
      })
    })
    // await next()
  }
}
export default pipe;