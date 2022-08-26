export declare interface MenuOption{
  label:string,
  value:string,
  to:RouteLocationNormalized
}
export interface TagRecordRaw{
  label:string,
  value:string,
  static?:boolean,
  to?:RouteLocationNormalized
}
export declare interface TagOption{
  label:string,
  value:string,
  params?:any,
  query?:any,
  static?:boolean, // 是否禁用删除
}