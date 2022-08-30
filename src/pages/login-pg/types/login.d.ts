export interface UserInfo{
  email:string,
  userpassword:string,
  grant_type:string,
  scope:string,
  code:string,
  nickname?:string,
  repeatpassword?:string,
  account?:string,
}