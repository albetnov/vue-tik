<script setup lang="ts">
import { inject } from 'vue'
import type { EditorOptions } from '../../types'
import MenuWrapper from '../MenuWrapper.vue'
import Image from './Image.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'
import EditorButton from '../EditorButton.vue'
import CodeBlock from './CodeBlock.vue'

const props = defineProps<{
  imageOptions?: EditorOptions['image']
}>()

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      icon="ri-code-line"
      name="Code"
      @click="editor?.chain().focus().toggleCode().run()"
      :active="editor?.isActive('code')"
    />
    <CodeBlock :editor="editor" />
    <Image :options="props?.imageOptions" />
    <EditorButton icon="ri-table-line" name="Tables" />
    <EditorButton icon="ri-divide-line" name="Divider" />
    <EditorButton icon="ri-double-quotes-l" name="Blockquote" />
  </MenuWrapper>
</template>
