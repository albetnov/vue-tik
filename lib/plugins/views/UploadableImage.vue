<script setup lang="ts">
import type { NodeViewProps } from '@tiptap/core'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { onMounted, reactive, ref } from 'vue'
import { computed } from 'vue'
import DimensionInput from './DimensionInput.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'

const props = defineProps<NodeViewProps>()

const options = computed(() => props.extension.options)

const isOpen = ref(false)

const dimension = reactive({
  width: 0,
  height: 0
})

const imgRef = ref<HTMLImageElement>()

onMounted(() => {
  if (!imgRef.value) return

  imgRef.value.addEventListener('load', () => {
    dimension.width = imgRef.value?.naturalWidth ?? 0
    dimension.height = imgRef.value?.naturalHeight ?? 0
    props.updateAttributes({
      width: dimension.width,
      height: dimension.height
    })
  })
})

const openImagePanel = (event: Event) => {
  event.stopImmediatePropagation()
  isOpen.value = true
  window.addEventListener(
    'click',
    () => {
      isOpen.value = false
    },
    { once: true }
  )
}
</script>

<template>
  <NodeViewWrapper :class="['relative w-fit', { inline: options.inline }]" @click="openImagePanel">
    <img
      ref="imgRef"
      :src="props.node.attrs.src"
      :width="props.node.attrs.width"
      :height="props.node.attrs.height"
      :class="[
        props.node.attrs.class,
        {
          'border-2 border-solid border-zinc-500': props.selected
        }
      ]"
      :alt="props.node.attrs.alt"
      :title="props.node.attrs.title"
      :data-image-id="props.node.attrs.imageId"
      draggable="true"
      data-drag-handle
    />
    <div
      v-if="isOpen"
      @click="$event.stopPropagation()"
      class="py-2 px-6 bg-white shadow absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg border border-solid border-slate-400"
    >
      <div class="flex items-center gap-2 justify-center">
        <DimensionInput
          @input="props.updateAttributes({ width: $event.target.value })"
          :value="props.node.attrs.width"
        />
        <span class="text-lg font-bold">/</span>
        <DimensionInput
          @input="props.updateAttributes({ height: $event.target.value })"
          :value="props.node.attrs.height"
        />
      </div>
      <div class="flex items-center gap-3 justify-center flex-nowrap">
        <PrimaryButton @click="props.updateAttributes({ width: dimension.width })"
          >Full Width</PrimaryButton
        >
        <PrimaryButton @click="props.updateAttributes({ height: dimension.height })">
          Full Height
        </PrimaryButton>
        <PrimaryButton
          @click="props.updateAttributes({ width: dimension.width, height: dimension.height })"
        >
          Auto
        </PrimaryButton>
      </div>
      <PrimaryButton class="mt-3 mx-auto block" @click="props.deleteNode()">Delete</PrimaryButton>
    </div>
    <NodeViewContent></NodeViewContent>
  </NodeViewWrapper>
</template>
