
import ModAxiosType from "@src/restful/types/ModAxios";
const api:{[key:string]:ModAxiosType.RequestOption} = {
  userLogin:{
    tips:'测试用户登录接口',
    // axios 配置
    axios:{
      url:'/admin/pub/user/{talentID}/login/{userSpace}/',
      method:'DELETE',
    },
    // 中间件所需 配置
    config:{
      removeMatchedPathValuesFromPayload:false,
      // encryptKeys:['userSpace']
    }
  }
}
export default api