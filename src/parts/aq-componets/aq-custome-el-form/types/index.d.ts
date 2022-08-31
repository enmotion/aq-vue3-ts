// 需要被加工的数据
export interface HandingData{
  [key:string]:any,
}
// 单个组件元素界面配置信息
export interface UIElementOption{
  component:string,
  invisible?:boolean,
  outerClass?:string,//容器 class 样式
  outerStyle?:CSSStyleDeclaration,
  componentBind:{
    class?:string,
    style?:CSSStyleDeclaration,
    [key:string]:any
  }
}
// 界面配置信息
export interface UIConfigOptions{
  [key:string]:UIElementOption
}