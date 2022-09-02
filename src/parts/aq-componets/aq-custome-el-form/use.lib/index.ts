import { ref } from "vue";
import * as R from "ramda";
import CTF from "../types";

export function usePluckDeepToKeyValue(data:{[key:string]:any},config:CTF.ElementGroup){
  // console.log('usePluckDeepToKeyValue')
  const innerState = ref({} as any);
  R.keys(config).map((key)=>{
    innerState.value[key] = R.path((key as string).split('.'),data);
  })
  return innerState
}