<template>
  <div class="xrow flex-grow-1 bg-white">
    <div class="xcol w-150 border-r border-dark-4">
      <!--  -->
      <div @click="router.push({name:'transition'})" class="h-50 btn bg-p-10 xrow px-10 text-sm font-bold text-white items-center">纬业流程</div>
    </div>
    <div class="bg-dark-2 flex-grow-1 xcol">
      <div class="h-50 bg-white xrow px-10 text-sm border-b border-dark-4 items-center text-gray-600 text-10">
        一级导航与系统菜单
      </div>
      <div class="h-35 bg-white xrow items-center px-10 text-gray-500">tab标签栏</div>
      <div class="xcol flex-grow-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props,context) {
    const router = useRouter();
    return {
      router,
    }
  },
})
</script>
