import * as R from "ramda";
let setpassword:string = '';
export function email(rule: any, value: string, callback: any){
  // 当文本内不为空，且内容不符合邮件验证时
  if( !(R.isNil(value) || R.isEmpty(value)) && !/\w+@\w+\.\w+$/g.test(value) ){
    callback(new Error('请输入正确的 email 地址！'));
  }else{
    callback()
  }
};
export function phone(rule: any, value: string, callback: any){
  // 当文本内不为空，且内容不符合手机号码验证时
  if( !(R.isNil(value) || R.isEmpty(value)) && !/^1\d{10}$/g.test(value) ){
    callback(new Error('请输入正确的手机号码！'));
  }else{
    callback()
  }
};
export function password(rule: any, value: string, callback: any){
  // 当文本内不为空，且内容不符合手机号码验证时
  if( !(R.isNil(value) || R.isEmpty(value)) && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/g.test(value) ){
    callback(new Error('设置密码，长度8～10位，必须包含大小写字母和数字的组合，可包含特殊字符！'));
  }else{
    setpassword = value
    callback()
  }
};
export function repeatPassword(rule: any, value: string, callback: any){
  if( value !== setpassword ){
    callback(new Error('两次输入的密码不一致!'));
  }else{
    callback()
  }
}