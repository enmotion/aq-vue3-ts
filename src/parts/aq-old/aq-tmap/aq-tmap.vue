<template>
    <div class="xcol touch xg1 mh400 xg1 col-xs-12" :class="[isFullScreen?'lay2 top col-xs-12 h100p':'bd bdc-g9']">
        <div class="hauto bc-g10 bd-b bdc-g8 bdw-1 pdbt10 pdlr5 xrow xwarp">
            <el-tooltip  class="item mgl5" effect="dark" content="切换全屏模式" placement="top-start">
                <div @click="switchFullScreen" class="xpcc iconfont icon-fullscreen is14 bdr4 btn" :class="[isFullScreen?'tc-wht bc-w':'bd bdc-g8 bdw-1 tc-g5']" style="width:32px;height:32px"></div>                
            </el-tooltip>
            <el-tooltip  v-if="!disabled" class="item mgl5" effect="dark" content="切换编辑模式" placement="top-start">
                <div @click="switchEdit" class="xpcc iconfont icon-gps is14 bdr4 btn" :class="[isEdit?'tc-wht bc-s':'bd bdc-g8 bdw-1 tc-g5']" style="width:32px;height:32px"></div>                
            </el-tooltip>
            <div ref="selecter" class="col-xs-3 xg1 xrow xwarp" :class='[screen.isWS?"mgl5":"mglr5"]'>
                <span v-for="(v,k) in config.filters" :key="k" class="xcol" :class="[screen.isWS?'col-xs-12 pdlr5':'col-xs-5 pdl5 xg1 mgb5']">
                    <el-select v-model="reqdata[k]" size="small" class="xg1" :placeholder="v.txt">
                        <el-option
                            v-for="(value,key) in v.opts"
                            :key="value"
                            :label="value"
                            :value="key">
                        </el-option>
                    </el-select>
                </span>                
            </div>
            <div ref="searcher" class="xrow xjc-e" :class='[screen.isWS?"col-xs-6 xg1":"col-xs-12"]'>
                <aq-search :isWS="screen.isWS" :drop-menu="searchType" @actived="search"></aq-search>
            </div>
        </div>
        <div class="col-xs-12 xcol hauto hide" ref="InfoWindow">
            <div class="hauto bc-wht xcol mgt10">
                <div class="h30 xpcl fs18 ts-bd">{{currentMarkerInfo.name}}</div>
                <div class="h20 xpcl fs12 tc-g5">{{currentMarkerInfo.address}}</div>
                <div class="h20 xpcl fs12 tc-w">{{currentMarkerInfo.category}}</div>
            </div>
        </div>
        <div ref="mapContainer" class="xg1"></div>
    </div>    
</template>

<script>
const axios = require('axios');
const md5 = require('md5');
const R = require('ramda');
const markerImage = require("./assets/marker.png")
import TencentMap from './src/tmap.js';
import Vue from 'vue';
import {Select,Option} from "element-ui";
Vue.use(Select)
Vue.use(Option)

