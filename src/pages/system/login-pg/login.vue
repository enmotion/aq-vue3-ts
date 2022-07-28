<template>
  <div class="flex flex-col flex-grow-1 select-none"
    :class="[screen.isWS?'justify-center items-center bg-base':' bg-p-2']">
    <!-- login board -->
    <div class="overflow-hidden border border-dark-4 "
      :class="[screen.isWS?'xrow w-8/12 rounded-md shadow-xl':'xcol flex-grow-1']" style="min-height:540px">
      <!-- kv -->
      <div class="relative text-white items-start flex bg-blue transition-all duration-700"
        :class="[screen.isWS?'w-7/12 ':' xcol flex-grow-1 h-2/6']">
        <div class="absolute z-10 h-full w-full xcol transition-all duration-700"
          :class="[screen.isWS?'p-40':'p-20 justify-center items-cente']"
          style="font-size:18px">
          <span class="flex items-start font-bold iconfont icon-logo-vk"
            :class="[screen.isWS?'items-start xrow':'xcol h-40 items-center justify-center']"
            :style="{fontSize:screen.isWS?'40px':'80px'}">
            <span :class="[screen.isWS?'ml-10':'mt-40']" :style="{fontSize:screen.isWS?'16px':'20px'}">
              {{screen.isWS?'立规矩 创纬业':'纬业流程'}}
            </span>
          </span>
          <div :class="[screen.isWS?'flex-grow-1':'h-15']"></div>
          <span v-show="screen.isWS" class="xcol uppercase" :class="[screen.isWS?'items-start':'items-center']">
            <span class="text-white font-bold" :style="{fontSize:screen.isWS?'16px':'12px'}">version : 1.0</span>
            <span class="mt-5 text-light-32 font-bold" style="font-size:12px">copyright : yanjun-mad-lab.com</span>
          </span>
        </div>
        <key-visual v-if="screen.isWS" class="w-full h-full backdrop-blur-sm"
          :class="[screen.isWS?'p-80':'p-40']">
        </key-visual>
      </div>
      <!-- form -->
      <div class="xcol flex-grow-1 bg-white" :class="[screen.isWS?'w-5/12':'mx-10 -mt-50 mb-10 z-40 rounded-lg overflow-hidden']">
        <!-- logo -->
        <span class="xcol flex-grow-5 font-bold bg-white"
          :class="[screen.isWS?'px-50 pt-30':'p-20 h-4/6']">
          <span v-show="screen.isWS" style="font-size:40px" class="text-left mb-20 flex-grow-1 xrow items-center text-p-10 iconfont icon-logo-vk">
            <span class="ml-10 text-dark-24" style="font-size:20px">纬业流程</span>
          </span>
          <span class="xrow items-center" :class="[screen.isWS?'':'my-20']">
            <span class="h-15 mr-5 xcol" style="width:4px;margin-top:-1px">
              <span class="flex-grow-1 bg-s-10 rounded"></span>
            </span>
            <span class="h-15 flex items-end font-bold text-dark-24" style="font-size:16px">系统登录</span>
            <span class="h-15 flex items-end ml-5 uppercase font-bold text-dark-18" style="font-size:14px;margin-top:4px">reg/login</span>
          </span>
          <span class="xcol flex-grow-1 justify-center">
            <el-input v-model="reqdata.username" class="text-xs mb-10 last:mb-0" type="text" placeholder="用户名/邮箱..." clearable>
              <template v-slot:prepend class="px-5">账号</template>
            </el-input>
            <el-input v-model="reqdata.userpassword" class="text-xs mb-10 last:mb-0" type="password" placeholder="清输入密码..." clearable show-password>
              <template v-slot:prepend>密码</template>
            </el-input>
            <el-input v-model="reqdata.code" class="text-xs mb-10 last:mb-0" placeholder="请输入验证码..." clearable>
              <template v-slot:prepend>验证</template>
              <template v-slot:append>
                <el-button type="success">发送验证码</el-button>
              </template>
            </el-input>
          </span>
        </span>
        <!-- buttons -->
        <span class="h-auto flex-shrink-0 xcol pb-30 pt-20 bg-dark-1 border-t border-dark-2"
          :class="[screen.isWS?'px-50':'px-20']">
          <el-button type="primary" @click="push({name:'bpmn-editor'})">登录</el-button>
          <span class="overflow-hidden flex-grow-1 xcol">
            <span class="xrow justify-between items-center flex-grow-1 my-10">
              <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300"
                @click="push({path:'erro404s'})">
                注册账户
              </span>
              <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300">
                忘记密码
              </span>
            </span>
            <span class="text-center break-all xcol text-dark-12 font-medium uppercase" style="line-height:18px">
              POWERED BY yanjun-lab<br/>
              2022.08
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouteLocationRaw } from "vue-router";
import router from "@src/router";
import { ElInput, ElButton } from "element-plus";
import { defineComponent, reactive, inject, getCurrentInstance, ComponentPublicInstance } from 'vue';

export default defineComponent({
  components:{ElInput, ElButton},
  setup(props,context) {
    const reqdata = reactive({
      username:'',
      userpassword:"",
      code:""
    })
    const screen = inject('screen') as {isWS:boolean,w:number,h:number};
    const push = ( getCurrentInstance() as { proxy:any } ).proxy?.$push;
    // function routerJumpTo(routerData:RouteLocationRaw){
    //   router.push(routerData);
    // }
    return {
      // routerJumpTo,
      push,
      reqdata,
      screen
    }
  },
})
</script>