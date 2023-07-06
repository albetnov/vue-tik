<script setup lang="ts">
import { inject, type Ref } from 'vue'
import EditorButton from '../EditorButton.vue'
import MenuWrapper from '../MenuWrapper.vue'
import { EDITOR_KEY } from '../../keys'
import type { Editor } from '@tiptap/vue-3'

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      @click="editor?.chain().focus().deleteSelection().run()"
      icon="ri-eraser-line"
      name="Erase Selection"
    />
    <EditorButton
      @click="editor?.chain().focus().undo().run()"
      icon="ri-arrow-go-back-fill"
      name="Undo"
    />
    <EditorButton
      @click="editor?.chain().focus().redo().run()"
      icon="ri-arrow-go-forward-fill"
      name="Redo"
    />
  </MenuWrapper>
</template>
