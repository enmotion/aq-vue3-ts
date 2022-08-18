// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    // 空间基础
    spcListByOrg:{
        tips:"组织的空间列表，分页",
        url:"/visual-space/org/{orgHash}/spacePage",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    spcDetail:{
        tips:"空间详情",
        url:"/visual-space/space/{spaceHash}/detail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    getSpaceAdminUserList:{
        tips:"获取空间管理员用户列表",
        url:"/visual-space/space/{spaceHash}/getSpaceAdminUserList",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    setSpcAdmin:{
        tips:"将用户设置为空间管理员-或设置为空间非管理员",
        url:"/visual-space/space/{spaceHash}/setAdminUser",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    spcSaveOrUpdate:{
        tips:"新增或修改空间",
        url:"/visual-space/space/saveOrUpdate",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    spcDelete:{
        tips:"删除空间",
        url:"/visual-space/space/{spaceHash}/delete",
        // method:"get",
        extra:{
            // penetrate:false //模拟数据单点关闭
        }
    },
    // 空间用户
    spaceUserPage:{
        tips:"分页获取空间的用户列表",
        url:"/visual-space/space/{spaceHash}/spaceUserPage",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    addSpaceUser:{
        tips:"添加空间用户",
        url:"/visual-space/space/{spaceHash}/addSpaceUser",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    deleteSpaceUser:{
        tips:"删除空间用户",
        url:"/visual-space/space/{spaceHash}/deleteSpaceUser",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    getSpaceRoleListOfUser:{
        tips:"获取空间用户的空间角色列表",
        url:"/visual-space/space/{spaceHash}/getSpaceRoleListOfUser",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    // 空间角色
    spaceRoleList:{
        tips:"获取空间的角色列表",
        url:"/visual-space/space/{spaceHash}/spaceRoleList",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    roleDetail:{
        tips:"获取空间的角色详情",
        url:"/visual-space/space/{spaceHash}/roleDetail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    getSpaceUserListOfRole:{
        tips:"获取空间角色的空间用户列表",
        url:"/visual-space/space/{spaceHash}/getSpaceUserListOfRole",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    addSpaceUserOfRole:{
        tips:"添加空间角色的用户",
        url:"/visual-space/space/{spaceHash}/addSpaceUserOfRole",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    deleteSpaceUserOfRole:{
        tips:"删除空间角色的用户",
        url:"/visual-space/space/{spaceHash}/deleteSpaceUserOfRole",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    spaceRolePage:{
        tips:"分页获取空间的角色列表",
        url:"/visual-space/space/{spaceHash}/spaceRolePage",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    saveSpaceRole:{
        tips:"保存空间角色",
        url:"/visual-space/space/{spaceHash}/saveSpaceRole",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    deleteSpaceRole:{
        tips:"删除空间角色",
        url:"/visual-space/space/{spaceHash}/deleteSpaceRole",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
}
export default api;
