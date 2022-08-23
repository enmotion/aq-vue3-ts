<template>
  <div class="xcol flex-grow-1 h-full overflow-hidden bg-white">user-manager</div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Screen } from '@src/store/types';

export default defineComponent({
  name:'user-manager',
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