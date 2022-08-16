<template>
  <div class="xcol">
    <div @click="uiSwitch=true" class="hauto xcol xsg0">
        <slot name="switchButton">
            <div class="h50 tc-ab5 iconfont icon-list is14 xpcc btn" style="width:50px"></div>
        </slot>
    </div>        
    <el-drawer
      v-model="uiSwitch"
      :title="title"
      :with-header="withHeader"
      :lock-scroll="lockScroll"
      :size="size"
      :custom-class="customClass"
      :modal-class="modalClass"
      :z-index="zIndex"
      :direction="direction">
      <slot></slot>
  </el-drawer>
  </div>
</template>

<style>
.wg-slider-pop .el-drawer__body{
    flex: 1;
    padding: 0 !important;
    overflow: auto;
}
</style>

<script lang="ts">
import { ElDrawer } from 'element-plus';
import { defineComponent, ref } from 'vue';
import type { PropType } from "vue";

export default defineComponent({
  components:{ElDrawer},
  props:{
    direction:{
      type:String as PropType<'rtl'|'ltr'|'ttb'|'btt'>,
      default:'ltr'
    },
    customClass:{
      type:String as PropType<string>,
      default:'wg-slider-pop'
    },
    modalClass:{
      type:String as PropType<string>,
      default:'backdrop-blur-sm'
    },
    title:{
      type:String as PropType<string>,
      default:'',
    },
    withHeader:{
      type:Boolean as PropType<boolean>,
      defalult:false,
    },
    lockScroll:{
      type:Boolean as PropType<boolean>,
      defalult:true,
    },
    size:{
      type:[Number,String] as PropType<number|string>,
      default:'50%'
    },
    zIndex:{
      type:Number as PropType<number>,
      default:10
    }
  },
  setup(props,context) {
    let uiSwitch = ref(false);
    return {
      uiSwitch
    }
  },
})
</script>
