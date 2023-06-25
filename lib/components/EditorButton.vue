<script setup lang="ts">
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  icon: string
  name: string
}>()
</script>
<template>
  <button
    class="relative group py-2 px-4 bg-transparent text-slate-700 border-none rounded-full text-medium transition-colors duration-200 hover:bg-slate-200 hover:cursor-pointer"
  >
    <v-icon :name="props.icon" />
    <Tooltip>{{ props.name }}</Tooltip>
  </button>
</template>
