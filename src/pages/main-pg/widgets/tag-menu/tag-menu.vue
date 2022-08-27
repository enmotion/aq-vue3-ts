<template>
  <div class="xrow items-end h-45 select-none" 
    @mouseleave="mouseoverIndex = -1">
      <aq-transition-group name="scrollup" item-display="inline-block" :duration="{enter:200,leave:100}" class="h-40">
        <div v-for="(option, index) in options" :key="option.value" class="h-40 w-auto origin-bottom-left overflow-hidden">
          <div class="h-40 w-120 xrow flex-shrink-0 items-center cursor-pointer
            overflow-hidden rounded-t-md transition-all duration-100 border-t border-dark-1"
            :class="[option.value == value?'text-gray-500 bg-gray-100':'pt-5 hover:h-40 hover:pt-0 hover:bg-m hover:rounded-t-md ']"
            @mouseover="mouseoverIndex = index"
            @click="buttonClick({index:index,option:option})">
            <div class="h-20 xrow flex-grow-1"
              :class="[option.value == value ? 'pl-15 pr-10' : 'px-15',mouseoverIndex == index||mouseoverIndex-1 == index ?'':'border-r border-light-6']">
              <span class=" whitespace-nowrap w-0 xrow items-center flex flex-grow-1 font-bold">
                <span class="text-ellipsis overflow-hidden">{{option.label}}</span>
              </span>
              <span v-if="!option.static" 
                class="bg-d-2 text-d-10 overflow-hidden h-20 flex scale-75 items-center justify-center rounded-sm 
                iconfont icon-x text-xs font-bold 
                hover:scale-90 hover:bg-d-10 hover:text-white transition-all duration-200" 
                :class="[option.value == value ? 'w-20' : 'w-0 opacity-0']"
                @click.capture.stop="tagRemoveClick({index:index,option:option})">
              </span>
            </div>
          </div>
        </div>
      </aq-transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType, SetupContext } from 'vue';
import type { TagRecordRaw } from "types/public/mainPage";
import { useMenuBase } from "../menu.lib"; // 组合式api代码复用
import { ElTooltip } from 'element-plus';
export default defineComponent({
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