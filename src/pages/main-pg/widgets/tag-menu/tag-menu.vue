<template>
  <div class="xrow items-end h-45 select-none" 
    @mouseleave="mouseoverIndex = -1">
      <span v-for="(option, index) in options" :key="option.label" class="xcol h-auto overflow-hidden">
        <span class="xrow flex-nowrap items-center justify-center cursor-pointer rounded-t-md border-t transition-all duration-400"
          :class="[
            option.value == value ? 'px-10 h-40 bg-gray-100 text-gray-600' : 'px-20 h-40',
            option.value != value && mouseoverIndex == index ? ' text-white bg-p-10 border-light-2' : 'border-light-1'
          ]"
          @mouseover="mouseoverIndex = index"
          @click="buttonClick({index:index,option:option})">
          <span class="bg-d-10">{{option.label}}</span>
          <span class="bg-d-5 overflow-hidden transition-all duration-400" 
            :class="[option.value==value?'w-20':'w-0']">
            x
          </span>
          <!-- <span class="w-50 flex-grow-1 flex-shrink-1 xrow overflow-hidden transition-all duration-400"
            :class="[option.value== value?'':'']">
            <span class="w-0 overflow-hidden flex-grow-1 text-left text-ellipsis whitespace-nowrap" 
              :class="[option.value== value?'text-gray-600 font-bold':'text-light-32']">
              <el-tooltip :content="option.label" :disabled="option.label.length<=4" placement="top">
                {{option.label}}
              </el-tooltip>
            </span>
          </span>
          <span 
            :style="{width:option.value== value?'20px':'0px'}" 
            class="overflow-hidden transition-all duration-400">
            <span class="xrow items-center justify-center rounded scale-75 hover:bg-d-1 hover:scale-110 transition-all duration-400"
              :class="[option.static ? 'bg-dark-6 pointer-events-none' : 'text-d-10']"
              style="width:16px;height:16px;margin-left:4px">
              <span class="iconfont icon-x text-xs font-bold scale-90"
                :class="[option.static ? 'text-white' : 'text-d-10']"
                @click.capture.stop="tagRemoveClick({index:index,option:option})">
              </span>
            </span>
          </span> -->
        </span>
      </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType, SetupContext } from 'vue';
import type { TagRecordRaw } from "types/public/mainPage";
import { useMenuBase } from "../menu.lib"; // 组合式api代码复用
import { ElTooltip } from 'element-plus';
export default defineComponent({
  components:{ElTooltip},
  props:{
    options:{
      type:Array as PropType<TagRecordRaw[]>,
      default:()=>[]
    },
    value:{
      type:String as PropType<string>,
      default:''
    }
  },
  emits:['update:value','remove:value'], // v-model 写法
  setup(props,context) {
    const { buttonClick, mouseoverIndex } = useMenuBase(context as SetupContext);
    function tagRemoveClick(event:{index:number,option:TagRecordRaw}){
      context.emit('remove:value',event)
    }
    return {
      mouseoverIndex,
      buttonClick,
      tagRemoveClick,
    }
  }
})
</script>