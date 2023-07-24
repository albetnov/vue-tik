<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'
import type { EditorOptions } from 'lib/types'
import { inject, type Ref } from 'vue'
import Image from './Image.vue'
import Tables from './Tables.vue'
import EditorButton from '../EditorButton.vue'
import MenuWrapper from '../MenuWrapper.vue'

const props = defineProps<{
  imageOptions?: EditorOptions['image']
}>()

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <Image :options="props?.imageOptions" />
    <Tables :editor="editor" />
    <EditorButton
      icon="ri-divide-line"
      name="Divider"
      @click="editor?.chain().focus().setHorizontalRule().run()"
    />
  </MenuWrapper>
</template>
