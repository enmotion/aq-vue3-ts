import { ref } from 'vue';
import type { SetupContext } from 'vue';
import type { TagRecordRaw } from "types/public/mainPage";
export interface Props{
  options: TagRecordRaw[],
  value: string,
}
export function useMenuBase(context:SetupContext){
  const mouseoverIndex = ref(-1);
  function buttonClick(event:{index:number,option:TagRecordRaw}){
    context.emit('update:value',event);
  };
  return{
    buttonClick,
    mouseoverIndex,
  }
}