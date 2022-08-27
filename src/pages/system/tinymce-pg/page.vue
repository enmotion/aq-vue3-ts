<template>
  <div class="xcol flex-gorw-1 bg-white p-20">
    <aq-title-back-button :show-back="true">返回上一页</aq-title-back-button>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";

export default defineComponent({
  name:'tinymce',
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton },
  setup(props,context) {
    return {
      
    }
  },
})
</script>
