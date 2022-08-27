<template>
    <swiper ref="mySwiper" class="col-xs-12 ts-ns" :auto-update="true" @resize="resize" @slideChange="onChange" :options="options_">
        <slot></slot>
        <div v-show="showPagination" class="swiper-pagination" slot="pagination"></div>
        <div v-show="showNavigation" class="prev iconfont xpcc icon-arrowL blue-btn fs12 tc-wht ts-bd bdr50p" slot="button-prev"></div>
        <div v-show="showNavigation" class="next iconfont xpcc icon-arrowR blue-btn fs12 tc-wht ts-bd bdr50p" slot="button-next"></div>
    </swiper> 
</template>

<style scoped>
.blue-btn{
    background-color:rgba(0,0,0,0.1);
    cursor: pointer;
}
.blue-btn:hover{
    animation: turnover .5s forwards;
}
@keyframes turnover
{
    0%{background-color:rgba(0,0,0,0.1)}
    100%{background-color:#0072ff}
}
.prev{
    position:absolute;
    top:50%;
    left:1%;
    padding-left:3px;
    padding-top:1px;
    width:20px;
    height:20px;
    z-index: 2;
    height:31px;
    width:31px;
}
.next{
    position:absolute;
    width:20px;
    height:20px;
    top:50%;
    right:1%;
    padding-right:3px;
    padding-top:1px;
    z-index: 2;
    height:31px;
    width:31px;
}
.swiper-pagination{
    padding-bottom:2rem
}
</style>

<script>
import Vue from "vue";
import vas from 'vue-awesome-swiper' //
import 'swiper/dist/css/swiper.min.css'
Vue.use(vas/* { default options with global component } */)
const R = require('ramda')

export default {
    name:"aq-swiper",
    props:{
        options:{
            type:Object,
            default:function(){return {}}
        },
        showNavigation:{
            type:Boolean,
            default:true
        },
        showPagination:{
            type:Boolean,
            default:true,
        }
    },
    data() {
      return {
       
      }
    },
    computed: {
        options_(){
            var vm = this;
            return R.merge({
                loop:true,
                resistanceRatio:0,
                slidesPerView:1,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true
                },
                pagination: {
                    el:'.swiper-pagination',
                    clickable:true,
                    paginationElement : 'li',
                },
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                }
            },vm.options)
        },
        swiperInstance() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
    },
    methods: {
        resize(){
            var vm = this;
            vm.swiperInstance.updateSize()
            vm.swiperInstance.updateSlides()
            vm.swiperInstance.updateProgress()
            vm.swiperInstance.updateSlidesClasses()
            vm.swiperInstance.update(true)
        },
        onChange() {
            var vm = this
            vm.$emit("slideChange",vm.swiperInstance.realIndex)
        },
    }
}
</script>