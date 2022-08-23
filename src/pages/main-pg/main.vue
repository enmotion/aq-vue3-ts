<template>
  <div class="xcol flex-grow-1" :class="[screen.isWS?'bg-texture':'bg-white']">
    <div class="xrow" :class="[screen.isWS?'h-130 bg-gradient-to-r from-p-9 via-d-3 to-p-1':'h-50 bg-p-10']">
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
              :value="store.getters['menu/getCurrent'].firstLevelValue" 
              :options="store.getters['menu/getAppMenu']" 
              @update:value="setMenuFirstLevel">
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
                :value="store.getters['menu/getCurrent'].tagRouteName" 
                :options="store.getters['menu/getTagMenu']" 
                @update:value="routeForward">
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
          <el-popover
            placement="bottom-start"
            :width="120"
            trigger="hover">
            <div class="xcol">
              <sys-menu-botton v-for="(item,index) in store.getters['menu/getSysMenu']" 
                :key="index" 
                :label="item.label"
                :icon="item.icon"
                text-color="text-gray-500 text-xs"
                class="border-dark-4 border-b cursor-pointer hover:bg-gray-100 transition-all duration-300 last:border-none"
                @click="routeForward(item)">
              </sys-menu-botton>
            </div>
            <template #reference>
              <span class="h-25 w-25 xrow items-center btn justify-center iconfont icon-menu font-bold text-white text-sm bg-s-10 rounded-sm mr-10 last:mr-0"></span>
            </template>
          </el-popover>
          
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
              <sys-menu-botton v-for="(item,index) in store.getters['menu/getSysMenu']" 
                :key="index" 
                :label="item.label"
                :icon="item.icon"
                class="border-b border-light-4 bg-d-1 last:border-none cursor-pointer hover:bg-d-3 transition-all duration-300"
                @click="routeForward(item)">
              </sys-menu-botton>
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
          <div class="xcol flex-grow-1 bg-gray-100">
            <aq-Scroll-view class="flex-grow-1">
              <aq-tree-menu :options="store.getters['menu/getAppMenu']" class="bg-white">
              </aq-tree-menu>
            </aq-Scroll-view>
          </div>
        </div>
      </wg-slider-pop>
    </div>
    <div class="xrow flex-grow-1 bg-p-1">
      <!-- 二级菜单部分 -->
      <div v-if="screen.isWS" class="w-200 xcol flex-shrink-0">
        <span class="xcol bg-white flex-grow-1 -mt-40 z-10 rounded-tr-lg shadow-lg">
          <div class="xcol h-auto p-10">
            <span class="bg-p-2 h-50 rounded-md"></span>
          </div>
          <aq-scroll-view class="xcol w-full flex-grow-1">
            <aq-transition name="falling"
              :duration="{enter:300,leave:200}" 
              :absolute-cell="true" 
              class="w-full">
              <aq-tree-menu
                :key="sideMenuRenderKey"
                :options="SideMenuOptions" 
                :is-serial-expanded="true" 
                class="border-y w-full border-dark-4"
                @update:value="routeForward">
              </aq-tree-menu>
            </aq-transition>
          </aq-scroll-view>
        </span>
      </div>
      <!-- 页面路由视窗 -->
      <div class="xcol flex-grow-1 bg-gray-100">
        <aq-scroll-view class="xcol flex-grow-1 flex-shrink-0" :scroll-bar-props="{viewClass:'p-20'}" :disabled="false">
          <router-view key="inner_route" v-slot="{ Component }">
            <aq-transition 
              name="falling" 
              mode="out-in" 
              class="flex-grow-1 flex-shrink-0 overflow-hidden" 
              :duration="{enter:300,leave:300}" 
              :timing="{enter:'ease-out',leave:'ease-in'}">
              <keep-alive :include="[]">
                <component :is="Component" :key="route.name" class="w-full h-full" />
              </keep-alive>
            </aq-transition>
          </router-view>
        </aq-scroll-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { defineComponent, ref, inject, computed } from 'vue';
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElPopover } from 'element-plus';
import MainMenu from "./widgets/main-menu/main-menu.vue";
import TagMenu from "./widgets/tag-menu/tag-menu.vue";
import SysMenuBotton from "./widgets/sys-menu-button/sys-menu-button.vue";

export default defineComponent({
  components:{ MainMenu, TagMenu, SysMenuBotton, ElPopover },
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    let openSliderSystemMenu = ref(false);
    const sideMenuRenderKey = ref(0);
    const screen = inject("screen") as {
      isWS: boolean;
      w: number;
      h: number;
    };
    const SideMenuOptions = computed(()=>{
      let option:any = R.find(R.propEq('value',store.getters['menu/getCurrent'].firstLevelValue))(store.getters['menu/getAppMenu']);
      return option.children ? option.children : [];
    })

    // router.addRoute('main',R.mergeAll([PGS.Test02Pg,{name:'mod',path:'/mod'}]) as RouteRecordRaw);
    // router.addRoute('main',PGS.Test02Pg);
    // router.addRoute('main',PGS.Test03Pg);
    
    function setMenuFirstLevel(value:string){
      if(store.getters['menu/getCurrent'].firstLevelValue != value){
        store.commit('menu/setCurrent',{firstLevelValue:value});
        sideMenuRenderKey.value++;
      }
    }
    function routeForward(option:any){
      console.log(option.value);
      router.push({path:'/'+option.value,query:{id:'12'}});
    }
    return {
      store,
      screen,
      route,
      router,
      openSliderSystemMenu,
      SideMenuOptions,
      sideMenuRenderKey,
      setMenuFirstLevel,
      routeForward,
    };
  },
})
</script>
