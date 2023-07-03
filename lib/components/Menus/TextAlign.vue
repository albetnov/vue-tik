<script setup lang="ts">
import { EDITOR_KEY } from '../../keys'
import EditorButton from '../EditorButton.vue'
import MenuWrapper from '../MenuWrapper.vue'
import { inject, type Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      @click="editor?.chain().focus().setTextAlign('left').run()"
      :active="editor?.isActive({ textAlign: 'left' })"
      icon="ri-align-left"
      name="Align Left"
    />
    <EditorButton
      @click="editor?.chain().focus().setTextAlign('center').run()"
      :active="editor?.isActive({ textAlign: 'center' })"
      icon="ri-align-center"
      name="Align Center"
    />
    <EditorButton
      @click="editor?.chain().focus().setTextAlign('right').run()"
      :active="editor?.isActive({ textAlign: 'right' })"
      icon="ri-align-right"
      name="Align Right"
    />
    <EditorButton
      @click="editor?.chain().focus().setTextAlign('justify').run()"
      :active="editor?.isActive({ textAlign: 'justify' })"
      icon="ri-align-justify"
      name="Align Justify"
    />
  </MenuWrapper>
</template>
