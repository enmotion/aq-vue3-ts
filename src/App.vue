<template>
  <div class="h-full xcol mask text-xs bg-dark-32 overflow-hidden">
    <aq-console-view class="bg-white">
      <div class="h-200 text-justify text-s-10">aerer</div>
    </aq-console-view>
    <router-view key="root_router" v-slot="{ Component }">
      <aq-transition name="zoomin" mode="out-in" class="flex-grow-1 flex-shrink-1" :duration="{enter:300,leave:200}" :timing="{enter:'ease-out',leave:'ease-in'}">
        <keep-alive :include="[]">
          <component :is="Component" class="w-full h-full" />
        </keep-alive>
      </aq-transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, provide, computed, reactive } from 'vue';
import { useRoute } from "vue-router";
import aqTransition from "@src/parts/aq-componets/transition/aq-transition/index.cp";

export default defineComponent({
  components:{aqTransition},
  setup(props:any,context:any) {
    const route =reactive(useRoute());
    const store = useStore();
    provide('screen',computed(()=>store.getters.screen));
    return {
      route
    }
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
