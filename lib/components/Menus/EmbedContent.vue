<script setup lang="ts">
import { inject } from 'vue'
import EditorButton from '../EditorButton.vue'
import MenuWrapper from '../MenuWrapper.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../keys'
import EmbedWindow from './EmbedWindow.vue'
import EmbedTwitter from './EmbedTwitter.vue'

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EditorButton icon="ri-links-line" name="Link" />
    <EditorButton icon="ri-youtube-line" name="Youtube" />
    <EmbedTwitter :editor="editor" />
    <EmbedWindow :editor="editor" />
  </MenuWrapper>
</template>
