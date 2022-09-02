// 需要被加工的数据
namespace CTF{
  export interface Data{[key:string]:any}
  export interface State{value:Data}
  export type BeforeUpdate = (key:string, n:any, o:any, innerState:{value:Data} )=> Data
  export type UiGuardin = ( ui:ElementGroup, data:any )=> ElementGroup
  export interface UiConfig{
    beforeUpdate?:BeforeUpdate
    uiGuardian?:UiGuardin // ui 守卫 根据处理数据的变化，对UI配置进行及时调整
    elementGroup:ElementGroup
  }
  // 多组件配置结构
  export interface ElementGroup{
    [key:string]:ElementAtom
  }
  // 单个组件元素界面配置信息
  export interface ElementAtom{
    component:string, // 界面组件名称
    label?:string, // 界面组件标签名称
    append?:string, // 界面组件尾标
    invisible?:boolean, // 界面组件是否隐藏
    outerClass?:string,//容器 class 样式
    outerStyle?:StyleValue, // 容器style配置
    // 在使用中，有时我们需要对值进行转化,比如值为 '18px' 但在组件中必须为 数值 18 就可以通过以下两个访问器，进行转换操作
    getter?:(v:any)=>any, // 值读取器 
    setter?:(v:any)=>any, // 值设置器
    binds:{ // 组件绑定数据
      class?:string, // 组件的class
      style?:StyleValue,//组件的样式
      [key:string]:any, //需要绑定给组件的其他值
    }
  }  
  // slot配置
  export interface SlotConfig{
    minWidth:number,
    component?:string,
  }
}
export default CTF
