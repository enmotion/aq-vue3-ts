<template>
  <div class="xcol flex-grow-1 bg-texture">
    <div class="h-140 bg-p-2 backdrop-blur-m xrow">
      <div class="w-200 xcol">
        <!-- logo部分 -->
        <div class="h-100 items-center xrow justify-center px-10 backdrop-blur-md">
          <span class="iconfont icon-unicom-logo text-3xl text-white"></span>
          <span class="ml-10 xcol items-start">
            <span class="h-20 text-lg text-white font-bold">纬业流程</span>
            <span class="h-15 text-xs text-light-32 uppercase font-bold scale-75 origin-bottom-left">version:0.0.1</span>
          </span>
        </div>
        <div class="h-40">
        </div>
      </div>
      <!-- 导航与标签 -->
      <div class="xcol flex-grow-1">
        <div class="h-100 xrow items-center px-20 backdrop-blur-md">
          <span v-for="(i) in 8" 
            :key="i" 
            class="py-5 text-sm font-bold rounded-sm mr-30 border-b-2 border-dark-1 last:mr-0 cursor-pointer hover:text-white hover:border-light-12 transition-all duration-500"
            :class="[i==3?'border-s-10 text-white':'bg-dark-1 text-light-32']">
              首级菜单-{{i}}
          </span>
        </div>
        <!-- tab部分 -->
        <div class="h-40 xrow items-end bg-dark-12 border-t border-light-6 -mx-10 px-10 rounded-t-md backdrop-blur-lg">
          <span v-for="(i) in 10" 
            :key="i" 
            class="px-15 text-xs font-bold rounded-t-md mr-5 last:mr-0 xcol items-center justify-center"
            :class="[i==2?'h-45 bg-gradient-to-t from-gray-200 to-white text-gray-600':'text-light-18 h-40 cursor-pointer']">
              标签菜单-{{i}}
          </span>
        </div>
      </div>
      <!-- 个人菜单 -->
      <div class="bg-dark-6 border-l border-light-6 xcol px-20 py-10 backdrop-blur-lg">
        <div class="h-40 flex-grow-1 xrow items-center">
          <span class="h-40 w-40 rounded-full flex-shrink-0 flex-grow-0 bg-white  overflow-hidden shadow-lg shadow-white">
            <img src="http://i1.go2yd.com/image.php?url=0W8wDjc3Sh" class="rounded-full" style="transform:scale(0.97)" alt="">
          </span>
          <span class="xrow w-100 flex-wrap ml-5 text-white p-5 flex-grow-1 overflow-hidden" style="margin-top: -2px;">
            <span class="w-full text-sm text-left h-15 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" style="line-height:14px">
              ENMOTION
            </span>
            <span class="w-full text-xs origin-top-left text-light-24 text-left h-10 font-bold overflow-hidden text-ellipsis break whitespace-nowrap" style="line-height:12px;transform: scale(0.9);">
              enmotion@qq.com
            </span>
          </span>
        </div>
        <div class="mb-5 mt-10 border-t border-light-4"></div>
        <div class="flex-grow-1 h-35 xrow items-center justify-between">
          <span class="h-25 w-25 xcol items-center justify-center iconfont icon-notice text-light-36 font-thin text-xl mr-10 last:mr-0"></span>
          <span class="h-25 w-25 xcol items-center justify-center iconfont icon-business text-light-36 font-thin text-xl mr-10 last:mr-0"></span>
          <span class="h-25 w-25 xcol items-center justify-center iconfont icon-mail text-light-36 font-thin text-xl mr-10 last:mr-0"></span>
          <span class="h-25 w-25 xcol items-center justify-center iconfont icon-arrow-D-solid text-white text-xs bg-light-6 rounded-sm mr-10 last:mr-0"></span>
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
              class="h-40 bg-white xrow items-center overflow-hidden mb-10 last:mb-0"
              :class="[i==4?'bg-s-10 rounded-lg':'']">
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
      <div class="flex-grow-1 xcol p-20 bg-gray-100">
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
    <!-- <div class="xcol w-150 border-r border-dark-4">
      <div @click="router.push({name:'transition'})" class="h-50 btn bg-p-10 xrow px-10 text-sm font-bold text-white items-center">纬业流程</div>
    </div>
    <div class="bg-dark-2 flex-grow-1 xcol">
      <div class="h-50 bg-white xrow px-10 text-sm border-b border-dark-4 items-center text-gray-600 text-10">
        一级导航与系统菜单
      </div>
      <div class="h-35 bg-white xrow items-center px-10 text-gray-500">tab标签栏</div>
      <div class="xcol flex-grow-1">
        <router-view></router-view>
      </div>
    </div> -->
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