export default {
    props:{
        mapKey:{
            type:String,
            required:true,
        },
        SK:{
            type:String,
            default:"1DSEGlQhl5FOrbrCXf02KzsVuLp7cwmA"
        },
        markerPos:{
            type:Object,
        },
        disabled:{
            type:Boolean,
            default:false,
        }
    },
    data:function () {
        var vm = this;
        return {
            TencentMap:{
                ins:{},//qq
                maps:[],//map
                geo:{},
                listener:{},
            },
            marker:{},
            currentMarkerInfo:{
                name:"长沙市第一医院",
                address:"长沙市开福区三公里1号",
                type:"综合医院"
            },
            markers:[],
            center:vm.markerPos||{
                lat:"28.167617243640304",
                lng:"112.96026354655623",
            },
            isEdit:false,
            isFullScreen:false,
            searchService:{},
            config:{
                onLoading:false,
                filters:{                              
                    "selectKey":{
                        txt:"区位环境",
                        opts:{
                            "星级酒店":"酒店",
                            "教育学校":"学校",
                            "综合医院":"医院",
                            "购物":"购物",
                            "停车场":"停车场",
                            "农贸市场":"菜市场",
                            "公司企业":"公司",
                            "商务楼宇":"写字楼",
                            "电影院":"影院",
                            "健身中心":"健身",
                            "美食":"餐饮",
                            "住宅区":"住宅区"
                        },
                    },                    
                }
            },
            reqdata:{
                selectKey:"",
                searchKey:"",
            }
        }
    },
    computed:{
        searchType:function(){
            return [
                {label:"搜索关键词",type:"searchKey"},
            ]
        }
    },
    mounted() {
        var vm = this;
        vm.initMap();
    },
    watch:{
        "reqdata.selectKey":function(n,o){
            var vm = this;
            vm.search({content:n})
        },
        markerPos:function(n,o){
            var vm = this;
            if(n.lat && n.lng){                
                vm.center=n;
                setTimeout(function(){
                    vm.drawMap();
                },300)                
            }
        }
    },
    beforeDestroy:function(){
        var vm = this;
        console.log(vm.TencentMap.maps[0],123)
    },
    methods: {
        search:function(data){
            var vm = this;
            if(data.type){
                vm.reqdata.selectKey=""
            }
            vm.clearOverlays(vm.markers);
            vm.searchService.setPageIndex(0);//设置搜索页码
            vm.searchService.setPageCapacity(30);//设置每页的结果数
            vm.searchService.searchNearBy(data.content,vm.marker.getPosition(),1000);
        },
        clearOverlays:function(overlays) {
            var overlay;
            while (overlay = overlays.pop()) {
                overlay.setMap(null);
            }
        },
        switchFullScreen:function(){
            var vm = this;
            vm.isFullScreen=!vm.isFullScreen;
        },
        switchEdit:function(){
            var vm = this;
            vm.isEdit=!vm.isEdit;
            if(vm.isEdit){
                vm.TencentMap.listener.click=vm.TencentMap.ins.maps.event.addListener(vm.TencentMap.maps[0], 'click', function(event) {
                    vm.marker.setPosition(new qq.maps.LatLng(event.latLng.getLat(), event.latLng.getLng()));
                    vm.$emit("updata",{lat:event.latLng.getLat(),lng:event.latLng.getLng()})
                });
            }else{
                vm.TencentMap.ins.maps.event.removeListener(vm.TencentMap.listener.click)
            }
        },
        initMap:function(key){
            var vm = this;                     
            TencentMap(key||vm.mapKey).then( qq => {
                vm.TencentMap.ins=qq;
                setTimeout(function(){
                    vm.TencentMap.geo = new qq.maps.Geolocation();
                    vm.TencentMap.geo.getIpLocation(function(res){
                        if(R.isEmpty(vm.markerPos)){
                            vm.center={
                                lat:res.lat,
                                lng:res.lng,
                            }
                        }
                        vm.drawMap();
                    },function(){
                        vm.drawMap();
                    }) 
                },300)
            });
        },
        drawMap:function(){
            var vm = this;
            vm.TencentMap.maps[0] = new qq.maps.Map(vm.$refs.mapContainer, {
                center: new qq.maps.LatLng(vm.center.lat, vm.center.lng),
                zoom: 13,
                disableDefaultUI: true,
                mapStyleId:"style1"
            });
            vm.initSearch();
            vm.marker=new qq.maps.Marker({
                position: new qq.maps.LatLng(vm.center.lat, vm.center.lng),
                flat:false,
                zIndex:9999999,
                icon:new vm.TencentMap.ins.maps.MarkerImage(
                    markerImage,
                ),          
                animation:vm.TencentMap.ins.maps.MarkerAnimation.BOUNCE,
                map: vm.TencentMap.maps[0]
            })
        },
        initSearch:function(){
            var vm = this;
            vm.searchService = new qq.maps.SearchService({
                //检索成功的回调函数
                complete: function(results) {
                    //设置回调函数参数
                    var pois = results.detail.pois;
                    var infoWin = new qq.maps.InfoWindow({
                        map: vm.TencentMap.maps[0]
                    });
                    var latlngBounds = new qq.maps.LatLngBounds();
                    for (var i = 0, l = pois.length; i < l; i++) {
                        var poi = pois[i];
                        //扩展边界范围，用来包含搜索到的Poi点
                        latlngBounds.extend(poi.latLng);
        
                        (function(n) {
                            var marker = new qq.maps.Marker({
                                map: vm.TencentMap.maps[0]
                            });
                            marker.setPosition(pois[n].latLng);
                            marker.setTitle(i + 1);                            
                            vm.markers.push(marker);
                            qq.maps.event.addListener(marker, 'click', function() {
                                vm.currentMarkerInfo=pois[n];
                                vm.$nextTick(function(){
                                    infoWin.open();
                                    infoWin.setContent(vm.$refs.InfoWindow.innerHTML);
                                     infoWin.setPosition(pois[n].latLng);
                                })
                            });                                                       
                        })(i);
                    }
                    //调整地图视野
                    vm.TencentMap.maps[0].fitBounds(latlngBounds);
                },
                //若服务请求失败，则运行以下函数
                error: function(err) {
                    // console.log(err)
                    vm.toast_({
                        message:"没有符合您条件的搜索结果，请更换关键词再次尝试!",
                        type:"warning"
                    })
                }
            });
        },             
    },    
}
</script>