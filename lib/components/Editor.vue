<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps<{
    message?: string
}>()
</script>

<template>
    <p>{{ props.message ?? 'Aloha' }}</p>
</template>