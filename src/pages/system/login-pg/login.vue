<template>
  <div class=" cursor-pointer select-none" @click="jumpTo">login</div>
</template>

<script lang="ts">
import router from "@src/router"
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function jumpTo(){
      router.push({name:"bpmn-editor"})
    }
    return {
      jumpTo
    }
  },
})
</script>
