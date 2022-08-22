<template>
  <aq-scroll-view class="bg-gray-100 flex-grow-1 xcol" :scroll-bar-props="{viewClass:screen.isWS?'p-20':'p-10'}">
    test-03
  </aq-scroll-view>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Screen } from '@src/store/types';

export default defineComponent({
  name:'form-manager',
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(()=>{
      console.log(route.params,'params')
    })
    const screen = inject('screen') as Screen;
    return {
      route,
      router,
      screen
    }
  },
})
</script>