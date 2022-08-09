<template>
  <div class="flex flex-col flex-grow-1 select-none"
    :class="[screen.isWS?'justify-center items-center bg-base':' bg-white']">
    <!-- login board -->
    <div class="overflow-hidden bg-p-2"
      :class="[screen.isWS?'xrow w-8/12 rounded-md shadow-xl':'xcol flex-grow-1']" style="min-height:540px">
      <!-- kv -->
      <div class="relative text-white items-start flex bg-blue transition-all duration-700"
        :class="[screen.isWS?'w-7/12 ':' xcol flex-grow-1 h-2/6']">
        <div class="absolute z-10 h-full w-full xcol transition-all duration-700"
          :class="[screen.isWS?'p-30':'p-20 justify-center items-cente']"
          style="font-size:18px">
          <span class="flex items-start font-bold iconfont icon-logo-vk"
            :class="[screen.isWS?'items-start xrow':'xcol h-40 items-center justify-center']"
            :style="{fontSize:screen.isWS?'40px':'80px'}">
            <span 
              :class="[screen.isWS?'ml-10':'mt-40']" 
              :style="{fontSize:screen.isWS?'16px':'20px'}">
              <span v-show="screen.isWS">立规矩 创纬业</span>
              <div v-show="!screen.isWS" class="xcol">
                <span>纬业流程</span>
                <span class="text-sm mt-10 text-light-32">立规矩 创纬业</span>
              </div>
            </span>
          </span>
          <div :class="[screen.isWS?'flex-grow-1':'h-15']"></div>
          <span v-show="screen.isWS" class="xcol uppercase" :class="[screen.isWS?'items-start':'items-center']">
            <span class="text-white font-bold" :style="{fontSize:screen.isWS?'16px':'12px'}">version : 1.0</span>
            <span class="mt-5 text-light-32 font-bold" style="font-size:12px">copyright : yanjun-mad-lab.com</span>
          </span>
        </div>
        <key-visual v-if="screen.isWS" class="w-full h-full"
          :class="[screen.isWS?'p-80':'p-40']">
        </key-visual>
      </div>
      <!-- form -->
      <div class="xcol flex-grow-1 bg-white" :class="[screen.isWS?'w-5/12':'mx-10 -mt-50 mb-10 z-40 rounded-lg overflow-hidden']">
        <!-- logo -->
        <span class="xcol flex-grow-5 bg-white"
          :class="[screen.isWS?'px-50 pt-30':'p-20 h-4/6']">
          <span v-show="screen.isWS" style="font-size:40px" class="text-left mb-20 flex-grow-1 xrow items-center text-p-10 iconfont icon-logo-vk">
            <span class="ml-10 text-dark-24" style="font-size:20px">纬业流程</span>
          </span>
          <span class="xrow items-center" :class="[screen.isWS?'':'my-20']">
            <span class="h-15 mr-5 xcol" style="width:4px;margin-top:-3px">
              <span class="flex-grow-1 bg-s-10 rounded"></span>
            </span>
            <span class="h-15 flex items-end font-bold text-dark-32" style="font-size:16px">
              {{ruleConfig.cn}}
            </span>
            <span class="h-15 flex items-end ml-5 text-dark-18 uppercase font-bold" style="font-size:12px;margin-top:4px">
              {{ruleConfig.en}}
            </span>
          </span>
          <!-- 登录 -->
          <div v-if="pageStatus == 'Login'" class="xcol flex-grow-1 justify-center">
            <el-form ref="LoginFormRef" :model="reqdata" :rules="ruleConfig.rule" :show-message="false">
              <el-form-item prop="email" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.email" class="text-sm" type="text" placeholder="账号邮箱..." clearable>
                  <template v-slot:prepend class="px-5">账号</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="userpassword" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.userpassword" class="text-sm" type="password" placeholder="密码..." clearable show-password>
                  <template v-slot:prepend>密码</template>
                </el-input>
              </el-form-item>
              <span class="xrow mb-10 last:mb-0" >
                <el-form-item prop="code" class="flex-grow-1">
                  <el-input v-model="reqdata.code" class="text-sm" placeholder="验证码..." clearable>
                    <template v-slot:prepend>验证</template>
                  </el-input>
                </el-form-item>
                <span class="w-140 bg-dark-2 rounded overflow-hidden ml-5 flex items-center justify-center" style="height:32px">
                  image
                </span>
              </span>
            </el-form>
          </div>
          <!-- 注册 -->
          <div v-if="pageStatus == 'Register'" class="xcol flex-grow-1 justify-center">
            <el-form ref="RegisterFormRef" :model="reqdata" :rules="ruleConfig.rule" :show-message="false">
              <el-form-item prop="email" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.email" class="text-sm" type="text" placeholder="账号邮箱..." clearable>
                  <template v-slot:prepend class="px-5">账号</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="userpassword" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.userpassword" class="text-sm" type="password" placeholder="输入密码..." clearable show-password>
                  <template v-slot:prepend>密码</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="repeatpassword" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.repeatpassword" class="text-sm" type="password" placeholder="重复密码..." clearable show-password>
                  <template v-slot:prepend>密码</template>
                </el-input>
              </el-form-item>
              <span class="xrow mb-10 last:mb-0" >
                <el-form-item prop="code">
                  <el-input v-model="reqdata.code" class="text-sm" placeholder="验证码..." clearable>
                    <template v-slot:prepend>验证</template>
                  </el-input>
                </el-form-item>
                <span class="w-140 bg-dark-2 rounded overflow-hidden ml-5 flex items-center justify-center" style="height:32px">
                  image
                </span>
              </span>
            </el-form>
          </div>
          <!-- 忘记密码 -->
          <div v-if="pageStatus == 'ResetPassword'" class="xcol flex-grow-1 justify-center">
            <el-form ref="ResetPasswordFormRef" :model="reqdata" :rules="ruleConfig.rule" :show-message="false">
              <el-form-item prop="email" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.email" class="text-sm" type="text" placeholder="账号邮箱..." clearable>
                  <template v-slot:prepend class="px-5">账号</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="userpassword" class="mb-10 last:mb-0">
                <el-input v-model="reqdata.userpassword" class="text-sm" type="password" placeholder="重置新密码..." clearable show-password>
                  <template v-slot:prepend>密码</template>
                </el-input>
              </el-form-item>
              <span class="xrow mb-10 last:mb-0" >
                <el-form-item prop="code">
                  <el-input v-model="reqdata.code" class="text-sm" placeholder="重置验证码..." clearable>
                    <template v-slot:prepend>验证</template>
                    <template v-slot:append>发送验证码</template>
                  </el-input>
                </el-form-item>
                <!-- <span class="w-140 bg-dark-2 rounded overflow-hidden ml-5 flex items-center justify-center" style="height:32px">
                  发送验证码
                </span> -->
              </span>
            </el-form>
          </div>
        </span>
        <!-- buttons -->
        <span class="h-auto flex-shrink-0 xcol pb-30 pt-20 bg-dark-1 border-t border-dark-2"
          :class="[screen.isWS?'px-50':'px-20']">
          <span class="overflow-hidden flex-grow-1 xcol">
            <!-- 登录 -->
            <div v-if="pageStatus == 'Login'" class="xcol">
              <el-button type="primary" @click="loginAction(LoginFormRef)">登录</el-button>
              <span class="xrow justify-between items-center flex-grow-1 my-10">
                <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300"
                  @click="pageStatus = 'Register'">
                  用户注册
                </span>
                <span class="px-10 py-5 rounded bg-dark-1 border border-dark-2 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300"
                  @click="pageStatus = 'ResetPassword'">
                  忘记密码
                </span>
              </span>
            </div>
            <!-- 注册 -->
            <div v-if="pageStatus == 'Register'" class="xcol">
              <el-button type="success" @click="regAction(RegisterFormRef)">注册</el-button>
              <span class="xrow justify-center items-center flex-grow-1 my-10">
                <span class="px-10 py-5 rounded bg-dark-1 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300"
                  @click="pageStatus = 'Login'">
                  返回登录
                </span>
              </span>
            </div>
            <!-- 忘记密码 -->
            <div v-if="pageStatus == 'ResetPassword'" class="xcol">
              <el-button type="danger" @click="resetPwAction(ResetPasswordFormRef)">重置密码</el-button>
              <span class="xrow justify-center items-center flex-grow-1 my-10">
                <span class="px-10 py-5 rounded bg-dark-1 cursor-pointer hover:bg-white hover:text-p-10 hover:border-p-2 transition-all duration-300"
                  @click="pageStatus = 'Login'">
                  返回登录
                </span>
              </span>
            </div>
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
import { defineComponent, ref, reactive, inject, computed, PropType, Ref, getCurrentInstance } from 'vue';
import type { UnwrapNestedRefs, ComponentPublicInstance } from 'vue';
import { RouteLocationRaw, useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElInput, ElButton, ElForm, ElFormItem } from "element-plus";
import type { FormInstance, FormValidateCallback} from 'element-plus';
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator';
import * as R from "ramda";
import PageConfig from "./config/page-config";

