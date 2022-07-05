<template>
    <div ref="loadingContainer" class="box-border h-auto flex flex-col flex-grow flex-shrink-0 mask">
        <div v-if="isLoading" class="flex flex-col z-10" :class="[loadingModalCss]" :style="{width:containerSize.width+'px',height:containerSize.height+'px'}">
            <div class="flex flex-col flex-grow items-center justify-center">
                <SemipolarSpinner :animation-duration="duration" :size="size" color="#FF9C00" />
                <div v-show="showTips" class=" mt-30 text-light-12 text-xs">{{ tips }}</div>
            </div>
        </div>
        <div class="h-auto flex-col flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SemipolarSpinner } from 'epic-spinners';

export default defineComponent({
    name: "loading",
    props:{
        tips:{
            type:String,
            default:"LOADING"
        },
        loadingModalCss:{
            type:[String,Array],
            default:"bc-aw1"
        },
        isLoading:{
            type:Boolean,
            default:false,
        },
        showTips:{
            type:Boolean,
            default:false,
        },
        size:{
            type:Number,
            default:30
        },
        duration:{
            type:Number,
            default:1000,
        }
    },
    components: {
        SemipolarSpinner
    },
    data:()=>{
        var vm = this;
        return {
            $refs:{} as {[key:string]:any},
            resizeObserver:{} as ResizeObserver,
            containerSize:{} as any
        }
    },
    mounted(){
        var vm = this;
        vm.$nextTick(function(){
            vm.resizeObserver = new ResizeObserver(()=>{
                let size:object = vm.$refs.loadingContainer.getBoundingClientRect();
                vm.containerSize = size;
            });
            vm.resizeObserver.observe(vm.$refs.loadingContainer);  
        });
    },
    unmounted(){
        var vm = this;
        vm.resizeObserver.disconnect();
    }
})
</script>
