<script setup lang="ts">
import type { NodeViewProps } from '@tiptap/core'
import { NodeViewWrapper } from '@tiptap/vue-3'

const props = defineProps<NodeViewProps>()
</script>

<template>
  <NodeViewWrapper>
    <div class="p-1 rounded-lg border border-solid border-slate-400 w-fit relative">
      <iframe v-bind="props.node.attrs"></iframe>
      <button
        class="absolute -top-5 -right-3 rounded-full py-1 px-2.5 bg-white border border-solid border-slate-400 text-slate-700 text-lg transition-shadow duration-200 hover:shadow-lg hover:cursor-pointer"
        @click="props.deleteNode()"
      >
        <v-icon name="ri-close-circle-line" />
      </button>
    </div>
  </NodeViewWrapper>
</template>
