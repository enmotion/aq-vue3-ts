<template>
  <div class="flex flex-col flex-grow-1 bg-base select-none"
    :class="[screen.isWS?'justify-center items-center':'']">
    <div class="bg-white overflow-hidden border border-dark-4 "
      :class="[screen.isWS?'xrow h-3/6 w-8/12 rounded-md shadow-xl':'xcol flex-grow-1']">
      <div class="relative text-white items-start flex bg-blue transition-all duration-700"
        :class="[screen.isWS?'w-8/12 ':' xcol flex-grow-1 h-2/6']">
        <div class="absolute z-10 h-full w-full xcol p-20 transition-all duration-700"
          :class="[screen.isWS?'':'justify-center items-cente']"
          style="font-size:18px">
          <span class="flex items-start font-bold uppercase"
            :class="[screen.isWS?'items-start':'h-40 items-center justify-center']"
            :style="{fontSize:screen.isWS?'18px':'28px'}">
            WorkFlow-3.0
          </span>
          <div :class="[screen.isWS?'flex-grow-1':'h-15']"></div>
          <span class="xcol uppercase" :class="[screen.isWS?'items-start':'items-center']">
            <span class="text-white font-bold" :style="{fontSize:screen.isWS?'16px':'12px'}">version : 1.0</span>
            <span class="text-light-24 font-normal mt-5" style="font-size:12px">copyright : yanjun-mad-lab.com</span>
          </span>
        </div>
        <key-visual v-if="screen.isWS" class="w-full h-full"
          :class="[screen.isWS?'p-80':'p-40']">
        </key-visual>
      </div>
      <div class="xcol flex-grow-1">
        <span class="xrow"
          :class="[screen.isWS?'px-50 py-30':'p-20 h-4/6']">
          <span class="h-20 flex items-end font-bold text-dark-24" style="font-size:16px">系统登录</span>
          <span class="h-20 flex items-end ml-5 uppercase font-bold text-dark-18" style="margin-top:3px">reg/login</span>
        </span>
        <span class="flex-grow-2"></span>
        <span class="xcol"
          :class="[screen.isWS?'px-50 py-30':'p-20 h-4/6']">
          <el-input class="text-xs mb-5 last:mb-0" placeholder="账号/用户名"></el-input>
          <el-input class="text-xs mb-5 last:mb-0" placeholder="密码"></el-input>
          <el-input class="text-xs mb-5 last:mb-0" placeholder="账号/用户名"></el-input>
        </span>
        <span class="flex-grow-1"></span>
        <span class="xcol px-50 py-20 bg-dark-1">
          <el-button type="primary">登录</el-button>
          <span class="h-100 py-10 overflow-hidden">
            <span class="text-center break-all xcol text-dark-24" style="line-height:18px">
              输入账号或用户名完成登录。
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@src/router";
import { ElInput, ElButton } from "element-plus";
import { defineComponent, inject } from 'vue';

export default defineComponent({
  components:{ElInput, ElButton},
  setup() {
    const screen = inject('screen') as {isWS:boolean,w:number,h:number};
    function jumpTo(){
      router.push({name:"bpmn-editor"});
    }
    return {
      jumpTo,
      screen
    }
  },
})
</script>
