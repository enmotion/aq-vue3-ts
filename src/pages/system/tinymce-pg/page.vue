<template>
  <div class="xcol flex-shrink-1 flex-gorw-1 bg-white overflow-hidden p-20">
    <aq-title-back-button :show-back="true">返回上一页</aq-title-back-button>
    <div class="xrow h-0 flex-grow-1 flex-shrink-1 overflow-hidden mt-20 -mx-5">
      <aq-tinymce-editor
        content="test"
        class="h-full flex-grow-1 flex-shrink-1 w-1/2 px-5 overflow-hidden">
      </aq-tinymce-editor>
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
    return {
      
    }
  },
})
</script>
