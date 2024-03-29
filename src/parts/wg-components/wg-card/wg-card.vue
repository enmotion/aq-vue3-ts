<template>
  <div class="xcol">
    <teleport to="body" :disabled="!isFullScreen">
      <div v-if="styleType==='A'" class="xcol flex-grow-1 border p-20 border-dark-2 bg-white"
      :class="[isFullScreen?'fixed left-0 top-0 z-10 w-full h-full':'rounded-md']">
        <div class="xrow">
          <slot name="title">
            <div class="xrow items-center flex-grow-1">
              <span class="rounded mr-10" :class="markClass" style="width:4px;height:18px;margin-top:-2px"></span>
              <span v-if="title" class="text-base font-bold text-gray-600" style="line-height:14px">{{title}}</span>
              <span v-if="tip" class="text-xs font-bold text-gray-400 uppercase ml-10" style="line-height:14px;padding-top:3px">{{tip}}</span>
            </div>
          </slot>
          <div v-if="useMenu" class="xrow">
            <el-tooltip v-for="(item,index) in menus" :key="item.label+index" :content="item.label" placement="left-start">
              <span 
                class="w-25 h-25 flex items-center justify-center flex-shrink-0 iconfont text-md scale-75 text-gray-400 rounded-full hover:text-white hover:bg-dark-6 cursor-pointer transition-all duration-200  mr-5 last:-mr-5"
                :class="[item.icon]"
                @click="doFunc(item.func)">
              </span>
            </el-tooltip>
          </div>
        </div>
        <div class="xcol flex-grow-1 flex-shrink-1 h-auto w-full overflow-hidden mt-15 text-justify text-sm text-gray-400">
          <slot :isFullScreen="isFullScreen"></slot>
        </div>
      </div>
      <div v-if="styleType==='B'" class="xrow flex-grow-1 bg-white border border-dark-2"
        :class="[isFullScreen?'fixed left-0 top-0 z-10 w-full h-full':'rounded-md items-center']">
        <div class="rounded-r-lg w-5 flex-shrink-0 flex-grow-0" :class="[isFullScreen?'h-30 mt-20':'h-2/3',markClass]"></div>
        <div class="xcol py-20 pr-20 pl-15 h-full flex-grow-1">
          <div class="xrow">
            <slot name="title">
              <div class="xrow items-center flex-grow-1">
                <span v-if="title" class="text-base font-bold text-gray-600" style="line-height:14px">{{title}}</span>
                <span v-if="tip" class="text-xs font-bold text-gray-400 uppercase ml-10" style="line-height:14px;padding-top:3px">{{tip}}</span>
              </div>
            </slot>
            <div v-if="useMenu" class="xrow">
              <el-tooltip v-for="(item,index) in menus" :key="item.label+index" :content="item.label" placement="left-start">
                <span 
                  class="w-25 h-25 flex items-center justify-center flex-shrink-0 iconfont text-md scale-75 text-gray-400 rounded-full hover:text-white hover:bg-dark-6 cursor-pointer transition-all duration-200  mr-5 last:-mr-5"
                  :class="[item.icon]"
                  @click="doFunc(item.func)">
                </span>
              </el-tooltip>
            </div>
          </div>
          <div class="xcol flex-grow-1 flex-shrink-1 h-auto w-full overflow-hidden mt-15 text-justify text-sm text-gray-400">
            <slot :isFullScreen="isFullScreen"></slot>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, getCurrentInstance } from 'vue';
import { ElTooltip } from 'element-plus';
import type { PropType } from 'vue';

export default defineComponent({
  components:{ElTooltip},
  props:{
    title:{
      type:String as PropType<string>,
      default:""
    },
    tip:{
      type:String as PropType<string>,
      default:""
    },
    markClass:{
      type:String as PropType<string>,
      default:'bg-s-10'
    },
    useMenu:{
      type:Boolean as PropType<boolean>,
      default:false
    },
    styleType:{
      type:String as PropType<'A'|'B'|'C'>,
      default:'B'
    },
    cardMenu:{
      type:Array as PropType<{label:string,icon:string,func:string}[]>,
      default:()=>[]
    }
  },
  setup(props,context) {
    let { proxy } = getCurrentInstance() as { proxy:any };
    let isFullScreen = ref(false);

    let menus = computed(()=>{
      return props.cardMenu.length>0 ? props.cardMenu : (isFullScreen.value?[{label:'退出',icon:'icon-fullscreen-exit',func:'switchFullScreen'}]:[{label:'全屏',icon:'icon-fullscreen',func:'switchFullScreen'}])
    })
    function doFunc(name:string){
      console.log(name);
      if(proxy[name]){
        proxy[name]();
      }
    }
    function switchFullScreen(){
      isFullScreen.value = !isFullScreen.value;
    }
    return {
      menus,
      isFullScreen,
      doFunc,
      switchFullScreen
    }
  },
})
</script>
