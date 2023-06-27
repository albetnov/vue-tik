<script setup lang="ts">
import { inject, type Ref } from 'vue'
import EditorButton from '../EditorButton.vue'
import MenuWrapper from '../MenuWrapper.vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      @click="editor?.chain().focus().toggleBold().run()"
      :active="editor?.isActive('bold')"
      icon="ri-bold"
      name="Bold"
    />
    <EditorButton
      @click="editor?.chain().focus().toggleItalic().run()"
      :active="editor?.isActive('italic')"
      icon="ri-italic"
      name="Italic"
    />
    <EditorButton
      @click="editor?.chain().focus().toggleUnderline().run()"
      :active="editor?.isActive('underline')"
      icon="ri-underline"
      name="Underline"
    />
    <EditorButton
      @click="editor?.chain().focus().toggleStrike().run()"
      :active="editor?.isActive('strike')"
      icon="ri-strikethrough"
      name="Strike Through"
    />
  </MenuWrapper>
</template>
