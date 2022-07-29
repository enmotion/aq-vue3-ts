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
    // dashbdLayout:{
    //   type:Array,
    //   method:"S",
    //   default:[],
    // },
   
    // wechatInfo:{
    //   type:Object,
    //   method:"S",
    //   default:{
    //     nickname:"",
    //     openid:"",
    //     headimgurl:""
    //   }
    // },
    // menu:{
    //   type:Array,
    //   method:"S",
    //   default:[]
    // },
    // crumb:{
    //   type:Object,
    //   method:"S",
    //   default:{
    //       path:[],
    //       mark:"",
    //   }
    // },
    // selecTreeData:{
    //   type:Array,
    //   method:"S",
    //   default:[]
    // },
  },
  key:"WYLC!@#$SREWUILX"
})
export default store