<template>
  <div class="flex flex-col p-5">
    <div ref="tencentMapDom" class="flex flex-col flex-grow-1 flex-shrink-1" :class="[brand?'':'tencent-map-clearbrand']"></div>
  </div>
</template>

<style>
.tencent-map-clearbrand a[href='http://map.qq.com?ref=jsapi_v3'],
.tencent-map-clearbrand a[href='http://map.qq.com?ref=jsapi_v3'] + div{
  display: none !important;
}
</style>

<script lang="ts">
import TencentMapLoader from './component.lib/tencentmap';
import { defineComponent, ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import type { PropType } from "vue";
import { ElScrollbar } from 'element-plus';
import type TencentMap from "./types/tencent-map";

export default defineComponent({
  props:{
    appKey:{
      type:String as PropType<string>,
      default:'RWPBZ-QA73S-7Z7OZ-6WHXL-ZAQDO-QMFTT',
    },
    brand:{
      type:Boolean as PropType<boolean>,
      default:false,
    },
    disabled:{
      type:Boolean as PropType<boolean>,
      default:false,
    },
    center:{
      type:Object as PropType<TencentMap.LatLng>,
      default:()=>({lat:28.207051,lng:112.936943,height:0})
    },
    viewMode:{
      type:String as PropType<'3D'|'2D'>,
      default:'2D'
    },
    mapStyleId:{
      type:String as PropType<string>,
      default:''
    },
    zoom:{
      type:Number as PropType<number>,
      default:17,
    }
  },
  components:{ ElScrollbar },
  emits: ['onScrollToTop','onScrollToBottom'],
  setup(props,context) {
    let TencentMap:{[key:string]:any};
    const tencentMapDom = ref({} as { value?:Element });
    let MapInstance:any = null;
    let MarkerLayerInstance:any = null;
    onMounted(()=>{
      TencentMapLoader(props.appKey).then((tencentmap:any)=>{
        TencentMap = tencentmap;
        initMap();
      })
    })
    function initMap(){
      MapInstance = new TencentMap.Map(
        tencentMapDom.value, 
        {
          center: props.center,//设置地图中心点坐标
          zoom:props.zoom||10,   //设置地图缩放级别
          doubleClickZoom:!props.disabled,
          draggable:!props.disabled,
          scrollable:!props.disabled,
          viewMode:props.viewMode,
          mapStyleId:props.mapStyleId,
          showControl:false,
          scale:1,
          baseMap:{type:'vector'}
        } as TencentMap.TencentMapInitOptions
      );
      console.log(new TencentMap.LatLng(28.207051,112.936943)===props.center)
      MarkerLayerInstance = new TencentMap.MultiMarker({
          map: MapInstance,  //指定地图容器
          //样式定义
          styles: {
              //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
              "myStyle": new TencentMap.MarkerStyle({ 
                  "width": 25,  // 点标记样式宽度（像素）
                  "height": 35, // 点标记样式高度（像素)
                  //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                  "anchor": { x: 16, y: 32 }  
              }) 
          },
          //点标记数据数组
          geometries: [
            {//第二个点标记
              "id": "2",
              "styleId": 'marker',
              "position": new TencentMap.LatLng(props.center.lat,props.center.lng),
              "properties": {
                "title": "marker2"
              }
            }
          ]
      });
    }
    return {
      tencentMapDom,
    }
  },
})
</script>
