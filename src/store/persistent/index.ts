// @ts-ignore
import ModStore from "mod-store";
const store = new ModStore({
  namespace:"WY-"+import.meta.env.VITE_APP_VERSION,
  props:{
    token:{
      type:Object,
      method:"S",
      default: {}
    },
    userInfo:{
      type:Object,
      method:"L",
      default:{
        detail: {},
      }
    },
    mainNavigateValue:{
      type:String,
      method:'S',
      default:''
    },
    tagMenu:{
      type:Array,
      method:'S',
      default:[]
    }
  },
  key:"WYLC!@#$SREWUILX"
})
export default store