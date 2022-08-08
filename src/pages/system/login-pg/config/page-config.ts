import * as R from "ramda";
function emailValidator(rule: any, value: string, callback: any){
  // 当文本内不为空，且内容不符合邮件验证时
  if( !(R.isNil(value) || R.isEmpty(value)) && !/\w+@\w+\.\w+$/g.test(value) ){
    callback(new Error('请输入正确的 email 地址！'));
  }else{
    callback()
  }
};
export default {
  Login:{
    cn:'用户登录',
    en:'Login',
    rule:{
      email: [
        // { required: true, message: '请输入账号邮箱', trigger: 'blur' },
        { validator:emailValidator, trigger: 'blur' },
      ],
      userpassword: [
        { required: true, message: '请输入密码', trigger: 'change', },
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'change', },
      ],
    }
  },
  Register:{
    cn:'用户注册',
    en:'Register',
    rule:{
      email: [
        { required: true, message: '请输入账号邮箱', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      userpassword: [
        { required: true, message: '请输入密码', trigger: 'change', },
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'change', },
      ],
    }
  },
  ResetPassword:{
    cn:'忘记密码',
    en:'ResetPassword',
    rule:{
      email: [
        { required: true, message: '请输入账号邮箱', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      userpassword: [
        { required: true, message: '请输入密码', trigger: 'change', },
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'change', },
      ],
    }
  }
};