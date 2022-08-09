<template>
  <div class="h-full flex flex-col mask text-xs overflow-hidden" style="pop">
    <router-view key="root_router" v-slot="{ Component }">
      <aq-transition name="flipx" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </aq-transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, provide, computed } from 'vue';
import aqTransition from "@src/parts/aq-componets/transition/aq-transition/index.cp";

export default defineComponent({
  components:{aqTransition},
  setup(props:any,context:any) {
    const store = useStore();
    provide('screen',computed(()=>store.getters.screen));
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
