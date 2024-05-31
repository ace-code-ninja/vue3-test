<template>
    <button @click.prevent="buttonClick"
        :class="[
            'inline-block py-4 text-xl text-white rounded-xl w-64 duration-150 ease-in-out',
            props.buttonInfos.type === 'delete' && 'hover:bg-gray-600 bg-gray-500',
            props.buttonInfos.type === 'error' && 'hover:bg-red-600 bg-red-500',
        ]"
    >
    {{ props.buttonInfos.name }}
    </button>
</template>
  
<script setup lang="ts">
import { AlertMsg } from '../types/alert';

const props = defineProps<{ buttonInfos: AlertMsg }>();
const emit = defineEmits<{ (e: "next"): void;}>();

const buttonClick = (): void => {
  emit('next')
}
</script>