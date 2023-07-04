<script setup lang="ts">
import { inject } from 'vue'
import EditorButton from '../../EditorButton.vue'
import MenuWrapper from '../../MenuWrapper.vue'
import type { Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EDITOR_KEY } from '../../../keys'
import EmbedPopover from './EmbedPopover.vue'

const editor = inject<Ref<Editor>>(EDITOR_KEY)
</script>

<template>
  <MenuWrapper>
    <EmbedPopover
      icon="ri-links-line"
      name="Link"
      label="Url"
      placeholder="https://example.com/..."
      @click="editor?.chain().focus().toggleLink({ href: $event }).run()"
      :active="editor?.isActive('link')"
    />
    <EmbedPopover
      icon="ri-youtube-line"
      name="Youtube"
      placeholder="https://youtube.com/..."
      label="Youtube Url"
      @click="editor?.chain().focus().setYoutubeVideo({ src: $event }).run()"
    />
    <EmbedPopover
      icon="ri-twitter-line"
      name="Twitter"
      label="Twitter Url"
      placeholder="https://twitter.com/..."
      @click="editor?.chain().focus().setTwitter($event).run()"
    />
    <EmbedPopover
      icon="ri-window-line"
      name="Embed Frame"
      label="Url"
      placeholder="https://example.com/..."
      @click="editor?.chain().focus().setIframe({ src: $event }).run()"
    />
  </MenuWrapper>
</template>
