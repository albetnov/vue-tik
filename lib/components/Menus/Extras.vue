<script setup lang="ts">
import { inject } from 'vue'
import type { EditorOptions } from '../../types'
import MenuWrapper from '../MenuWrapper.vue'
import Image from './Image.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'
import EditorButton from '../EditorButton.vue'

const props = defineProps<{
  imageOptions?: EditorOptions['image']
}>()

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      icon="ri-mark-pen-line"
      name="Highlight"
      @click="editor?.chain().focus().toggleHighlight().run()"
      :active="editor?.isActive('highlight')"
    />
    <EditorButton
      icon="ri-code-line"
      name="Code"
      @click="editor?.chain().focus().toggleCode().run()"
      :active="editor?.isActive('code')"
    />
    <EditorButton
      icon="ri-code-box-line"
      name="Codeblock"
      @click="editor?.chain().focus().toggleCodeBlock().run()"
      :active="editor?.isActive('codeBlock')"
    />
    <Image :options="props?.imageOptions" />
    <EditorButton icon="ri-table-line" name="Tables" />
    <EditorButton icon="ri-divide-line" name="Divider" />
    <EditorButton icon="ri-double-quotes-l" name="Blockquote" />
  </MenuWrapper>
</template>
