<template>
  <div>
    <el-input :value="{aaa:'112'}"></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';

export default defineComponent({
  components:{
    ElInput,
  },
  setup(props,context) {
    
  },
})
</script>
