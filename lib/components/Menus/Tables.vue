<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import EditorButton from '../EditorButton.vue'
import EditorPopover from '../EditorPopover.vue'
import EditorInput from '../EditorInput.vue'
import { reactive } from 'vue'
import PrimaryButton from '../PrimaryButton.vue'
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{
  editor?: Editor
}>()

const settings = reactive({
  rows: 0,
  columns: 0,
  withHeader: false
})
</script>

<template>
  <EditorPopover class="py-2 px-4">
    <template #button>
      <PopoverButton as="template">
        <EditorButton icon="ri-table-line" name="Tables" />
      </PopoverButton>
    </template>
    <template #panel>
      <label>
        Rows
        <EditorInput type="number" v-model="settings.rows" />
      </label>

      <label class="mt-3 block">
        Columns
        <EditorInput type="number" v-model="settings.columns" />
      </label>

      <label class="block mt-3">
        With Header:
        <EditorInput type="checkbox" v-model="settings.withHeader" />
      </label>

      <PrimaryButton
        @click="
          props.editor
            ?.chain()
            .focus()
            .insertTable({
              cols: settings.columns,
              rows: settings.rows,
              withHeaderRow: settings.withHeader
            })
            .run()
        "
        class="mt-5 py-2 px-3.5 rounded-full"
      >
        <v-icon name="ri-save-line" />
      </PrimaryButton>
    </template>
  </EditorPopover>
</template>
