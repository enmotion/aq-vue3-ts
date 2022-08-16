<template>
  <div class="xcol">
    <div class="xrow">
      <slot name="title">
        {{title}}
      </slot>
      <div class="xrow">
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props:{
    title:{
      type:String as PropType<string>,
      default:""
    },
  },
  setup() {
    
  },
})
</script>
