// 流程面板 模块菜单对象
export declare interface MenuItem{
  label?:string, // 标题名称
  tips?:string, // 提示文字
  icon?:string, // 图标样式
  method?:{ // 对应方法描述
    name:string, // 方法名称
    params?:any // 方法入参
  },
  children?:MenuItem[] // 子菜单
}