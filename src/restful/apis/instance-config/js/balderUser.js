// import ecu from "easy-code-url";
import * as R from 'ramda'

const api = {
  //注册登录
  userRegist: {
    tips: '用户注册',
    url: '/blade-user/register-user',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  }, // 修改密码
  updatePassword: {
    tips: '修改密码',
    url: '/blade-user/update-password',
    methods: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  },
  sendSms: {
    tips: '发送短信',
    url: '/blade-user/send-message',
    methods: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
}
export default api
