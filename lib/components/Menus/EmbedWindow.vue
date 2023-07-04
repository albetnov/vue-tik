<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import EditorPopover from '../EditorPopover.vue'
import EditorButton from '../EditorButton.vue'
import PrimaryButton from '../PrimaryButton.vue'
import type { Editor } from '@tiptap/vue-3'
import { ref } from 'vue'

const props = defineProps<{
  editor?: Editor
}>()

const src = ref('')
</script>

<template>
  <EditorPopover class="py-2 px-3">
    <template #button>
      <PopoverButton as="template">
        <EditorButton icon="ri-window-line" name="Embed Frame" />
      </PopoverButton>
    </template>
    <template #panel>
      <label>
        Url:
        <input
          type="text"
          v-model="src"
          class="block mt-2 py-2 px-4 border border-solid border-slate-400 focus:outline-none focus:ring focus:ring-zinc-300 rounded-lg"
          placeholder="https://example.com"
        />
      </label>
      <PrimaryButton
        @click="props.editor?.chain().focus().setIframe({ src }).run()"
        class="mt-5 py-2 px-5"
      >
        Save
      </PrimaryButton>
    </template>
  </EditorPopover>
</template>
