declare namespace TencentMap{
  export interface Map{(domid:string|Element,options:TencentMapInitOptions):TencentMapInstance}
  export interface LatLng{
    lat:number,
    lng:number,
    height?:number,
  }
  export interface ClipOptions{
    paths:LatLng[]
  }
  export interface LatLngBounds{
    sw:LatLng,
    ne:LatLng,
  }
  export interface MapRenderOptions{
    preserveDrawingBuffer:boolean,
    enableBloom:boolean,
    fogOptions:{
      color:string,
    }
  }
  export interface TencentMapInitOptions{
    center?:LatLng,
    zoom?:number,
    minZoom?:number,
    maxZoom?:number,
    rotation?:number,
    pitch?:number,
    scale?:number,
    offset?:{x:number,y:number},
    draggable?:boolean,
    scrollable?:boolean,
    draggable?:boolean,
    rotatable?:boolean,
    doubleClickZoom?:boolean,
    mapZoomType?:any, // 类型不明
    boundary?:LatLngBounds,
    mapStyleId?:string,
    viewMode?:'3D'|'2D',
    showControl?:boolean,
    renderOptions?:MapRenderOptions,
    clip?:ClipOptions
  }
  export interface TencentMapInstance{

  }
}
export default TencentMap