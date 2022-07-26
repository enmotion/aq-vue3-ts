<template>
    <div ref="loadingContainer" class="box-border h-auto flex flex-col flex-grow-1 flex-shrink-0 mask">
        <div class="flex flex-col flex-grow-1">
            <slot></slot>
        </div>
        <div v-if="isLoading" class="flex felx-col z-10 flex-grow-1 absolute w-full h-full">
            <div class="flex flex-col flex-grow-1 items-center justify-center">
                <!-- <SemipolarSpinner :color="color" :size="size" :animation-duration="duration"/> -->
                <div v-show="showTips" class="mt-10 text-xs font-bold" :style="{color:'#888888AA'}">{{ tips }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { SemipolarSpinner } from 'epic-spinners';

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
            default:true,
        },
        color:{
            type:[String],
            default:'#FF9C00'
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
        // SemipolarSpinner
    }
})
</script>
