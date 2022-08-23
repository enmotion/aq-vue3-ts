export interface Menu{
  label:string, // 菜单名称
  icon?:string, // 菜单icon图标
  value:string, // 菜单路由名称
  params?:any, // 菜单路由地址参数
  query?:any, // 菜单路由后缀参数
  children?:Menu[]
}
export interface MenuRecord{
  tagRouteName:string,
  firstLevelValue:string,
}
export interface Crumb{
  label:string,
  icon?:string,
  value?:string,
}