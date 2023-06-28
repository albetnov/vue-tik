<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  active?: boolean
  icon: string
  name: string
}>()
</script>

<template>
  <PopoverButton
    :class="[
      'relative group py-2 px-4 border-none rounded-full text-medium transition-colors duration-200 hover:cursor-pointer focus:outline-none',
      {
        'bg-transparent hover:bg-slate-200 text-slate-700': !props.active,
        'bg-zinc-600 text-slate-200 hover:bg-zinc-800': props.active
      }
    ]"
  >
    <v-icon name="ri-code-box-line"></v-icon>
    <Tooltip>{{ props.name }}</Tooltip>
  </PopoverButton>
</template>
