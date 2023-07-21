<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  icon: string
  name: string
  active?: boolean
}>()
</script>
<template>
  <button
    :class="[
      'relative group py-2 px-4 border-none rounded-full text-medium transition-colors duration-200 hover:cursor-pointer',
      {
        'bg-transparent hover:bg-slate-200 text-slate-700': !props.active,
        'bg-zinc-600 text-slate-200 hover:bg-zinc-800': props.active
      }
    ]"
  >
    <OhVueIcon :name="props.icon" />
    <Tooltip>{{ props.name }}</Tooltip>
  </button>
</template>
