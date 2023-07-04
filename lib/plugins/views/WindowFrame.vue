<script setup lang="ts">
import type { NodeViewProps } from '@tiptap/core'
import { NodeViewWrapper } from '@tiptap/vue-3'
import DeleteNodeButton from './DeleteNodeButton.vue'

const props = defineProps<NodeViewProps>()
</script>

<template>
  <NodeViewWrapper>
    <div class="p-1 rounded-lg border border-solid border-slate-400 w-fit relative">
      <iframe v-bind="props.node.attrs"></iframe>
      <DeleteNodeButton @delete-node="props.deleteNode" />
    </div>
  </NodeViewWrapper>
</template>
