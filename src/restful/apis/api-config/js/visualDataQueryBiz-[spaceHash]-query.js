// import ecu from "easy-code-url";
import * as R from "ramda";

const api = {
  queryChartDataApiProxy: {
    tips: "图表组件数据调试(API方式)",
    url: "/visual-data-query-biz/{spaceHash}/query/chartData/apiProxy",
    // method:"get",
    timeout: 60 * 1000,
    extra: {
      penetrate: false, //模拟数据单点关闭
    }
  },
  queryChartDataDataModelProxy: {
    tips: "图表组件数据调试(数据模型方式)",
    url: "/visual-data-query-biz/{spaceHash}/query/chartData/dataModelProxy",
    // method:"get",
    timeout: 60 * 1000,
    extra: {
      packPath:{
        payloadRemoved:true, // 打包进路径的值，需要在 payload 中移除
      },
      penetrate: false, //模拟数据单点关闭
    }
  },
  queryChartDataByChartHash: {
    tips: "图表组件数据查询",
    url: "/visual-data-query-biz/{spaceHash}/query/{objectHash}/chartData/{chartHash}",
    // method:"get",
    timeout: 60 * 1000,
    extra: {
      penetrate: false, //模拟数据单点关闭
    }
  },
  queryConnectTest: {
    tips: "数据源连接测试",
    url: "/visual-data-query-biz/{spaceHash}/query/connTest",
    // method:"get",
    timeout: 60 * 1000,
    extra: {
      penetrate: false, //模拟数据单点关闭
    }
  },
  queryGenerateModelSql: {
    tips: "依据数据模型生成SQL",
    url: "/visual-data-query-biz/{spaceHash}/query/generateModelSql",
    // method:"get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  saveOrUpdateSqlTable: {
    tips: "新增或修改自定义SQL视图",
    url: "/visual-object/{spaceHash}/model/saveOrUpdateSqlTable",
    // method:"get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  getSqlTableList: {
    tips: "获取模型的SQL视图列表",
    url: "/visual-object/{spaceHash}/model/getSqlTableList",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  deleteSqlTable: {
    tips: "删除SQL视图",
    url: "/visual-object/{spaceHash}/model/deleteSqlTable",
    // method:"get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  getSqlTableDetail: {
    tips: "获取SQL视图详情",
    url: "/visual-object/{spaceHash}/model/getSqlTableDetail",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  querySqlTableDataView: {
    tips: "获取SQL视图的预览数据",
    url: "/visual-data-query-biz/{spaceHash}/query/sqlTableDataView",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  queryModelDataView: {
    tips: "模型数据预览",
    url: "/visual-data-query-biz/{spaceHash}/query/modelDataView",
    // method:"get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  queryTableDataColumn: {
    tips: "获取表的某列的数据",
    url: "/visual-data-query-biz/{spaceHash}/query/tableDataColumn",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  queryTableDataView: {
    tips: "获取表的预览数据",
    url: "/visual-data-query-biz/{spaceHash}/query/tableDataView",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  queryTableList: {
    tips: "获取数据源的表列表",
    url: "/visual-data-query-biz/{spaceHash}/query/tableList",
    method: "get",
    timeout: 60 * 1000,
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  queryTableSchema: {
    tips: "获取表的结构",
    url: "/visual-data-query-biz/{spaceHash}/query/tableSchema",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  sqlTableSchema: {
    tips: "获取SQL视图表的结构",
    url: "/visual-data-query-biz/{spaceHash}/query/sqlTableSchema",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
  sqlTableDataColumn: {
    tips: "获取SQL视图表的某列的数据",
    url: "/visual-data-query-biz/{spaceHash}/query/sqlTableDataColumn",
    method: "get",
    extra: {
      penetrate: false //模拟数据单点关闭
    }
  },
}
export default api;
