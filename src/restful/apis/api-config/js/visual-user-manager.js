// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    orderUserApply:{
        tips:"正式用户开通工单申请",
        url:"/visual-user-manager/order/user/apply",
        // method:'get',
        extra:{
            penetrate:true //模拟数据单点关闭
        }
    },
    thirdUserApply:{
        tips:"用户第三方对接申请",
        url:"/visual-user-manager/client/order/apply",
        // method:'get',
        extra:{
            penetrate:true //模拟数据单点关闭
        }
    },
    getThridState:{
        tips:"获取第三方对接状态",
        url:"/visual-user-manager/client/order/check/apply",
        method:'get',
        extra:{
            penetrate: false //模拟数据单点关闭
        }
    }
}
export default api;
