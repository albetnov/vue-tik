<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import EditorMenu from './EditorMenu.vue'
import { provide, type Ref } from 'vue'
import { EDITOR_KEY } from '../keys'
import type { Editor } from '@tiptap/vue-3'
import type { EditorOptions } from '../types'

const props = defineProps<{
  config: {
    editor: Ref<Editor>
    options?: EditorOptions
  }
}>()

provide(EDITOR_KEY, props.config.editor)
</script>

<template>
  <div class="flex flex-col">
    <EditorMenu :options="props.config.options" />
    <EditorContent :editor="props.config.editor.value" />
  </div>
</template>

<style>
.ProseMirror {
  @apply border border-solid border-slate-200 rounded-lg py-2 px-5 mt-2;
}

.ProseMirror:focus {
  @apply outline-none ring ring-slate-200;
}

.ProseMirror pre {
  @apply bg-zinc-700 rounded-lg p-3 text-slate-200 relative;
}

.ProseMirror pre code {
  @apply font-medium;
  font-size: 0.9rem;
}

.ProseMirror code {
  @apply bg-zinc-700 rounded text-sky-300 py-1 px-2;
}
</style>
