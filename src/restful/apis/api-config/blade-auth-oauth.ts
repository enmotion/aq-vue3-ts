
import ModAxiosType from "@src/restful/types/ModAxios";
const api:{[key:string]:ModAxiosType.RequestOption} = {
  oauthCaptcha:{
    tips:'captcha 获取用户登录图片验证码',
    // axios 配置
    axios:{
      url:'/blade-auth/oauth/captcha',
      method:'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
    // 中间件所需 配置
    config:{
      penetrate:true,
      // removeMatchedPathValuesFromPayload:false,
      // encryptKeys:['userSpace']
    }
  },
  postAccessToken:{
    tips:'postAccessToken 用户登录接口',
    // axios 配置
    axios:{
      url:'/blade-auth/oauth/token',
      method:'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
    // 中间件所需 配置
    config:{
      penetrate:true,
      // encryptKeys:['userSpace']
      // removeMatchedPathValuesFromPayload:false,
    }
  }
}
export default api