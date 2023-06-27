<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import EditorFontTypeItem from './EditorFontTypeItem.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY, FontTypes } from '../../keys'
import Tooltip from '../Tooltip.vue'

const editor = inject(EDITOR_KEY) as Ref<Editor>

const onCurrentChange = (val: FontTypes) => {
  switch (val) {
    case FontTypes.paragraph:
      editor.value.chain().focus().setParagraph().run()
      break
    case FontTypes.heading_1:
      editor.value.chain().focus().setHeading({ level: 1 }).run()
      break
    case FontTypes.heading_2:
      editor.value.chain().focus().setHeading({ level: 2 }).run()
      break
    default:
      editor.value.chain().focus().unsetAllMarks().run()
      break
  }
}

const editorState = computed(() => {
  if (editor.value) {
    if (editor.value.isActive('paragraph')) return 'Paragraph'

    if (editor.value.isActive('heading', { level: 1 })) return 'Heading 1'

    if (editor.value.isActive('heading', { level: 2 })) return 'Heading 2'
  }
  return 'Paragraph'
})
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      class="bg-transparent peer hover:cursor-pointer border-none focus:outline-none flex justify-between py-2 px-5"
    >
      <span>{{ editorState }}</span>
      <v-icon name="ri-arrow-drop-down-line"></v-icon>
    </PopoverButton>
    <PopoverPanel
      class="absolute bg-white border border-solid border-slate-400 p-3 rounded-lg z-10"
    >
      <EditorFontTypeItem
        name="Paragraph"
        :value="FontTypes.paragraph"
        description="Set selection to paragraphs"
        icon="ri-paragraph"
        @click="onCurrentChange"
        :active="editor.isActive('paragraph')"
      />
      <EditorFontTypeItem
        name="Heading 1"
        :value="FontTypes.heading_1"
        description="Set selection to heading 1"
        icon="ri-heading"
        @click="onCurrentChange"
        :active="editor.isActive('heading', { level: 1 })"
      />
      <EditorFontTypeItem
        name="Heading 2"
        :value="FontTypes.heading_2"
        description="Set selection to heading 2"
        icon="ri-heading"
        @click="onCurrentChange"
        :active="editor.isActive('heading', { level: 2 })"
      />
    </PopoverPanel>
    <Tooltip :compact="false" activator="peer-hover:opacity-100">Change Font Type</Tooltip>
  </Popover>
</template>