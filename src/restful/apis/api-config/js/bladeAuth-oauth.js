// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    userLogin:{
        tips:"用户登录",
        url:"/blade-auth/oauth/token",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Type':11,
        },
        extra:{
            encryptKeys:['password'],
            penetrate:false //模拟数据单点关闭
        }
    },
    refreshToken:{
        tips:"刷新用户TOKEN",
        url:"/blade-auth/oauth/token",
        headers:{
            'User-Type':11,
        },
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    thirdLogin:{
        tips:"第三方登录",
        url:"/blade-auth/oauth/token",
        headers:{
            'User-Type':11,
        },
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    getCaptcha:{
        tips:"获取随机验证码图片",
        url:"/blade-auth/oauth/captcha",
        method:'get',
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    }
}
export default api;
