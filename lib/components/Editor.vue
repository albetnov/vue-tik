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

.ProseMirror ul[data-type='taskList'] {
  @apply list-none p-0;
}

.ProseMirror ul[data-type='taskList'] p {
  @apply m-0;
}

.ProseMirror ul[data-type='taskList'] li {
  @apply flex;
}

.ProseMirror ul[data-type='taskList'] li > label {
  @apply mr-1;
}

.ProseMirror .ProseMirror-selectednode iframe {
  @apply transition-all duration-300 ring-2 ring-zinc-500;
}

.ProseMirror hr.ProseMirror-selectednode {
  @apply border-t border-solid border-zinc-600;
}

.ProseMirror blockquote {
  @apply border-l border-l-solid border-l-zinc-500 pl-3 text-lg;
}

.ProseMirror table {
  @apply border-collapse table-fixed w-full m-0 overflow-hidden;
}

.ProseMirror table td,
.ProseMirror table th {
  @apply min-w-[1em] border border-solid border-slate-400 align-top box-border relative;
}

.ProseMirror table td p,
.ProseMirror table th p {
  @apply mx-3 my-2;
}

.ProseMirror table th p {
  @apply text-lg;
}

.ProseMirror table td > *,
.ProseMirror table th > * {
  @apply mb-0;
}

.ProseMirror th {
  @apply font-bold text-left bg-slate-100;
}
</style>
