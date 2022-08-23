<template>
  <aq-scroll-view class="bg-gray-100 flex-grow-1 xcol" :scroll-bar-props="{viewClass:screen.isWS?'p-20':'p-10'}">
    <div class="xrow flex-wrap -m-5">
      <wg-card title="HOME" class="p-5" style-type="A" :class="[screen.isWS?'w-1/4':'w-full']" use-menu>
        放假快乐大数据分类卡收费，范德萨肌肤撒地方结束啦方式打开了封疆大吏撒放大开始了。结局放假的撒了风刀霜剑快乐发圣诞节快乐发大数据分类考试的，放假的卡萨飞机拉屎发大水false发大水坑啦烦。
      </wg-card>
      <wg-card title="PROFILE" mark-class="bg-d-10" style-type="A" class="p-5" :class="[screen.isWS?'w-1/4':'w-full']">“British newspapers are much smaller than they used to be and their readers are often 
        in a hurry ,so newspapermen write as few words as possible .They tell their readers at 
        once what happened ,where ,when and how it happened and what was the result : how many 
        people were killed ,what change was done and so on .Readers want the fact set out 
        as fully and accurately as possible .Readers are also interested in the people who have 
        seen the accident. So a newspaperman always likes to get some information from 
        someone who was there, which can be given in the person’s own words .
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
  </aq-scroll-view>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import type { Screen } from '@src/store/types';

export default defineComponent({
  name:'org-list',
  setup(props,context) {
    const screen = inject('screen') as Screen;
    return {
      screen,
    }
  },
})
</script>
