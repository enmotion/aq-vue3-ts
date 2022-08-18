const orgs={
    orgUserWithAttrPage:function(){
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
                        id: "1471455151406567426",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "",
                        userId: "1468057826684059649",
                        userName: "1234",
                        attrList:[
                            {
                                attrHash: "attr_tc4y5-8u37fsb6-0vjhr",
                                id: "1468507687883722754",
                                name: "地域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_v7sn8-t3oeq9yu-r6y45",
                                id: "1470558552740167682",
                                name: "市区",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_aqewo-jx7hrfbd-zmb4g",
                                id: "1471784428047704066",
                                name: "区域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            }
                        ]
                    },
                    {
                        id: "1471675458985680898",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "",
                        userId: "1466650684289560577",
                        userName: "12",
                        attrList:[
                            {
                                attrHash: "attr_tc4y5-8u37fsb6-0vjhr",
                                id: "1468507687883722754",
                                name: "地域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_v7sn8-t3oeq9yu-r6y45",
                                id: "1470558552740167682",
                                name: "市区",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_aqewo-jx7hrfbd-zmb4g",
                                id: "1471784428047704066",
                                name: "区域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            }
                        ]
                    },
                    {
                        id: "1471733551769673729",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "admin@bladex.vip",
                        userId: "1123598821738675201",
                        userName: "admin",
                        attrList:[
                            {
                                attrHash: "attr_tc4y5-8u37fsb6-0vjhr",
                                id: "1468507687883722754",
                                name: "地域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_v7sn8-t3oeq9yu-r6y45",
                                id: "1470558552740167682",
                                name: "市区",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            },
                            {
                                attrHash: "attr_aqewo-jx7hrfbd-zmb4g",
                                id: "1471784428047704066",
                                name: "区域",
                                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                                userId: "1468057826684059649",
                                value: "",
                            }
                        ]
                    }
                ],
                searchCount: true,
                size: 24,
                total: 3,
            }
        }
    },
    userSearch:function(ctx){
        return ctx.params.emailOrUsername ? {
            data:[
                {
                    userEmail: "",
                    userId: "1466650684289560577",
                    userName: "KING",
                },
                {
                    userEmail: "ss",
                    userId: "2321232131232132133",
                    userName: "KINGss",
                }
            ]
        }:{
            data:[]
        }
    },
    orgUserList:function(ctx){
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
                        id: "1471455151406567426",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "",
                        userId: "1468057826684059649",
                        userName: "1234",
                    },
                    {
                        id: "1471675458985680898",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "",
                        userId: "1466650684289560577",
                        userName: "12",
                    },
                    {
                        id: "1471733551769673729",
                        isAdmin: 0,
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        userEmail: "admin@bladex.vip",
                        userId: "1123598821738675201",
                        userName: "admin",
                    },
                ],
                searchCount: true,
                size: 24,
                total: 3,
            }
        }
    },
    // 获取组织管理员列表
    orgAdminUserList:function(ctx){
        return {
            data:[
                {
                    id: "1470653780818247682",
                    isAdmin: 1,
                    orgHash: "o_gblx1-7zt66zvm-3bmon",
                    userEmail: "admin@bladex.vip",
                    userId: "1123598821738675201",
                    userName: "admin",
                },
                {
                    id: "1471408352973148162",
                    isAdmin: 1,
                    orgHash: "o_gblx1-7zt66zvm-3bmon",
                    userEmail: "",
                    userId: "1468057826684059649",
                    userName: "testAdmin",
                },
                {
                    id: "1471743308559638529",
                    isAdmin: 1,
                    orgHash: "o_gblx1-7zt66zvm-3bmon",
                    userEmail:"master@gmail.com",
                    userId: "1466650684289560577",
                    userName: "master",
                },
            ]
        }
    },
    //获取组织详情
    userOrgDetail:function(ctx){
        return {
            data:{
                description: "测试组织002 补充了部分描述信息",
                expireTime: "2022-12-14 15:15:59",
                maxUserNum: "",
                name: "测试组织002",
                orgConfigInfo:{
                    boardRootCategoryName: "测试组报表002",
                    msgPosition: 2,
                    screenRootCategoryName: "测试组大屏002",
                    spaceCreate: 1,
                    spaceDisplay: 1,
                },
                orgHash: "o_gblx1-7zt66zvm-3bmon",
                status: 1,
                version: "",
            }
        }
    },
    //注册登录
    userOrgList:function(ctx){
        return {
            data:{
                "current": 1, // 当前页面
                "hitCount": true, // 未知
                "pages": 1, // 页面数
                "records": [
                    {
                        "description": "这是一段组织描述文字，一般来说用于对组织的简单介绍，方便用户识别组织。", // 组织描述
                        "expireTime": "1640880000", // 过期时间
                        "maxUserNum": 985679012, // 最大成员数
                        "name": "模拟组织01", // 组织名称
                        "orgConfigInfo": {
                            "adminUserList": [  // 管理员列表
                                {
                                    "userEmail": "",
                                    "userId": 0,
                                    "userName": ""
                                }
                            ],
                            "boardRootCategoryName": "",
                            "msgPosition": 0,
                            "screenRootCategoryName": "",
                            "spaceCreate": 0,
                            "spaceDisplay": 0
                        },
                        "orgHash": "01", // 组织索引 类似ID 用的hash
                        "status": 0, // 业务状态
                        "version": "" // 组织版本
                    },
                    {
                        "description": "这是一段组织描述文字，一般来说用于对组织的简单介绍，方便用户识别组织。", // 组织描述
                        "expireTime": "1640880000", // 过期时间
                        "maxUserNum": 3, // 最大成员数
                        "name": "模拟组织02", // 组织名称
                        "orgConfigInfo": {
                            "adminUserList": [  // 管理员列表
                                {
                                    "userEmail": "",
                                    "userId": 0,
                                    "userName": ""
                                }
                            ],
                            "boardRootCategoryName": "",
                            "msgPosition": 0,
                            "screenRootCategoryName": "",
                            "spaceCreate": 0,
                            "spaceDisplay": 0
                        },
                        "orgHash": "02", // 组织索引 类似ID 用的hash
                        "status": 0, // 业务状态
                        "version": "" // 组织版本
                    },
                    {
                        "description": "这是一段组织描述文字，一般来说用于对组织的简单介绍，方便用户识别组织。", // 组织描述
                        "expireTime": "1650890000", // 过期时间
                        "maxUserNum": 5, // 最大成员数
                        "name": "模拟组织03", // 组织名称
                        "orgConfigInfo": {
                            "adminUserList": [  // 管理员列表
                                {
                                    "userEmail": "",
                                    "userId": 0,
                                    "userName": ""
                                }
                            ],
                            "boardRootCategoryName": "",
                            "msgPosition": 0,
                            "screenRootCategoryName": "",
                            "spaceCreate": 0,
                            "spaceDisplay": 0
                        },
                        "orgHash": "03", // 组织索引 类似ID 用的hash
                        "status": 0, // 业务状态
                        "version": "" // 组织版本
                    },
                    {
                        "description": "这是一段组织描述文字，一般来说用于对组织的简单介绍，方便用户识别组织。", // 组织描述
                        "expireTime": "1645880000", // 过期时间
                        "maxUserNum": 1, // 最大成员数
                        "name": "模拟组织04", // 组织名称
                        "orgConfigInfo": {
                            "adminUserList": [  // 管理员列表
                                {
                                    "userEmail": "",
                                    "userId": 0,
                                    "userName": ""
                                }
                            ],
                            "boardRootCategoryName": "",
                            "msgPosition": 0,
                            "screenRootCategoryName": "",
                            "spaceCreate": 0,
                            "spaceDisplay": 0
                        },
                        "orgHash": "04", // 组织索引 类似ID 用的hash
                        "status": 0, // 业务状态
                        "version": "" // 组织版本
                    }
                ],
                "searchCount": true,
                "size": 10,
                "total": 4
            }
        }
    },
}
export default orgs;
