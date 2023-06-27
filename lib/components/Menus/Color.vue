<script setup lang="ts">
import { inject } from 'vue'
import Tooltip from '../Tooltip.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'
import MenuWrapper from '../MenuWrapper.vue'

const editor = inject<Ref<Editor>>(EDITOR_KEY)

const setColor = (e: Event) => {
  const val = (e.target as HTMLInputElement).value

  if (!editor || !val) return

  editor.value
    .chain()
    .focus()
    .setColor((e.target as HTMLInputElement).value)
    .run()
}
</script>

<template>
  <MenuWrapper class="relative">
    <input
      @input="setColor"
      :value="editor?.getAttributes('textStyle').color"
      type="color"
      class="peer border-none rounded-full w-8 h-8"
    />
    <Tooltip activator="peer-hover:opacity-100" position="-left-2 top-5">Color</Tooltip>
  </MenuWrapper>
</template>
