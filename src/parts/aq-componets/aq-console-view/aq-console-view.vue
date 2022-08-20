<template>
  <aq-transition name="growy" mode="out-in" class="xcol h-auto flex-shrink-0 w-full">
    <div v-if="visible" class="h-200 xcol bg-dark-44">
      <aq-scroll-view class="xcol h-200 flex-grow-1 flex-shrink-0" :scroll-bar-props="{viewClass:'p-10'}">
        <slot></slot>
      </aq-scroll-view>
    </div>
  </aq-transition>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onActivated, onDeactivated, onBeforeUnmount } from 'vue'

export default defineComponent({
  setup(props, context) {
    const visible = ref(false);
    const activated = ref(false);
    onMounted(()=>{
      if (activated) {
        window.addEventListener('keydown', switchContentView);
      }
    })
    onActivated(()=>{
      if (activated) {
        window.addEventListener('keydown', switchContentView);
      }
      activated.value = true
    })
    onDeactivated(()=>{
      window.removeEventListener('keydown', switchContentView);
      activated.value = false
    })
    onBeforeUnmount(()=>{
      window.removeEventListener('keydown', switchContentView);
    })
    function switchContentView(event:KeyboardEvent) {
      if (event.code == 'KeyA' && event.shiftKey && event.altKey && process.env.NODE_ENV == 'development') {
        visible.value = !visible.value;
      }
    }
    return {
      visible,
    }
  },
})
</script>