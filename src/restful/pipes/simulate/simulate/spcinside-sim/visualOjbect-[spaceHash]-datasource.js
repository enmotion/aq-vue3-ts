const datasrc={
    datasourcePage:function(ctx){
        return {
            data:{
                countId: "",
                current: 1,
                hitCount: false,
                maxLimit: "",
                optimizeCountSql: true,
                orders: [],
                pages: 1,
                records:[
                    {
                        createTime: "",
                        createUser: "",
                        description: "大屏数据源",
                        host: "192.168.2.153",
                        sourceHash: "db_2c238-kwsv2rvm-f180d",
                        sourceName: "大屏数据源2222",
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        status: 1,
                    },
                    {
                        createTime: "",
                        createUser: "",
                        description: "测试数据源",
                        host: "192.168.2.153",
                        sourceHash: "db_12u6b-0739104z-39847",
                        sourceName: "测试数据源",
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        status: 1
                    },
                ],
                searchCount: true,
                size: 24,
                total: 3,
            }
        }
    },
    datasourceDetail:function(ctx){
        return {
            data:{
                createTime: "2021-12-23 16:59:50",
                createUser: "1123598821738675201",
                description: "测试数据源",
                host: "",
                sourceHash: "db_12u6b-0739104z-39847",
                sourceName: "测试数据源",
                spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                status: 1,
                configInfo:{
                    dbName: "testdev",
                    host: "192.168.2.153",
                    password: "",
                    port: "3306",
                    sourceType: "MySQL 5.X",
                    username: "nacos3",
                }
            }
        }
    },
    datasourceSourceTypeList:function(ctx){
        return {
            data:[
                "MySQL 5.X",
                "MySQL 8",
                "Maria DB",
                "Oracle",
                "MongoDB",
                "postergral"
            ]
        }
    }
}
export default datasrc;
