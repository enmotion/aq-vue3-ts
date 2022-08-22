<template>
  <div class="xcol flex-grow-1" :class="[screen.isWS?'bg-texture':'bg-white']">
    <div class="xrow" :class="[screen.isWS?'h-130 bg-p-7':'h-50 bg-p-10']">
      <!-- logo部分 -->
      <div class="xcol" :class="[screen.isWS?'w-200':'w-auto items-start flex-grow-1']">
        <div class="h-90 items-center xrow justify-center px-10">
          <span class="iconfont icon-unicom-logo text-white xrow items-center" :class="[screen.isWS?'text-4xl':'text-2xl flex-grow-1']"></span>
          <span v-if="screen.isWS" class="ml-10 xrow items-start justify-center" style="margin-top:2px">
            <span class="text-lg text-white font-bold" style="line-height:14px">WEIYE</span>
            <span class="h-15 text-xs text-light-32 uppercase font-bold origin-bottom-left ml-5" style="line-height:12px;padding-top:4px">0.0.1</span>
          </span>
        </div>
      </div>
      <!-- 导航与标签 -->
      <div v-if="screen.isWS" class="xcol flex-grow-1">
        <!-- 一级导航 -->
        <div class="h-100 xrow items-center">
          <aq-click-scroll-view class="h-40">
            <main-menu 
              :value="currentRouteValue" 
              :options="store.getters['menu/getSysMenu']" 
              @update:value="getMenuOption">
            </main-menu>
          </aq-click-scroll-view>
        </div>
        <!-- tab部分 -->
        <div class="h-45 xrow items-end">
          <div class="h-35 w-auto flex-grow-1 xrow bg-dark-4 items-end border-t border-light-4 backdrop-blur-sm">
            <aq-click-scroll-view class="h-45 xrow">
              <template v-slot:leftArrow>
                <span class="iconfont icon-arrowL font-bold btn text-xs text-light-12 mt-10 hover:text-s-10 duration-300 transition-all"></span>
              </template>
              <tag-menu  
                :value="currentTagValue" 
                :options="[
                  {label:'系统设置',value:'home'},
                  {label:'业务数据',value:'test01'},
                  {label:'人员管理',value:'test02'},
                  {label:'业务流程',value:'test03'},
                  {label:'返回登录',value:'login'},
                ]" 
                @update:value="getTagOption">
              </tag-menu>
              <template v-slot:rightArrow>
                <span class="iconfont icon-arrowR font-bold btn text-xs text-light-12 mt-10 hover:text-s-10 duration-300 transition-all"></span>
              </template>
            </aq-click-scroll-view>
          </div>
        </div>
      </div>
      <!-- 个人菜单 -->
      <div v-if="screen.isWS" class="bg-dark-2 border-l border-light-6 xcol px-20 py-10 backdrop-blur-sm">
        <wg-user-info class="flex-grow-1">
          <wg-pin-icon icon="icon-notice" :show-pin="true"></wg-pin-icon>
          <wg-pin-icon icon="icon-business" :show-pin="true"></wg-pin-icon>
          <span class="h-25 w-25 xrow items-center btn justify-center iconfont icon-menu font-bold text-white text-sm bg-s-10 rounded-sm mr-10 last:mr-0"></span>
        </wg-user-info>
      </div>
      <!-- 窄屏菜单展开触发 -->
      <wg-slider-pop v-show="!screen.isWS" size="70%">
        <template v-slot:switchButton>
          <span class="h-50 w-50 flex items-center justify-center iconfont icon-menu font-bold text-light-24 text-lg cursor-pointer hover:text-white transition-all duration-300"></span>
        </template>
        <div class="xcol h-full bg-texture" style="background-size:500%">
          <!-- 个面面板 -->
          <div class="xrow items-center overflow-hidden p-15 h-auto flex-shrink-0">
            <span class="iconfont icon-unicom-logo text-white xcol items-center justify-center text-4xl backdrop-blur-sm bg-dark-4 rounded-md w-60 h-60 flex-shrink-0"></span>
            <span class="flex flex-grow-1"></span>
            <wg-user-info :size="40" class="h-60 px-10 w-150 flex-grow-0" :glow-avatar="true"></wg-user-info>
            <span class="w-20 h-20 text-white bg-s-10 rounded-sm btn flex-shrink-0 iconfont icon-menu items-center justify-center flex text-xs font-bold" 
              @click="openSliderSystemMenu=!openSliderSystemMenu">
            </span>
          </div>
          <aq-transition name="growy" :duration="{enter:200,leave:200}">
            <div v-if="openSliderSystemMenu" key="aaaa" class="h-auto w-full overflow-hidden backdrop-blur-md border-t border-dark-2 bg-dark-8">
              <div class="h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">仪表面板</div>
              <div class="h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">重置密码</div>
              <div class="h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">切换租户</div>
              <div class="h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">退出登录</div>
            </div>
          </aq-transition>
          <!-- 信息面板 -->
          <div class="border-y border-light-6 h-50 xrow justify-between items-center flex-shrink-0">
            <span class="xrow px-20 items-center h-full flex-grow-1 border-r border-light-4">
              <wg-pin-icon icon="icon-notice" :show-pin="true"></wg-pin-icon>
              <span class="text-light-32 font-bold">系统消息</span>
            </span>
            <span class="xrow px-20 items-center h-full flex-grow-1 border-r border-light-4 last:border-none">
              <wg-pin-icon icon="icon-business" :show-pin="true"></wg-pin-icon>
              <span class="text-light-32 font-bold">待办事务</span>
            </span>
          </div>
          <!-- 系统菜单面板 -->
          <div class="xcol flex-grow-1 bg-white">
            <aq-Scroll-view>
              <aq-tree-menu :options="store.getters['menu/getSysMenu']"></aq-tree-menu>
            </aq-Scroll-view>
          </div>
        </div>
      </wg-slider-pop>
    </div>
    <div class="xrow flex-grow-1 bg-p-1">
      <!-- 二级菜单部分 -->
      <div v-if="screen.isWS" class="w-200 xcol flex-shrink-0">
        <span class="xcol bg-white flex-grow-1 -mt-40 z-10 rounded-tr-lg shadow-lg p-10">
          <div class="bg-p-1 h-45 rounded-sm"></div>
          <div class="xcol mt-20">
            <span v-for="(i) in 8" :key="i" 
              class="h-40 xrow items-center overflow-hidden mb-10 last:mb-0"
              :class="[i==4?'bg-p-10 rounded-lg px-5':'']">
              <span 
                class="h-20 w-20 iconfont icon-flow ml-5"
                :class="[i==4?'text-white text-lg':'text-gray-500 text-sm']" 
                style="line-height:18px">
              </span>
              <span 
                class="ml-10 font-bold"
                :class="[i==4?'text-white text-xs':'text-gray-500 text-xs']">
                DISCOVERY-{{i}}
              </span>
            </span>
          </div>
        </span>
      </div>
      <!-- 页面路由视窗 -->
      <div class="xcol flex-grow-1 bg-gray-50">
        <!-- <router-view /> -->
        <router-view key="inner_route" v-slot="{ Component }">
          <aq-transition name="falling" mode="out-in" class="flex-grow-1 flex-shrink-1 overflow-hidden" :duration="{enter:300,leave:200}" :timing="{enter:'ease-out',leave:'ease-in'}">
            <keep-alive :include="[]">
              <component :is="Component" :key="route.name" class="w-full h-full" />
            </keep-alive>
          </aq-transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { MenuOption } from '@typ/public/mainPage';
