<script setup lang="ts">
import { inject } from 'vue'
import EditorButton from './EditorButton.vue'
import EditorFontType from './EditorFontType.vue'
import MenuWrapper from './MenuWrapper.vue'
import type { Editor } from '@tiptap/vue-3'
import Tooltip from './Tooltip.vue'

const editor = inject('vue-editor') as Editor
</script>

<template>
  <div
    class="bg-slate-100 md:rounded-lg rounded-xl 2xl:rounded-full py-1 px-2 flex items-center flex-wrap gap-5"
  >
    <MenuWrapper>
      <EditorFontType :editor="editor" />
    </MenuWrapper>
    <MenuWrapper class="relative">
      <input type="color" class="peer border-none rounded-full w-8 h-8" />
      <Tooltip activator="peer-hover:opacity-100" position="-left-2 top-5">Color</Tooltip>
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton icon="ri-bold" name="Bold" />
      <EditorButton icon="ri-italic" name="Italic" />
      <EditorButton icon="ri-underline" name="Underline" />
      <EditorButton icon="ri-strikethrough" name="Strike Through" />
    </MenuWrapper>
    <div class="flex gap-2 md:gap-5">
      <MenuWrapper>
        <EditorButton icon="ri-align-left" name="Align Left" />
        <EditorButton icon="ri-align-center" name="Align Center" />
        <EditorButton icon="ri-align-right" name="Align Right" />
      </MenuWrapper>
      <MenuWrapper>
        <EditorButton icon="ri-list-ordered" name="Number List" />
        <EditorButton icon="ri-list-unordered" name="Bullet List" />
        <EditorButton icon="ri-task-line" name="Task List" />
      </MenuWrapper>
    </div>
    <MenuWrapper>
      <EditorButton icon="ri-code-line" name="Code" />
      <EditorButton icon="ri-code-box-line" name="Code Snippet" />
      <EditorButton icon="ri-table-line" name="Tables" />
      <EditorButton icon="ri-image-line" name="Image" />
      <EditorButton icon="ri-divide-line" name="Divider" />
      <EditorButton icon="ri-double-quotes-l" name="Blockquote" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton icon="ri-youtube-line" name="Youtube" />
      <EditorButton icon="ri-twitter-line" name="Twitter" />
      <EditorButton icon="ri-window-line" name="Embed Frame" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton icon="ri-arrow-go-back-fill" name="Undo" />
      <EditorButton icon="ri-arrow-go-forward-fill" name="Redo" />
    </MenuWrapper>
  </div>
</template>
