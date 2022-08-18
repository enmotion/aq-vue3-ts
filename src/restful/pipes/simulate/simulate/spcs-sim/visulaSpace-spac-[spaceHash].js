const spcs={
    roleDetail:function(ctx){
        return {
            data:{
                description: "空间角色1给点描述看看修改的情况",
                id: "1470292308413734913",
                name: "空间角色A",
                spaceHash: "s_qeaze-4hh45t3e-k0e4p",
            }
        }
    },

    spaceRolePage:function(ctx){
        return {
            data:{
                ountId: "",
                current: 1,
                hitCount: false,
                maxLimit: "",
                optimizeCountSql: true,
                orders: [],
                pages: 1,
                records: [
                    {
                        description: "空间角色1给点描述看看修改的情况",
                        id: "1470292308413734913",
                        name: "空间角色A",
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                    },
                    {
                        description: "这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字。",
                        id: "1472931856742735874",
                        name: "空间角色B",
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                    }
                ],
                searchCount: true,
                size: 24,
                total: 2,
            }
        }
    },
    getSpaceUserListOfRole:function(ctx){
        return {
            data:[
                {
                    isAdmin: 1,
                    spaceHash: "s_pjt2y-kbbmtwdr-jdfua",
                    userEmail: "admin@bladex.vip",
                    userId: "1123598821738675201",
                    userName: "admin",
                },
                {
                    isAdmin: 1,
                    spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                    userEmail: "",
                    userId: "1466687993500250113",
                    userName: "123",
                }
            ]
        }
    },
    getSpaceRoleListOfUser:function(ctx){
        return {
            data:[
                {
                    description: "空间角色1给点描述看看修改的情况",
                    id: "1470292308413734913",
                    name: "空间角色A",
                    spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                }
            ]
        }
    },
    spaceRoleList:function(ctx){
        return {
            data:[
                {
                    description: "空间角色1给点描述看看修改的情况",
                    id: "1470292308413734913",
                    name: "空间角色A",
                    spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                },
                {
                    description: "这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字，这是空间角色3的描述文字。",
                    id: "1472931856742735874",
                    name: "空间角色B",
                    spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                }
            ]
        }
    },
    spcListByOrg:function(ctx){
        return {
            data:{
                countId: "",
                current: 1,
                hitCount: false,
                maxLimit: "",
                optimizeCountSql: true,
                orders: [],
                pages: 1,
                records: [
                    {
                        description: "这是杰凤创建的第一个空间，为了方便之后识别，故保留下来，以备后续使用！文字部分，我测试更多的可能！",
                        logo: "",
                        name: "001号空间",
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        type: 2
                    },
                    {
                        description: "002空间木奥数的科拉罗夫说开了风刀霜剑发，开发进度款礼服就分开了的附近看到，发动机啊索科洛夫家附近的开始就分开了的手机费，附近的看啦减肥发生附近开撒的 附近。",
                        logo: "",
                        name: "002空间",
                        orgHash: "o_7jub5-dro2x0i4-d6pzx",
                        spaceHash: "s_464vu-s8de00mq-gzrbv",
                        type: 2,
                    }
                ],
                searchCount: true,
                size: 10,
                total: 2,
            }
        }
    },
    spcDetail:function(ctx){
        return {
            data:{
                description: "这是杰凤创建的第一个空间，为了方便之后识别，故保留下来，以备后续使用！文字部分，我测试更多的可能！",
                logo: "",
                name: "001号空间",
                orgHash: "o_7jub5-dro2x0i4-d6pzx",
                spaceConfigInfo:{
                    boardRootCategoryName: "报表目录地址",
                    displayByPermission: 1,
                    screenRootCategoryName: "大屏目录地址",
                    tablePreviewWithTotal: 1,
                },
                spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                type: 2,
            }
        }
    },
    getSpaceAdminUserList:function(ctx){
        return {
            data:[
                {
                    id: "1472819268943736833",
                    isAdmin: 1,
                    spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                    userEmail: "admin@bladex.vip",
                    userId: "1123598821738675201",
                    userName: "admin",
                }
            ]
        }
    },
    spaceUserPage:function(ctx){
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
                        id: "1472819268943736833",
                        isAdmin: 1,
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        userEmail: "admin@bladex.vip",
                        userId: "1123598821738675201",
                        userName: "admin",
                    },
                    {
                        id: "1472833715238146050",
                        isAdmin: 0,
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        userEmail: "",
                        userId: "1466650684289560577",
                        userName: "12",
                    },
                    {
                        id: "1472833733114269697",
                        isAdmin: 0,
                        spaceHash: "s_qeaze-4hh45t3e-k0e4p",
                        userEmail: "",
                        userId: "1466687993500250113",
                        userName: "123",
                    }
                ],
                searchCount: true,
                size: 24,
                total: 4,
            }
        }
    },
}
export default spcs;