import { defineComponent, ref, inject } from 'vue';
import { useRouter, useRoute } from "vue-router";
import PGS from '@src/pages/index';
import type { RouteRecordRaw } from "vue-router";
import { useStore } from "vuex";
import MainMenu from "./widgets/main-menu/main-menu.vue";
import TagMenu from "./widgets/tag-menu/tag-menu.vue";
import AqScrollView from "@src/parts/aq-componets/aq-scroll-view/aq-scroll-view.vue";

export default defineComponent({
  components:{ MainMenu, TagMenu, AqScrollView },
  setup(props, context) {
    const store = useStore();
    const currentRouteValue = ref('002');
    const currentTagValue = ref('001');
    const screen = inject("screen") as {
      isWS: boolean;
      w: number;
      h: number;
    };
    const router = useRouter();
    const route = useRoute();
    // router.addRoute('main',R.mergeAll([PGS.Test02Pg,{name:'mod',path:'/mod'}]) as RouteRecordRaw);
    // router.addRoute('main',PGS.Test02Pg);
    // router.addRoute('main',PGS.Test03Pg);
    let openSliderSystemMenu = ref(false);
    let menuindex = ref(0);
    let tabindex = ref(0);
    function getMenuOption(value:string){
      currentRouteValue.value = value;
      router.push({name:value,params:{id:value}});
    }
    function getTagOption(value:string){
      currentTagValue.value = value;
      // router.replace({name:value,params:{id:value}});
    }
    return {
      store,
      currentRouteValue,
      currentTagValue,
      menuindex,
      tabindex,
      screen,
      route,
      router,
      openSliderSystemMenu,
      getMenuOption,
      getTagOption
    };
  },
})
</script>
