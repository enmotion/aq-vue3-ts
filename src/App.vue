<template>
  <div class="h-full flex flex-col mask text-xs overflow-hidden" style="pop">
    <!-- <div class="h-50 bg-black text-white text-left">{{route.name}}</div> -->
    <router-view key="root_router" v-slot="{ Component }">
      <aq-transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.name" class="w-full h-full" />
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
