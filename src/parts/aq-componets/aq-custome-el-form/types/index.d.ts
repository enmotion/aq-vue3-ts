// 需要被加工的数据
namespace CTF{
  export interface Data{
    [key:string]:any,
  }
  // 界面配置信息
  onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted
  export interface UiConfig{
    onBeforeMount?:(v:any,k:string)=>any
    onMounted?:(v:any,k:string)=>boolean
    onBeforeUpdate?:(v:any,k:string)=>boolean
    onBeforeUnmount?:(v:any,k:string)=>boolean
    onUnmounted?:(v:any,k:string)=>boolean
    uiGuardian?:(ui:UIConfigOptions,mirroData:any)=>UIConfigOptions, // ui 守卫 根据处理数据的变化，对UI配置进行及时调整
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
