<template>
  <div class="h-full flex flex-col mask text-xs bg-dark-32 overflow-hidden" style="pop">
    <router-view key="root_router" v-slot="{ Component }">
      <aq-transition name="zoomin" mode="out-in" :duration="{enter:300,leave:200}" :timing="{enter:'ease-out',leave:'ease-in'}">
        <keep-alive>
          <component :is="Component" :key="route.path" class="w-full h-full" />
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
