<template>
	<img width="500" :src="svgUrl" />
</template>

<script lang="ts">
import svg from  "@src/assets/img/svg/design.svg";
import { defineComponent } from 'vue'

export default defineComponent({
	props:{
		svgUrl:{
			type:String,
			default:svg
		}
	},
})
</script>
