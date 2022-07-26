import { Process } from 'types/bpmn-editor/bpmnProcessJsonData'; // 引入流程菜单描述
export const global:Process={
  id:'',
  name:'',
  boCode:'',
  from:{ type:'inner' },
  copyTo:[],//抄送通知设置，是一个列表，可配置多个抄送
  other:{
    titleRule: '',    //标题规则
    skipFirstNode: false,  //跳过第一个节点
    firstNodeUserSelector: false,  //第一个节点可以选择执行人
    passAdjacent: false,	//相邻节点相同执行人直接跳过
    allowTransfer: false, //允许转办任务
    allowNoUser: false, //允许执行人为空
    skipWhileNoUser: false, //执行人为空时跳过任务
    noticeType: '', //通知类型 inner 内部消息， message短信，email邮件, wechat微信, 可以有多个值，多个值之间逗号隔开
    test: false, //是否测试状态
    status: false //是否可用
  }
}