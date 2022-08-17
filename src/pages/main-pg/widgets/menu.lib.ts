import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { MenuOption } from "types/public/mainPage";
export default defineComponent({
  name:'ssss',
  props:{
    options:{
      type:Array as PropType<MenuOption[]>,
      default:()=>[]
    },
    value:{
      type:String as PropType<string>,
      default:''
    }
  },
  emits:['update:value'], // v-model 写法
  setup(props,context) {
    function buttonClick(option:MenuOption){
      context.emit('update:value',option.value);
    };
    return {
      buttonClick
    }
  }
})