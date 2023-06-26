<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
import EditorButton from '../EditorButton.vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from 'lib/types'

const editor = inject(EDITOR_KEY) as Ref<Editor>

const imagePlaceholder = ref<HTMLInputElement>()

const appendImage = (e: Event) => {
  const val = e.target as HTMLInputElement

  if (!val.files || val.files.length <= 0 || !editor.value) return

  val.files[0].arrayBuffer().then((buffer) => {
    const base64 = btoa(
      new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )
    editor.value
      .chain()
      .focus()
      .setImage({ src: `data:image/png;base64,${base64}` })
      .run()
  })
}
</script>

<template>
  <EditorButton icon="ri-image-line" name="Image" @click="imagePlaceholder?.click()" />
  <input
    type="file"
    hidden
    ref="imagePlaceholder"
    accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
    @change="appendImage"
  />
</template>
