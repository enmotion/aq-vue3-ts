import * as R from "ramda";
export function mergeDeepAll(...args:any[]){
    return args.reduce((a,b)=>{
        return R.mergeDeepRight(a,b);
    })
}