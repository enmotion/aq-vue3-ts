const sumulate={
  oauthCaptcha:function(data){
    console.log(data,111111);
    return {
      data:{
        image: `data:image/png;base64,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`,
        key: "a243276ede918b4d38095638eed04f3d"
      }
    }
  },
  postAccessToken:function(data){
    console.log(data);
    return {
      data:{
        "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIxNTMxMjE1NzgwNjc3MjE4MzA1IiwidXNlcl9uYW1lIjoieGlhb2dhbmdAMTYzLmNvbSIsInJlYWxfbmFtZSI6bnVsbCwiYXZhdGFyIjpudWxsLCJjbGllbnRfaWQiOiJzd29yZCIsInJvbGVfbmFtZSI6bnVsbCwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwicG9zdF9pZCI6IiIsInVzZXJfaWQiOiIxIiwicm9sZV9pZCI6IiIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLogpbliJoiLCJvYXV0aF9pZCI6IiIsImRldGFpbCI6eyJ1c2VyLXR5cGUiOjJ9LCJleHAiOjE2NjE4ODAzMTMsImRlcHRfaWQiOiIiLCJqdGkiOiJkNDZhYWMwOS00NDY2LTQ5MWUtOTM4Zi04NjJjMGMyYzE0YTQiLCJhY2NvdW50IjoieGlhb2dhbmdAMTYzLmNvbSJ9.gD_7sFvrbmd71H5GVLAAMJjJWMljn91dEH2paba2cIA","token_type":"bearer","refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIxNTMxMjE1NzgwNjc3MjE4MzA1IiwidXNlcl9uYW1lIjoieGlhb2dhbmdAMTYzLmNvbSIsInJlYWxfbmFtZSI6bnVsbCwiYXZhdGFyIjpudWxsLCJjbGllbnRfaWQiOiJzd29yZCIsInJvbGVfbmFtZSI6bnVsbCwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwicG9zdF9pZCI6IiIsInVzZXJfaWQiOiIxIiwicm9sZV9pZCI6IiIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLogpbliJoiLCJhdGkiOiJkNDZhYWMwOS00NDY2LTQ5MWUtOTM4Zi04NjJjMGMyYzE0YTQiLCJvYXV0aF9pZCI6IiIsImRldGFpbCI6eyJ1c2VyLXR5cGUiOjJ9LCJleHAiOjE2NjI0NDkxMTMsImRlcHRfaWQiOiIiLCJqdGkiOiI5Njk2ODk4NC03ZmExLTRmOGMtODVlOS0wNmFjZWZmYWRhZGEiLCJhY2NvdW50IjoieGlhb2dhbmdAMTYzLmNvbSJ9.CQHiJ6vySClIXXm8y8L7_3qo_ftMEa66c5YNcqeW1Q0",
        "expires_in":35999,
        "scope":"all",
        "tenant_id":"1531215780677218305",
        "user_name":"xiaogang@163.com",
        "real_name":null,"avatar":null,
        "client_id":"sword",
        "role_name":null,
        "license":"powered by bladex",
        "post_id":"",
        "user_id":"1",
        "role_id":"",
        "nick_name":"肖刚",
        "oauth_id":"",
        "detail":{"user-type":2},
        "dept_id":"",
        "account":"xiaogang@163.com",
        "jti":"d46aac09-4466-491e-938f-862c0c2c14a4"
      }
    }
  }
}
export default sumulate;
