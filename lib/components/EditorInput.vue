<script setup lang="ts">
const props = defineProps<{
  modelValue: number | string | boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: number | string | boolean]
}>()
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="block mt-2 py-2 px-4 border border-solid border-slate-400 focus:outline-none focus:ring focus:ring-zinc-300 rounded-lg"
  />
</template>
