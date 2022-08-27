<template>
  <div class="xcol">
    <div class="xrow flex-wrap -m-5">
      <wg-card title="HOME" class="p-5" style-type="A" :class="[screen.isWS?'w-1/4':'w-full']" use-menu>
      放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
      </wg-card>
      <wg-card title="PROFILE" 
        mark-class="bg-d-10" 
        style-type="A" 
        class="p-5" 
        :class="[screen.isWS?'w-1/4':'w-full']"
        :useMenu="true"
        v-slot="slotProps">
        <aq-scroll-view class="flex-col flex-grow-1"  
          :scroll-bar-props="{viewClass:'flex-grow-1 flex-col'}" 
          :disabled="!slotProps.isFullScreen">
          <div class="h-auto xcol flex-grow-1 bg-gray-100">
            <div class="h-50 bg-s-2 xrow px-20 text-lg font-bold text-white items-center">aaa</div>
            <div v-show="slotProps.isFullScreen" class="h-1200 bg-gray-50 p-20">dfaklfjal</div>
          </div>
        </aq-scroll-view>
      </wg-card>
      <wg-card title="TODO" mark-class="bg-w-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
      <wg-card title="DONE" mark-class="bg-w-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
      <wg-card title="INTRODUCTION" class="p-5 flex-grow-1" :class="[screen.isWS?'w-1/4':'w-full']" use-menu>
        <p class="text-xs rounded break-all xcol">
          放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
        </p>
      </wg-card>
      <wg-card title="PRODUCTS" class="p-5 flex-grow-1" :class="[screen.isWS?'w-1/2':'w-full']" use-menu>
        <p class="text-xs rounded break-all xcol">
          放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
        </p>
      </wg-card>
      <wg-card title="企业咨询" mark-class="bg-d-10" class="p-5 h-200" :class="[screen.isWS?'w-1/4':'w-full']">afdsafadfa</wg-card>
      <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5 h-600" :class="[screen.isWS?'w-1/2':'w-full']">afdsafadfa</wg-card>
      <wg-card title="待办事项" mark-class="bg-w-10" style-type="A" class="p-5 h-600" :class="[screen.isWS?'w-1/2':'w-full']">afdsafadfa</wg-card>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import type { Screen } from '@src/store/types';

export default defineComponent({
  name:'dash-board',
  setup(props,context) {
    const screen = inject('screen') as Screen;
    return {
      screen,
    }
  },
})
</script>
