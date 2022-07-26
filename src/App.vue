<template>
  <div class="h-full flex flex-col mask text-xs">
    <aq-loading :is-loading="false">
      <router-view key="root_router" />
    </aq-loading>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, provide, computed } from 'vue'

export default defineComponent({
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
