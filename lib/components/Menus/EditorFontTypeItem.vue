<script setup lang="ts">
import type { FontTypes } from '../../keys'

const props = defineProps<{
  icon: string
  name: string
  description: string
  value: FontTypes
  active?: boolean
}>()

const emits = defineEmits<{
  click: [value: FontTypes]
}>()

const classes = [
  'bg-transparent focus:outline-none focus:ring flex gap-7 items-center hover:bg-slate-50 transition-colors duration-200 hover:cursor-pointer rounded-lg p-2',
  { 'border-none focus:ring-slate-200': !props.active },
  { 'border border-solid border-slate-200 focus:ring-stone-200': props.active }
]
</script>

<template>
  <button :class="classes" @click="emits('click', props.value)">
    <div class="p-5 rounded-lg bg-zinc-100 text-zinc-600">
      <v-icon :name="props.icon" />
    </div>
    <div class="whitespace-nowrap">
      <p class="m-0 text-lg">{{ props.name }}</p>
      <span class="block mt-1">{{ props.description }}</span>
    </div>
  </button>
</template>
