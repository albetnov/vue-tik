<script setup lang="ts">
import { reactive } from 'vue'
import EditorFontTypeItem from './EditorFontTypeItem.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const current = reactive({
  title: 'Paragraph',
  value: 'paragraph'
})

const onCurrentChange = (name: string, val: string) => {
  current.title = name
  current.value = val
}
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      class="bg-transparent border-none focus:outline-none flex justify-between py-2 px-5"
    >
      <span>{{ current.title }}</span>
      <v-icon name="ri-arrow-drop-down-line"></v-icon>
    </PopoverButton>
    <PopoverPanel
      class="absolute bg-white border border-solid border-slate-400 p-5 rounded-lg z-10"
    >
      <EditorFontTypeItem
        name="Paragraph"
        value="paragraph"
        description="Set selection to paragraphs"
        icon="ri-paragraph"
        @click="onCurrentChange"
      />
      <EditorFontTypeItem
        name="Heading 1"
        value="heading_1"
        description="Set selection to heading 1"
        icon="ri-heading"
        @click="onCurrentChange"
      />
      <EditorFontTypeItem
        name="Heading 2"
        value="heading_2"
        description="Set selection to heading 2"
        icon="ri-heading"
        @click="onCurrentChange"
      />
    </PopoverPanel>
  </Popover>
</template>
