<script setup lang="ts">
import { inject } from 'vue'
import type { EditorOptions } from '../../types'
import MenuWrapper from '../MenuWrapper.vue'
import Image from './Image.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_CONFIG, EDITOR_KEY } from '../../keys'
import EditorButton from '../EditorButton.vue'

const props = defineProps<{
  imageOptions?: EditorOptions['image']
}>()

const editor = inject<Ref<Editor>>(EDITOR_KEY)
const config = inject<EditorOptions>(EDITOR_CONFIG)
</script>

<template>
  <MenuWrapper>
    <EditorButton
      icon="ri-mark-pen-line"
      name="Highlight"
      @click="
        editor
          ?.chain()
          .focus()
          .toggleHighlight({ color: config?.highlight?.color ?? '#fde68a' })
          .run()
      "
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
    <EditorButton
      icon="ri-divide-line"
      name="Divider"
      @click="editor?.chain().focus().setHorizontalRule().run()"
    />
    <EditorButton
      icon="ri-double-quotes-l"
      name="Blockquote"
      @click="editor?.chain().focus().toggleBlockquote().run()"
      :active="editor?.isActive('blockquote')"
    />
  </MenuWrapper>
</template>
