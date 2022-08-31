import { ref } from "vue";
import * as R from "ramda";
import type { UIConfigOptions, UIElementOption, HandingData } from "../types";

export function usePluckDeepToKeyValue(data:{[key:string]:any},config:UIConfigOptions){
  const innerState = ref({} as any);
  R.keys(config).map((key)=>{
    innerState.value[key] = R.path((key as string).split('.'),data);
  })
  return {
    innerState
  }
}