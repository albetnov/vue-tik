<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import EditorPopover from '../EditorPopover.vue'
import EditorInput from '../EditorInput.vue'
import PrimaryButton from '../PrimaryButton.vue'
import { ref } from 'vue'
import type { Editor } from '@tiptap/core'
import EditorButton from '../EditorButton.vue'

const props = defineProps<{
  editor?: Editor
}>()

const src = ref('')
</script>

<template>
  <EditorPopover class="px-3 py-2"> 
    <template #button>
      <PopoverButton as="template">
        <EditorButton icon="ri-twitter-line" name="Twitter" />
      </PopoverButton>
    </template>
    <template #panel>
      <label>
        Twitter Url:
        <EditorInput type="text" v-model="src" placeholder="https://twitter.com/..." />
      </label>
      <PrimaryButton
        @click="props.editor?.chain().focus().setTwitter(src).run()"
        class="mt-5 py-2 px-5"
      >
        Save
      </PrimaryButton>
    </template>
  </EditorPopover>
</template>
