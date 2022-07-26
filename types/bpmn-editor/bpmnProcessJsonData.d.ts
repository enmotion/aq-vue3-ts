
// 流程整体配置数据类型声明
export declare interface ProcessConfig{
  global:Process,
  nodes?:{[key:string]:FlowNode}
}
// 流程数据声明
export declare interface Process{
  id:string, //流程key
  name:string, //变量名称
  boCode:string, //业务对象编码
  from?:FlowFormConfig, //流程表单配置
  variables?:VariablesNode,// 
  copyTo?:NoticeSet[],//抄送通知设置，是一个列表，可配置多个抄送
  other?:{
    titleRule: string,    //标题规则
    skipFirstNode: boolean,  //跳过第一个节点
    firstNodeUserSelector: boolean,  //第一个节点可以选择执行人
    passAdjacent: boolean,	//相邻节点相同执行人直接跳过
    allowTransfer: boolean, //允许转办任务
    allowNoUser: boolean, //允许执行人为空
    skipWhileNoUser: boolean, //执行人为空时跳过任务
    noticeType: string, //通知类型 inner 内部消息， message短信，email邮件, wechat微信, 可以有多个值，多个值之间逗号隔开
    test: boolean, //是否测试状态
    status: boolean //是否可用
  }
}
export declare interface NoticeSet{
  noticeType:'inner'|'message'|'email'|'wechat'[],// 'inner'|'message'|'email'|'wechat'  //通知类型 inner 内部消息， message短信，email邮件, wechat微信, 可以有多个值，多个值之间逗号隔开
  users:NodeUserSet[]
}
export declare interface NodeUserSet{
  order: number, //序号
  batch: number, //批次号
  userCondition : RuleComposite,
  userSet: [{
    order: 1,  //序号
    type: string,  //用户类型 user 用户，org 组织，group用户组，role 角色，orgManager 组织负责人，script 脚本
    param: UserSetParam, //参数依据用户类型，参数对象格式不一样
    logicalRelation: 'and'|'or'|'not' //与之前用户设置的逻辑关系 and 与 or 或 not 非
  }] 
}
// 完成
export declare interface RuleComposite{
  relation: string,  //规则之间的关系
  conditions:{
    field: string, //bo 业务对象字段名
    linkType: string, // 关联关系
    value: {
        type : 'fiexed'|'user'|'org',  // fiexed 固定值 user 用户 org 组织
        param : string  // 参数值，user或org时参数都是对应的ID
    }
  }[]
  scripts: {
    name: string,    //脚本名称
    content: string   //脚本内容
  }[],
  composites: RuleComposite[]
}
export declare interface UserSetParam{
  //用户设置类型 startUser 发起人，lastTaskUser 上一步执行人， assign 指定人，variable 人员变量， nodeId 相同节点执行人，none无类型
  type:'startUser'|'lastTaskUser'|'assign'|'variable'|'nodeId'|'none',
  param:string,
}
// 流程面板 模块菜单对象
export declare interface FlowNode{
  id: string, //节点key
  name: string, //节点名称
  //startEvent 开始事件 //endEvent 结束事件 //userTask 用户任务 //sendTask 发送消息任务 //serviceTask 服务任务 //scriptTask 脚本任务 //subProcess 子流程 //callActivity 外部调用流程 //exclusiveGateway 排他网关 //inclusiveGateway 条件网关 //parallelGateway 并行网关
  type: 'startEvent' | 'endEvent' | 'userTask' | 'sendTask' | 'serviceTask' | 'scriptTask' | 'subProcess' | 'callActivity' | 'exclusiveGateway' | 'inclusiveGateway' | 'exclusiveGateway' | 'parallelGateway' // 节点类型，涵盖所有支持的类型     
  isMultiInst: boolean, //是否是多实例，如果是，表示会签节点
  isSequential: boolean, //多实例时，是否是串行多实例
  inComing: string[],  // 流入节点id
  outComing: string[], // 流出节点id
  config: any //根据节点类型不同，配置不同
}
export declare interface VariablesNode{
  [key:string]:{
    name:string, //变量名称
    key:string, //变量key
    detaType:'string'|'int'|'float', //数据类型 string 字符串 int 整形 float浮点型
    defaultValue: Number | String,  //默认值
    notNull:boolean,  //是否必填
    desc:string //变量描述
  }
}
export declare interface FlowFormConfig{
  type:'online'|'inner'|'url'|'none', //表单类型，online 在线表单 inner 内嵌URL表单, url URL表单， none 无
  code?:string, //表单编码,online类型的表单填表单code
  url?:string, //表单地址，inner或url类型时填地址
  printTemplateCode?:string, //打印模板编码
  preHandler?:string, //表单前置处理器
  postHandler?:string, //表单后置处理器
  componentRights?:{ 
    [key:string]:componentRightConfig
  },// 表单组件权限配置
}
export declare interface componentRightConfig{
  read: permissionConfig,
  edit: permissionConfig,
  noNull: permissionConfig
  hidden: permissionConfig
}
export declare interface permissionConfig{
  permitAll: boolean,  //所有人员需满足条件
  noPermit: boolean,  //无权限设置
  users: string, //授权用户ID列表，逗号隔开
  roles: string,  //授权角色ID列表，逗号隔开
  orgs: string,  //授权组织ID列表，逗号隔开，不含子组织
  orgWithChilds: string, //授权组织ID列表，逗号隔开，含子组织
  positions:string  //授权岗位ID列表，逗号隔开
}
