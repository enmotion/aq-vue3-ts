// import ecu from "easy-code-url";
import * as R from 'ramda'

const api = {
  //获取第三方登录规则
   systemThirdLogin: {
    tips: '第三方登录规则',
    url: '/blade-system/custom/rule/third-login',
    method:'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 获取过期展示规则
  systemExpireTime: {
    tips: '过期时间展示',
    url: '/blade-system/custom/rule/expire-time',
    method:'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }
}
export default api
