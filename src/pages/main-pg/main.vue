<template>
  <div class="xcol flex-grow-1" :class="[screen.isWS?'bg-texture':'bg-white']">
    <div class="xrow" :class="[screen.isWS?'h-140 bg-p-7':'h-50 bg-p-10']">
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
        <div class="h-100 xrow items-center">
          <aq-click-scroll-view class="h-40">
            <div class="h-40 w-auto xrow mt-5 items-center px-20">
              <span v-for="(i) in 16" 
                :key="i" 
                class="py-5 xcol items-center flex-shrink-0 text-sm font-bold rounded-sm mr-30 last:mr-0 cursor-pointer transition-all duration-200"
                style="margin-top: 4px;"
                @click="menuindex=i">
                <span :class="[i==menuindex?'border-s-10 text-white':'bg-dark-1 border-light-1 text-light-24 hover:text-white hover:border-w-10']">
                  MENU-{{i}}
                </span>
                <span class="w-0 rounded-md transition-all duration-300 bg-s-10 mt-5"
                  style="height:3px"
                  :class="[i==menuindex?'w-full':'']">
                </span>
              </span>
            </div>
          </aq-click-scroll-view>
        </div>
        <!-- tab部分 -->
        <div class="h-40 mt-10 xrow items-end">
          <div class="h-40 w-auto flex-grow-1 xrow bg-dark-4 items-end border-t border-light-4 backdrop-blur-sm">
            <aq-click-scroll-view class="h-50 xrow">
              <template v-slot:leftArrow>
                <span class="iconfont icon-arrowL font-bold btn text-xs text-light-12 mt-10 hover:text-s-10 duration-300 transition-all"></span>
              </template>
              <span class="h-50 xrow items-end">
                <span v-for="(i) in 120" 
                  :key="i" 
                  class="px-10 xrow flex-shrink-0 text-xs font-bold rounded-t-md mr-5 last:mr-0 xcol items-center justify-center cursor-pointer transition-all duration-300"
                  :class="[i==tabindex?'h-45 bg-gray-100 text-gray-600':'h-40 text-light-18 hover:h-45 hover:bg-p-10 hover:text-white']"
                  @click="tabindex=i">
                    <span class="text-xs">submenu-{{i}}</span>
                    <span v-show="tabindex==i" class="flex rounded-full iconfont icon-x items-center justify-center text-dark-30 font-bold flex-shrink-0 flex-grow-0 ml-5 hover:bg-dark-6 duration-300 transition-all" 
                      style="font-size:12px;width:18px;height:18px;"
                      @click.capture.stop="tabindex+=1">
                    </span>
                </span>
              </span>
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
          <aq-transition name="growy">
            <div v-if="openSliderSystemMenu" key="aaaa" class="h-auto w-full bg-p-10 overflow-hidden">
              <div class="bg-dark-10 h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">仪表面板</div>
              <div class="bg-dark-10 h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">重置密码</div>
              <div class="bg-dark-10 h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">切换租户</div>
              <div class="bg-dark-10 h-40 px-20 xrow items-center text-white border-b border-light-4 last:border-none">退出登录</div>
            </div>
          </aq-transition>
          <!-- 信息面板 -->
          <div class="border-y border-light-6 h-50 xrow justify-between items-center flex-shrink-0 backdrop-blur-sm">
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

          </div>
        </div>
      </wg-slider-pop>
    </div>
    <div class="xrow flex-grow-1 bg-p-1">
      <!-- 二级菜单部分 -->
      <div v-if="screen.isWS" class="w-200 xcol flex-shrink-0">
        <span class="xcol bg-white flex-grow-1 -mt-55 z-10 rounded-tr-lg shadow-lg p-10">
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
      <aq-scroll-view class="bg-gray-100 flex-grow-1 xcol xcol" :scroll-bar-props="{viewClass:screen.isWS?'p-20':'p-10'}">
        <div class="xrow flex-wrap -m-5">
          <wg-card title="公司介绍" class="p-5" style-type="A" :class="[screen.isWS?'w-1/4':'w-full']" use-menu>
            放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
          </wg-card>
          <wg-card title="企业咨询" mark-class="bg-d-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">“British newspapers are much smaller than they used to be and their readers are often 
in a hurry ,so newspapermen write as few words as possible .They tell their readers at 
once what happened ,where ,when and how it happened and what was the result : how many 
people were killed ,what change was done and so on .Readers want the fact set out 
as fully and accurately as possible .Readers are also interested in the people who have 
seen the accident. So a newspaperman always likes to get some information from 
someone who was there, which can be given in the person’s own words .
        
          </wg-card>
          <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
          <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
          <wg-card title="公司介绍" class="p-5 flex-grow-1" :class="[screen.isWS?'w-1/4':'w-full']" use-menu>
            <p class="text-xs rounded break-all xcol">
              放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
            </p>
          </wg-card>
          <wg-card title="公司介绍" class="p-5 flex-grow-1" :class="[screen.isWS?'w-1/2':'w-full']" use-menu>
            <p class="text-xs rounded break-all xcol">
              放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
            </p>
          </wg-card>
          <wg-card title="企业咨询" mark-class="bg-d-10" class="p-5 h-200" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
          <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5 h-600" :class="[screen.isWS?'w-1/2':'w-full']">afdsafadfa</wg-card>
          <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5 h-600" :class="[screen.isWS?'w-1/2':'w-full']">afdsafadfa</wg-card>
        </div>
      </aq-scroll-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref , inject } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import AqScrollView from '@src/parts/aq-componets/aq-scroll-view/aq-scroll-view.vue';


export default defineComponent({
    setup(props, context) {
        const screen = inject("screen") as {
            isWS: boolean;
            w: number;
            h: number;
        };
        const router = useRouter();
        let openSliderSystemMenu = ref(false);
        let menuindex = ref(0);
        let tabindex = ref(0);
        return {
            menuindex,
            tabindex,
            screen,
            router,
            openSliderSystemMenu,
        };
    },
    components: { AqScrollView }
})
</script>
