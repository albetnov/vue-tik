<script setup lang="ts">
import { ref } from 'vue'
import EditorButton from '../EditorButton.vue'
import type { EditorOptions } from 'lib/types'
import useImageUpload from 'lib/compositions/useImageUpload'

const props = defineProps<{
  options?: EditorOptions['image']
}>()

const imagePlaceholder = ref<HTMLInputElement>()
const appendImage = useImageUpload(props.options)
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
