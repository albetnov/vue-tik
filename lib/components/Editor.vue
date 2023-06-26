<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu.vue'
import { inject, provide } from 'vue'
import type { EditorOptions } from 'lib/types'
import { EDITOR_CONFIG, EDITOR_KEY } from 'lib/keys'
import UploadableImage from 'lib/plugins/UploadableImage'

const props = defineProps<{
  options?: EditorOptions
}>()

const optionsInject = inject(EDITOR_CONFIG) as EditorOptions | undefined

const options = optionsInject ? optionsInject : props.options

const editor = useEditor({
  content: '<p>A running tiptap editor!</p>',
  extensions: [
    StarterKit,
    UploadableImage.configure({
      allowBase64: options?.image.strategy !== 'url'
    })
  ]
})

provide(EDITOR_KEY, editor)
</script>

<template>
  <div class="flex flex-col">
    <EditorMenu :options="options" />
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
