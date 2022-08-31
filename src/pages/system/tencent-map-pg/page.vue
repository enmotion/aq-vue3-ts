<template>
  <div class="xcol flex-shrink-1 flex-gorw-1 bg-white overflow-hidden p-20">
    <aq-title-back-button :show-back="true">back</aq-title-back-button>
    <aq-tencent-map class="bg-gray-100 mt-10 flex-grow-1" 
      
      :center="center" 
      disabled>
    </aq-tencent-map>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ElSwitch, ElSelect, ElOption, ElInputNumber, ElButton } from "element-plus";


export default defineComponent({
  name:'tencent-map',
  components:{ ElSwitch, ElSelect, ElOption, ElInputNumber },
  setup(props,context) {
    const center = reactive({
      lat:22.585896,
      lng:113.859220,
    })
    return {
      center,
    }
  },
})
</script>
