// import ecu from "easy-code-url";
import * as R from "ramda";
// 数据模型目录接口
const api={
    // 大屏或报表目录管理
    visualTree:{
        tips:"大屏或报表目录树形结构",
        url:"/visual-object/{spaceHash}/visual/tree",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualDeleteCategory:{
        tips:"删除大屏或报表目录",
        url:"/visual-object/{spaceHash}/visual/deleteCategory",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualSaveOrUpdateCategory:{
        tips:"新增或修改大屏或报表目录",
        url:"/visual-object/{spaceHash}/visual/saveOrUpdateCategory",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualCategoryItems:{
        tips:"获取大屏或报表目录下的内容",
        url:"/visual-object/{spaceHash}/visual/categoryItems",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualCategoryDetail:{
        tips:"大屏或报表目录详情",
        url:"/visual-object/{spaceHash}/visual/categoryDetail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    // 大屏或报表管理
    visualDetail:{
        tips:"大屏或报表详情",
        url:"/visual-object/{spaceHash}/visual/detail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualSaveConfig:{
        tips:"保存大屏或报表配置信息",
        url:"/visual-object/{spaceHash}/visual/saveConfig/{contentType}",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualSaveOrUpdate:{
        tips:"新增或修改大屏或报表",
        url:"/visual-object/{spaceHash}/visual/saveOrUpdate",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualCopy:{
        tips:"复制大屏或报表",
        url:"/visual-object/{spaceHash}/visual/copy",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualRemove:{
        tips:"删除大屏或报表",
        url:"/visual-object/{spaceHash}/visual/remove",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    visualModify:{
        tips:"更换大屏或者报表父级节点",
        url:"/visual-object/{spaceHash}/visual/modify",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
}
export default api;
