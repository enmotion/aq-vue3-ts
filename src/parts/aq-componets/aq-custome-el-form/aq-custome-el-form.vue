<template>
  <div class="text-justify xcol">
    <span class="mb-5">{{data}}</span>
    <span class="mb-5">{{uiConfig}}</span>
    <span class="mb-5">{{innerState}}</span>
    <span class="mb-5">{{computedUiConfig}}</span>
  </div>
</template>

<script lang="ts">
import * as R from "ramda";
import { defineComponent, ref, reactive, onMounted, computed } from 'vue';
import type { PropType } from "vue";
import type { UIConfigOptions, HandingData } from "./types";
import { 
  ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
  ElColorPicker, ElRadioGroup, ElRadioButton, ElImage 
} from 'element-plus';
import { usePluckDeepToKeyValue } from "./use.lib";

export default defineComponent({
  name:'aq-custome-el-form',
  components:{ 
    ElInput, ElInputNumber, ElSelect, ElSwitch, ElDivider, ElSlider, 
    ElColorPicker, ElRadioGroup, ElRadioButton, ElImage 
  },
  props:{
    // 需要被处理加工的数据
    data:{
      type:Object as PropType<HandingData>,
      default:()=>({})
    },
    // 前置路径，当组件进入嵌套模式时，需要前置路径进行相关处理
    parentPath:{
      type:String as PropType<string>,
      default:''
    },
    // ui 守卫函数，负责控制ui的呈现 ui-config
    uiConfig:{
      type:Object as PropType<UIConfigOptions>,
      default:()=>({})
    },
    // ui 守卫函数，当数据或者ui发生变化时，会触发ui守卫，来更新相应的值
    uiGuard:{
      type:Function as PropType<(ui:UIConfigOptions,data:HandingData)=>{ui:UIConfigOptions,data:HandingData}|Promise<{ui:UIConfigOptions,data:HandingData}>>,
      default:(ui:UIConfigOptions,data:HandingData) => {ui as UIConfigOptions,data as HandingData}
    },
  },
  setup(props,context) {
    const innerState = usePluckDeepToKeyValue(props.data,props.uiConfig);
    const computedUiConfig = computed(()=>{
      return props.uiGuard(props.uiConfig,props.data)||props.data;
    })
    return {
      innerState,
      computedUiConfig
    }
  },
})
</script>
