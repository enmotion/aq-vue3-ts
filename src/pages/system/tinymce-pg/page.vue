<template>
  <div class="xcol flex-shrink-1 flex-gorw-1 bg-white overflow-hidden p-20">
    <aq-title-back-button :show-back="true">back</aq-title-back-button>
    <div class="xrow h-0 flex-grow-1 flex-shrink-1 overflow-hidden mt-20 -mx-5">
      <!-- edit -->
      <div class="h-full xcol flex-grow-1 flex-shrink-1 w-1/2 px-5 overflow-hidden text-justify">
        <aq-tinymce-editor
          v-model:content="content"
          :disabled="false" 
          class="flex-grow-1 flex-shrink-1 border border-dark-6 shadow overflow-hidden">
        </aq-tinymce-editor>
      </div>
      <!-- view -->
      <div class="h-full xcol flex-grow-1 flex-shrink-1 w-1/2 px-5 overflow-hidden text-justify">
        <aq-scroll-view class="flex-grow-1 flex overflow-hidden border">
          <aq-tinymce-editor
            :content="content"
            class="flex-grow-1 overflow-hidden p-20"
            disabled
            mode="view">
          </aq-tinymce-editor>
      </aq-scroll-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";


export default defineComponent({
  name:'tinymce',
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber },
  setup(props,context) {
    const content = ref('这是一段文字')
    return {
      content,
    }
  },
})
</script>
