<template>
  <div class="h-full bg-base xcol items-center justify-center">
    <div class="w-2/12 xcol p-40 rounded-md border-dark-4 border shadow-md bg-white" style="min-width:320px">
      <div class="bg-d-4 rounded-md h-50 xrow items-center px-10 font-bold text-white" style="font-size:20px">
        <span class="p-10 bg-d-6 mr-5 rounded-md">Error:</span>
        <span>404</span>
      </div>
      <div class="p-40">
        <key-visual :svg-url="svgURL"></key-visual>
      </div>
      <div class="text-sm text-dark-24">
        抱歉 ! 您当前访问的路径不存在！
      </div>
      <div class="mt-20 xrow justify-center">
        <el-button size="default" 
          class="px-30 bg-s-1 border border-s-2 text-xs hover:text-white hover:bg-s-8 duration-300"
          @click="router.back()">
          返回
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import svg from "@src/assets/img/svg/404.svg";
import { ElButton } from "element-plus";
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components:{ ElButton },
  setup(props,context) {
    let router = useRouter();
    const svgURL:string = svg;
    const url = ref(window.location.href as string);
    return {
      svgURL,
      router,
      url
    }
  },
})
</script>
