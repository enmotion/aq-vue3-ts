// import ecu from "easy-code-url";
import * as R from "ramda";

const api={
    datasourceDetail:{
        tips:"获取数据源详情",
        url:"/visual-object/{spaceHash}/datasource/detail",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourceList:{
        tips:"获取用户具有权限的数据源列表",
        url:"/visual-object/{spaceHash}/datasource/list",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourcePage:{
        tips:"分页获取空间的数据源",
        url:"/visual-object/{spaceHash}/datasource/page",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourceSaveOrUpdate:{
        tips:"新增或修改数据源配置",
        url:"/visual-object/{spaceHash}/datasource/saveOrUpdate",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourceUpdateDBPassword:{
        tips:"修改数据库连接密码",
        url:"/visual-object/{spaceHash}/datasource/updateDBPassword",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourceRemove:{
        tips:"删除数据源",
        url:"/visual-object/{spaceHash}/datasource/remove",
        // method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
    datasourceSourceTypeList:{
        tips:"获取数据源类型列表",
        url:"/visual-object/{spaceHash}/datasource/sourceTypeList",
        method:"get",
        extra:{
            penetrate:false //模拟数据单点关闭
        }
    },
}
export default api;
