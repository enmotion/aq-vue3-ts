import * as Validator from  "@src/until.lib/validator"; // 引入表单验证工具类

export default {
  Login:{
    cn:'用户登录',
    en:'Login',
    rule:{
      // email: [
      //   { required: true, message: '请输入账号邮箱', trigger: 'blur' },
      //   { validator:Validator.email, trigger: 'blur' },
      // ],
      // userpassword: [
      //   { required: true, message: '请输入密码', trigger: 'change', },
      // ],
      // code: [
      //   { required: true, message: '请输入验证码', trigger: 'change', },
      // ],
    }
  },
  Register:{
    cn:'用户注册',
    en:'Register',
    rule:{
      email: [
        { required: true, message: '请输入账号邮箱', trigger: 'blur' },
        { validator:Validator.email, trigger: 'blur' },
      ],
      userpassword: [
        { required: true, message: '请输入密码', trigger: 'change' },
        { validator:Validator.password, trigger: 'blur' },
      ],
      repeatpassword: [
        { required: true, message: '请重复输入密码', trigger: 'change' },
        { validator:Validator.repeatPassword, trigger: 'blur' },
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'change' },
      ],
    }
  },
  ResetPassword:{
    cn:'忘记密码',
    en:'ResetPassword',
    rule:{
      email: [
        { required: true, message: '请输入账号邮箱', trigger: 'blur' },
        { validator:Validator.email, trigger: 'blur' },
      ],
      userpassword: [
        { required: true, message: '请输入新密码', trigger: 'change', },
        { validator:Validator.password, trigger: 'blur' },
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'change', },
      ],
    }
  }
};