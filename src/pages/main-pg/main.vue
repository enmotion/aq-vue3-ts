<template>
  <div class="xcol flex-grow-1 bg-texture">
    <div class="h-140 bg-p-6 xrow">
      <div class="w-200 xcol">
        <!-- logo部分 -->
        <div class="h-100 items-center xrow justify-center px-10">
          <span class="iconfont icon-unicom-logo text-4xl text-white"></span>
          <span class="ml-10 xcol items-start justify-center" style="margin-top:2px">
            <span class="text-sm text-white font-bold" style="line-height:14px">纬业流程</span>
            <span class="h-15 text-xs text-light-32 uppercase font-bold scale-75 origin-bottom-left" style="line-height:12px">version:0.0.1</span>
          </span>
        </div>
        <div class="h-40">
        </div>
      </div>
      <!-- 导航与标签 -->
      <div class="xcol flex-grow-1">
        <div class="h-90 xrow items-center">
          <aq-click-scroll-view class="h-40">
            <div class="h-40 w-auto xrow items-center px-20">
              <span v-for="(i) in 122" 
                :key="i" 
                class="py-5 flex-shrink-0 text-sm font-bold rounded-sm mr-30 border-b-2 border-dark-1 last:mr-0 cursor-pointer hover:text-white hover:border-light-12 transition-all duration-500"
                :class="[i==3?'border-s-10 text-white':'bg-dark-1 text-light-32']"
                style="margin-top: 4px;">
                  首级菜单-{{i}}
              </span>
            </div>
          </aq-click-scroll-view>
        </div>
        <!-- tab部分 -->
        <div class="h-50 xrow items-end">
          <div class="h-40 w-auto flex-grow-1 xrow items-end bg-dark-12 border-t border-light-6 rounded-t-md backdrop-blur-lg">
            <aq-click-scroll-view class="h-50 xrow">
              <span class="h-50 xrow items-end">
                <span v-for="(i) in 20" 
                  :key="i" 
                  class="px-15 flex-shrink-0 text-xs font-bold rounded-t-md mr-5 last:mr-0 xcol items-center justify-center"
                  :class="[i==2?'h-45 bg-gradient-to-t from-gray-200 to-white text-gray-600':
                  'text-light-18 h-40 cursor-pointer hover:h-45 hover:bg-p-10 hover:text-white transition-all duration-300']">
                    标签菜单-{{i}}
                </span>
              </span>
            </aq-click-scroll-view>
          </div>
        </div>
      </div>
      <!-- 个人菜单 -->
      <div class="bg-dark-8 border-l border-light-6 xcol px-20 py-10 backdrop-blur-lg">
        <div class="h-45 flex-grow-1 xrow items-center">
          <span class="h-45 w-45 rounded-full flex-shrink-0 flex-grow-0 bg-white  overflow-hidden shadow-lg shadow-white">
            <img src="http://i1.go2yd.com/image.php?url=0W8wDjc3Sh" class="rounded-full" style="transform:scale(0.97)" alt="">
          </span>
          <span class="xrow w-100 flex-wrap ml-15 text-white flex-grow-1 overflow-hidden" style="margin-top: 3px;">
            <span class="w-full text-sm text-left h-15 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" style="line-height:14px">
              叶文洁
            </span>
            <span class="w-full text-xs origin-top-left text-light-24 text-left font-bold overflow-hidden text-ellipsis break whitespace-nowrap" style="line-height:12px;transform: scale(0.9);">
              threebody@qq.com
            </span>
            <span class="w-full text-xs origin-top-left text-light-24 text-left mt-5 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" style="line-height:12px;">
              最高统帅
            </span>
          </span>
        </div>
        <div class="mb-5 mt-10 border-t border-light-4"></div>
        <div class="flex-grow-1 h-35 xrow items-center justify-between">
          <span class="h-25 w-25 xrow items-center justify-center iconfont icon-notice text-light-36 font-thin text-xl mr-10 last:mr-0 relative">
            <span class="absolute animate-ping inline-flex h-15 w-15 right-0 top-0 rounded-full bg-d-10 xcol items-center justify-center"></span>
            <span class="absolute inline-flex rounded-full bg-d-10" style="width:5px;height:5px;right:5px;top:5px"></span>
          </span>
          <span class="h-25 w-25 xrow items-center justify-center iconfont icon-business text-light-36 font-thin text-xl mr-10 last:mr-0 relative">
            <span class="absolute animate-ping inline-flex h-15 w-15 right-0 top-0 rounded-full bg-d-10 xcol items-center justify-center"></span>
            <span class="absolute inline-flex rounded-full bg-d-10" style="width:5px;height:5px;right:5px;top:5px"></span>
          </span>
          <!-- <span class="h-25 w-25 xrow items-center justify-center iconfont icon-mail text-light-36 font-thin text-xl mr-10 last:mr-0"></span> -->
          <span class="h-25 w-25 xrow items-center btn justify-center iconfont icon-menu text-white text-xs bg-s-10 rounded-sm mr-10 last:mr-0"></span>
        </div>
      </div>
    </div>
    <div class="xrow flex-grow-1 bg-p-1">
      <!-- 二级菜单部分 -->
      <div class="w-200 xcol">
        <span class="xcol bg-white flex-grow-1 -mt-55 z-10 rounded-tr-lg shadow-lg p-10">
          <div class="bg-p-1 h-45 rounded-sm"></div>
          <div class="xcol mt-20">
            <span v-for="(i) in 8" :key="i" 
              class="h-40 xrow items-center overflow-hidden mb-10 last:mb-0"
              :class="[i==4?'bg-p-7 rounded-lg px-5':'']">
              <span 
                class="h-20 w-20 iconfont icon-flow ml-5"
                :class="[i==4?'text-white text-lg':'text-gray-500 text-sm']" 
                style="line-height:18px">
              </span>
              <span 
                class="ml-10"
                :class="[i==4?'text-white font-bold text-sm':'text-gray-500 text-xs']">
                二级菜单-{{i}}
              </span>
            </span>
          </div>
        </span>
      </div>
      <!-- 页面路由视窗 -->
      <div class="bg-white flex-grow-1 xcol">
        <div class="flex-grow-1 xcol p-20 bg-dark-1">
          <div class="h-160 bg-white rounded-md overflow-hidden"></div>
          <div class="h-300 mt-5 -mx-5 xrow">
            <span class="w-1/4 p-5 flex">
              <span class="xcol items-center flex-grow-1 bg-white rounded-md overflow-hidden">
                <span class="w-4/6 h-5 bg-s-10 rounded-b-lg"></span>
                <span class="h-40 w-full xrow items-center justify-start text-sm font-bold px-15">测试面板001</span>
              </span>
            </span>
            <span class="w-1/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
            <span class="w-1/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
            <span class="w-1/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
          </div>
          <div class="flex-grow-1 -mx-5 xrow">
            <span class="w-1/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
            <span class="w-2/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
            <span class="w-1/4 p-5 flex">
              <span class="flex flex-grow-1 bg-white rounded-md overflow-hidden"></span>
            </span>
          </div>
        </div>
      </div>
      </div>
      
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props,context) {
    const router = useRouter();
    return {
      router,
    }
  },
})
</script>
