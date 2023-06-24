<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>
<template>
  <button
    class="py-2 px-4 bg-transparent text-slate-700 border-none rounded-full text-medium transition-colors duration-200 hover:bg-slate-200 hover:cursor-pointer"
  >
    <v-icon :name="props.name" />
  </button>
</template>