export default defineComponent({
  components:{ElInput, ElButton, ElForm, ElFormItem},
  setup(props,context) {
    const LoginFormRef = ref<FormInstance>(); // 流程画布dom对象
    const RegisterFormRef = ref<FormInstance>(); // 流程画布dom对象
    const ResetPasswordFormRef = ref<FormInstance>(); // 流程画布dom对象
    const router = useRouter();
    const { proxy } = (getCurrentInstance() as { proxy : any });
    // const route = useRoute();
    const store = useStore();
    let pageStatus:Ref<'Login'|'Register'|'ResetPassword'> = ref('Login');
    const reqdata:UnwrapNestedRefs<{
      nickname?:string,
      email:string,
      userpassword:string,
      code:string,
      repeatpassword?:string,
      account?:string,
    }> = reactive({
      email:'',
      userpassword:'',
      code:''
    })
    const pageConfig = PageConfig;
    const ruleConfig = computed(()=>{
      return pageConfig[pageStatus.value]; // 注册账号
    });
    const screen = inject('screen') as { isWS:boolean,w:number,h:number };
    // 弹出表单错误提示
    function toastFormErrors(fields:ValidateFieldsError){
      let vm = proxy;
      let errors =R.pluck('message',R.flatten(R.values(fields||{})));
      // console.log(errors)
      vm.$message({
        message:errors[0]|| '未知错误',
        dangerouslyUseHTMLString:true,
        type:'error'
      })
    };
    function loginAction ( formRef:FormInstance|undefined ){
      if (!formRef) return;
      let vm = proxy;
      formRef.validate((valid, fields) => {
        if (valid) {
          console.log('do login!');
          store.commit('user/setToken',{ access_token:"111",refresh_token:"222" });
          router.push({name:'bpmn-editor'});
        } else {
          toastFormErrors(fields as ValidateFieldsError);
        }
      })
    };
    function regAction ( formRef:FormInstance|undefined ){
      if (!formRef) return;
      let vm = proxy;
      formRef.validate((valid, fields) => {
        if (valid) {
          console.log('do register!');
          store.commit('user/setToken',{ access_token:"111",refresh_token:"222" });
          router.push({name:'bpmn-editor'});
        } else {
          toastFormErrors(fields as ValidateFieldsError);
        }
      });
    }
    function resetPwAction ( formRef:FormInstance|undefined ){
      if (!formRef) return;
      let vm = proxy;
      formRef.validate((valid, fields) => {
        if (valid) {
          console.log('do ResetPassword!');
          store.commit('user/setToken',{ access_token:"111",refresh_token:"222" });
          router.push({name:'bpmn-editor'});
        } else {
          toastFormErrors(fields as ValidateFieldsError);
        }
      })
    }
    return {
      LoginFormRef,
      RegisterFormRef,
      ResetPasswordFormRef,

      pageStatus,
      push:router.push,
      ruleConfig,
      reqdata,
      screen,
      // 方法
      loginAction,
      regAction,
      resetPwAction,
    }
  },
})
</script>