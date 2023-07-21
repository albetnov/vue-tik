<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons'

const emits = defineEmits<{
  deleteNode: []
}>()
</script>

<template>
  <button
    class="absolute -top-5 -right-3 rounded-full py-1 px-2.5 bg-white border border-solid border-slate-400 text-slate-700 text-lg transition-shadow duration-200 hover:shadow-lg hover:cursor-pointer"
    @click="emits('deleteNode')"
  >
    <OhVueIcon name="ri-close-circle-line" />
  </button>
</template>
