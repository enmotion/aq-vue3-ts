import { ref } from 'vue';
import type { SetupContext } from 'vue';
import type { MenuOption } from "types/public/mainPage";
export interface Props{
  options: MenuOption[],
  value: string,
}
export function useMenuBase(context:SetupContext){
  const mouseoverIndex = ref(-1);
  function buttonClick(event:{index:number,option:MenuOption}){
    context.emit('update:value',event);
  };
  return{
    buttonClick,
    mouseoverIndex,
  }
}