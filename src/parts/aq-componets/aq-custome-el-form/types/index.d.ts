// 需要被加工的数据
export interface HandingData{
  [key:string]:any,
}
// 单个组件元素界面配置信息
export interface UIElementOption{
  component:string, // 界面组件名称
  label?:string, // 界面组件标签名称
  append?:string, // 界面组件尾标
  invisible?:boolean, // 界面组件是否隐藏
  outerClass?:string,//容器 class 样式
  outerStyle?:StyleValue, // 容器style配置
  updateHooks?:{
    beforeCreate:(v:any,k:string)=>any
    allowUpdate:(v:any,k:string)=>boolean
    beforeCreate:(v:any,k:string)=>any
  },
  componentBind:{ // 组件绑定数据
    class?:string, // 组件的class
    style?:StyleValue,//组件的样式
    [key:string]:any, //需要绑定给组件的其他值
  }
}
// 界面配置信息
export interface UIConfigOptions{
  [key:string]:UIElementOption
}
// slot配置
export interface SlotOption{
  minWidth:number,
  component?:string,
}