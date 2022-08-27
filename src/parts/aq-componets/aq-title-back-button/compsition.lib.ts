import { onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";
import type { SetupContext } from 'vue';

export function useEscapeBack(showBack:boolean){
  const router = useRouter();
  onMounted(()=>{
    showBack && window.addEventListener('keyup',keyBack);
  })
  onUnmounted(()=>{
    showBack && window.removeEventListener('keyup',keyBack);
  })
  function keyBack (event:KeyboardEvent){
    if(event.key=='Escape'){
      clickBack();
    }
  }
  function clickBack(event?:MouseEvent):void{
    router.back();
  }
  return{
    clickBack
  }
}