<script setup lang="ts">
import useEditor from 'lib/compositions/useEditor'

const { editor } = useEditor()
</script>

<template>
  <vue-editor :config="editor" />
</template>
