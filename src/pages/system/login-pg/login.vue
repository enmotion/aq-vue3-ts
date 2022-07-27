<template>
  <div class="flex flex-col flex-grow-1 bg-base select-none"
    :class="[screen.isWS?'justify-center items-center':'']">
    <div class="bg-white overflow-hidden border border-dark-4 "
      :class="[screen.isWS?'xrow mh-3/6 w-8/12 rounded-md shadow-xl':'xcol flex-grow-1']">
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
            <span class="mt-5 text-light-32 font-bold" style="font-size:12px">copyright : yanjun-mad-lab.com</span>
          </span>
        </div>
        <key-visual v-if="screen.isWS" class="w-full h-full"
          :class="[screen.isWS?'p-80':'p-40']">
        </key-visual>
      </div>
      <div class="xcol flex-grow-1" :class="[screen.isWS?'w-4/12':'']">
        <span class="xrow"
          :class="[screen.isWS?'px-50 py-30':'p-20 h-4/6']">
          <span class="h-20 mr-5 xcol" style="width:4px;padding-top:2px">
            <span class="flex-grow-1 bg-s-10 rounded"></span>
          </span>
          <span class="h-20 flex items-end font-bold text-dark-24" style="font-size:20px">系统登录</span>
          <span class="h-20 flex items-end ml-10 uppercase font-bold text-dark-18" style="font-size:14px;margin-top:3px">reg/login</span>
        </span>
        <span class="flex-grow-2 text-xs text-dark-24 flex items-center text-justify"
          :class="[screen.isWS?'px-50':'px-20']"
          style="line-height:20px !important;">
          欢迎登录WORKFLOW系统，请在下方输入您的账号和密码。
        </span>
        <span class="xcol"
          :class="[screen.isWS?'px-50 py-30':'p-20 h-4/6']">
          <el-input v-model="reqdata.username" class="text-xs mb-10 last:mb-0" type="text" placeholder="账号/用户名" clearable>
            <template v-slot:prepend class="px-5">账号</template>
          </el-input>
          <el-input v-model="reqdata.userpassword" class="text-xs mb-10 last:mb-0" type="password" placeholder="密码" clearable>
            <template v-slot:prepend>密码</template>
          </el-input>
          <el-input v-model="reqdata.code" class="text-xs mb-10 last:mb-0" placeholder="账号/用户名">
            <template v-slot:prepend>验证</template>
          </el-input>
        </span>
        <span class="flex-grow-1"></span>
        <span class="xcol py-20 bg-dark-1 border-t border-dark-2"
          :class="[screen.isWS?'px-50':'px-20']">
          <el-button type="primary" @click="login">登录</el-button>
          <span class="h-100 py-10 overflow-hidden flex-grow-1 xcol">
            <span class="text-center break-all xcol text-dark-22" style="line-height:18px">
              输入账号或用户名完成登录。
            </span>
            <span class="xrow justify-between items-end flex-grow-1">
              <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300">注册账户</span>
              <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300">忘记密码</span>
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
import { defineComponent, reactive, inject } from 'vue';

export default defineComponent({
  components:{ElInput, ElButton},
  setup() {
    const reqdata = reactive({
      username:'',
      userpassword:"",
      code:""
    })
    const screen = inject('screen') as {isWS:boolean,w:number,h:number};
    function login(){
      router.push({name:"bpmn-editor"});
    }
    return {
      login,
      reqdata,
      screen
    }
  },
})
</script>
