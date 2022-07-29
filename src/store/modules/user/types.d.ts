declare namespace UserStore{
  interface Info{
    id? : string,
    nickname? : string,
    account? : string,
    avatar? : string,
    detail? : {
      expires_in? : string,
      real_name? : string,
      role_id? : string,
      role_name? : string,
      token_type? : string,
    },
  }
  interface Token{
    access_token:string,
    refresh_token:string,
  }
  interface State{
    userInfo:UserInfo,
    token:Token
  }
}
export default UserStore;