<template>
	<img width="500" :src="svgURL" />
</template>

<script lang="ts">
import svg from  "@src/assets/img/design.svg";
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const svgURL = svg;
		return {
			svgURL
		}
  },
})
</script>
