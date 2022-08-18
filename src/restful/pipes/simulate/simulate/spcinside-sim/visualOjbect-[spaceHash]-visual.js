const datamodcat={
    visualTree:function(ctx){
        return ctx.params.type==1?{
            data:[
                {
                    hasChildren: true,
                    id: "1496930571349159938",
                    key: "1496930571349159938",
                    parentId: "0",
                    title: "screen-00",
                    value: "1496930571349159938",
                    children: [
                        {
                            hasChildren: true,
                            id: "1496932956406575105",
                            key: "1496932956406575105",
                            parentId: "1496930571349159938",
                            title: "screen-00-00",
                            value: "1496932956406575105",
                            children:[
                                {
                                    hasChildren: false,
                                    id: "1498283345110401025",
                                    key: "1498283345110401025",
                                    parentId: "1496932956406575105",
                                    title: "00-00-00",
                                    value: "1498283345110401025",
                                }
                            ]
                        },
                    ],
                },
                {
                    hasChildren: false,
                    id: "1498291235665772546",
                    key: "1498291235665772546",
                    parentId: "0",
                    title: "screen-01",
                    value: "1498291235665772546",
                }
            ]
        }:{
            data:[
                {
                    hasChildren: false,
                    id: "1496930571349159938",
                    key: "1496930571349159938",
                    parentId: "0",
                    title: "报表目录-00",
                    value: "1496930571349159938",
                },
                {
                    hasChildren: false,
                    id: "1498291235665772546",
                    key: "1498291235665772546",
                    parentId: "0",
                    title: "报表目录-01",
                    value: "1498291235665772546",
                }
            ]
        }
    },
    visualDetail(ctx){
        console.log(ctx)
        return {
            data:{
                "spaceHash": "s_4oc3g-g0jai086-0dkdn",
                "hash": "srn_p9289-4wi4y201-44234",
                "name": "测试大屏OK",
                "type": 1,
                "categoryId": "1496930571349159938",
                "openInSpace": 0,
                "shareSecret": "",
                "iframeUrls": "",
                "logo": "",
                "configInfo": {
                    "dashboard": {
                        "name": "测试大屏OK",
                        "remark": "测试大屏OK 描述",
                        "type": 1,
                        "hash": "srn_p9289-4wi4y201-44234"
                    }
                },
                "description": "测试大屏OK 描述",
                "isDeleted": 0
            }
        }
    },
    visualCategoryDetail(ctx){
        return {
            data:{
                createDetp: "",
                createTime: "2022-02-25 03:30:34",
                createUser: "1123598821738675201",
                description: "测试描述信息",
                id: "1496930571349159938",
                isDeleted: 0,
                name: "screen-00",
                openInSpace: 1,
                parentId: "1496930571349159938",
                spaceHash: "s_4oc3g-g0jai086-0dkdn",
                status: 1,
                type: 1,
                updateTime: "2022-02-25 03:39:51",
                updateUser: "1123598821738675201",
            }
        }
    },
    visualCategoryItems(ctx){
        return{
            data:[
                {
                    categoryId: "1498283345110401025",
                    hash: "",
                    isCategory: 1,
                    name: "00-00-00",
                    spaceHash: "s_4oc3g-g0jai086-0dkdn",
                },
                {
                    categoryId: "",
                    hash: "srn_407h4-391z4nj4-020qs",
                    isCategory: 0,
                    name: "测试大屏01",
                    spaceHash: "s_4oc3g-g0jai086-0dkdn",
                }
            ]
        }
    }
}
export default datamodcat;