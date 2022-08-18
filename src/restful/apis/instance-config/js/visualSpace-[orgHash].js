// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    // 用户属性
    setUserAttrValue:{
        tips:"设置用户属性值",
        url:"/visual-space/org/setUserAttrValue",
        method:"post",
        // headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    userAttrList:{
        tips:"获取组织用户属性列表",
        url:"/visual-space/org/{orgHash}/userAttrList",
        method:"get",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    userAttrSaveOrUpdate:{
        tips:"新增或修改用户属性",
        url:"/visual-space/org/{orgHash}/userAttrSaveOrUpdate",
        method:"post",
        // headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false, //模拟数据单点关闭
            pluck:'proplist'
        }
    },
    // 
    orgUserWithAttrPage:{
        tips:"组织的用户列表带用户属性，分页",
        url:"/visual-space/org/{orgHash}/orgUserWithAttrPage",
        method:"get",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    userSearch:{
        tips:"根据邮箱或用户名查找用户",
        url:"/visual-space/org/userSearch",
        method:"get",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    addOrgUser:{
        tips:"组织添加新用户",
        url:"/visual-space/org/{orgHash}/addOrgUser",
        method:"post",
        // headers:{'Content-Type': 'application/json'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    setOrgAdmin:{
        tips:"添加组织的管理员",
        url:"/visual-space/org/{orgHash}/setOrgAdmin",
        method:"post",
        // headers:{'Content-Type': 'application/json'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    deleteOrgUser:{
        tips:"删除组织的用户",
        url:"/visual-space/org/{orgHash}/deleteOrgUser",
        method:"post",
        // headers:{'Content-Type': 'application/json'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    userOrgList:{
        tips:"获取用户的组织列表",
        url:"/visual-space/org/userOrgPage",
        method:"get",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    orgSaveOrUpdate:{
        tips:"新增或修改组织",
        url:"/visual-space/org/saveOrUpdate", // 通过orgHash来判断是否是更新或者创建
        method:'post',
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    userOrgDetail:{
        tips:"获取组织详情",
        url:"/visual-space/org/{orgHash}/detail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    orgAdminUserList:{
        tips:"获取组织管理员列表",
        url:"/visual-space/org/{orgHash}/getOrgAdminUserList",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    orgUserList:{
        tips:"组织的用户列表，分页",
        url:"/visual-space/org/{orgHash}/orgUserPage",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    }
}
export default api;
