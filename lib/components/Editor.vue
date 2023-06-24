<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu.vue'

const editor = useEditor({
  content: '<p>A running tiptap editor!</p>',
  extensions: [StarterKit]
})
</script>

<template>
  <div class="flex flex-col">
    <EditorMenu />
    <EditorContent :editor="editor" />
  </div>
</template>
