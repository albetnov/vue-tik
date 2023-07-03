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
      @click="editor?.chain().focus().toggleOrderedList().run()"
      :active="editor?.isActive('orderedList')"
      icon="ri-list-ordered"
      name="Number List"
    />
    <EditorButton
      @click="editor?.chain().focus().toggleBulletList().run()"
      :active="editor?.isActive('bulletList')"
      icon="ri-list-unordered"
      name="Bullet List"
    />
    <EditorButton
      @click="editor?.chain().focus().toggleTaskList().run()"
      :active="editor?.isActive('taskList')"
      icon="ri-task-line"
      name="Task List"
    />
  </MenuWrapper>
</template>
