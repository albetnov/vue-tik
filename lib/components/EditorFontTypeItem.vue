<script setup lang="ts">
const props = defineProps<{
  icon: string
  name: string
  description: string
  value: string
}>()

const emits = defineEmits<{
  click: [title: string, value: string]
}>()
</script>

<template>
  <button
    class="bg-transparent border-none focus:outline-none focus:ring focus:ring-sky-500 flex gap-7 items-center hover:bg-slate-50 transition-colors duration-200 hover:cursor-pointer rounded-lg p-2"
    @click="emits('click', props.name, props.value)"
  >
    <div class="p-5 rounded-lg bg-sky-100 text-sky-600">
      <v-icon :name="props.icon" />
    </div>
    <div class="whitespace-nowrap">
      <p class="m-0 text-lg">{{ props.name }}</p>
      <span class="block mt-1">{{ props.description }}</span>
    </div>
  </button>
</template>
