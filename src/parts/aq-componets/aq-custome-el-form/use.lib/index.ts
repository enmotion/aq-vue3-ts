import { ref } from "vue";
import type {ComputedRef} from "vue"
import * as R from "ramda";
import CTF from "../types";
// 将待加工数据处理成内部状态数据
export function useDataPluckToInnerState( config:CTF.ElementGroup , data:{[key:string]:any} ){
  // console.log('useDataPluckToInnerState')
  const innerState = ref({} as any);
  R.keys(config).map((key)=>{
    const value = R.path((key as string).split('.'),data);
    innerState.value[key] = config[key].getter ? ( config[key].getter as (v:any)=>any )( value ) : value ; 
  })
  return innerState
}
// 将内部状态数据 还原成加工后数据
export function useInnerStateReforgeToData( config:CTF.ElementGroup, innerStateValue:CTF.Data ){
  // console.log('useInnerStateReforgeToData')
  let data:{[key:string]:any}={};
  R.keys(innerStateValue).map((key)=>{
    data = R.assocPath( 
      (key as string).split('.') , 
      config[key]?.setter ? (config[key].setter as (v:any)=>any)(innerStateValue[key]) : innerStateValue[key] , 
      data
    );
  })
  return data
}