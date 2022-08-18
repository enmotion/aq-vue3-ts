// import ecu from "easy-code-url";
import * as R from "ramda";
// 数据模型目录接口
const api={
    // 模型目录管理
    modelTree:{
        tips:"模型目录树形结构",
        url:"/visual-object/{spaceHash}/model/tree",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelGetModelWithCategory:{
        tips:"获取空间下所有（有权限）的模型（含目录树结构）",
        url:"/visual-object/{spaceHash}/model/getModelWithCategory",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelDeleteCategory:{
        tips:"删除模型目录",
        url:"/visual-object/{spaceHash}/model/deleteCategory",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelSaveOrUpdateCategory:{
        tips:"新增或修改模型目录",
        url:"/visual-object/{spaceHash}/model/saveOrUpdateCategory",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelCategoryItems:{
        tips:"获取数据模型目录下的内容",
        url:"/visual-object/{spaceHash}/model/categoryItems",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelCategoryDetail:{
        tips:"模型目录详情",
        url:"/visual-object/{spaceHash}/model/categoryDetail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    // 模型管理
    modelDetail:{
        tips:"模型详情",
        url:"/visual-object/{spaceHash}/model/detail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelSaveConfig:{
        tips:"保存数据模型配置信息",
        url:"/visual-object/{spaceHash}/model/saveConfig",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelSaveOrUpdate:{
        tips:"新增或修改模型",
        url:"/visual-object/{spaceHash}/model/saveOrUpdate",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelCopy:{
        tips:"复制模型",
        url:"/visual-object/{spaceHash}/model/copy",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelRemove:{
        tips:"删除模型",
        url:"/visual-object/{spaceHash}/model/remove",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    modelModify:{
        tips:"更换模型父级节点",
        url:"/visual-object/{spaceHash}/model/modify",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
}
export default api;
