<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu.vue'
import { provide } from 'vue'

const editor = useEditor({
  content: '<p>A running tiptap editor!</p>',
  extensions: [StarterKit]
})

provide('vue-editor', editor)
</script>

<template>
  <div class="flex flex-col">
    <EditorMenu />
    <EditorContent :editor="editor" />
  </div>
</template>

<style>
.ProseMirror {
  @apply border border-solid border-slate-200 rounded-lg py-2 px-5 mt-2;
}

.ProseMirror:focus {
  @apply outline-none ring ring-slate-200;
}
</style>
