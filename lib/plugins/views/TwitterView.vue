<script setup lang="ts">
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import { onMounted, ref } from 'vue'
import DeleteNodeButton from './DeleteNodeButton.vue'

const props = defineProps<NodeViewProps>()

const isLoading = ref(false)
const tweetContainer = ref<HTMLDivElement>()

onMounted(async () => {
  try {
    isLoading.value = true
    if (!window.twttr) {
      console.error(
        `No available twitter script detected. Make sure to include: <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />`
      )
      props.deleteNode()
      return
    }

    const url = props.node.attrs['data-twitter-url']
    const id = url.match(/\/status\/(\d+)/)[1]
    await window.twttr.widgets.load(tweetContainer.value)
    await window.twttr.widgets.createTweet(id, tweetContainer.value, {
      theme: 'light'
    })
    props.updateAttributes({
      'data-twitter-id': id
    })
  } catch (err) {
    console.error('Something went wrong when rendering tweet: ', err)
    props.deleteNode()
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <NodeViewWrapper class="relative w-fit">
    <p v-if="isLoading" class="p-3 border border-dotted border-slate-700 rounded-lg my-2">
      Fetching Twitter Data...
    </p>
    <div ref="tweetContainer" v-bind="props.node.attrs" />
    <DeleteNodeButton @delete-node="props.deleteNode" />
  </NodeViewWrapper>
</template>
