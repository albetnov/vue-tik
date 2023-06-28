<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import PopoverEditorButton from '../PopoverEditorButton.vue'
import EditorPopover from '../EditorPopover.vue'

const props = defineProps<{
  editor?: Editor
}>()

const langs = [
  { id: 1, name: 'Auto', value: 'auto' },
  { id: 2, name: 'HTML', value: 'html' },
  { id: 3, name: 'CSS', value: 'css' },
  { id: 4, name: 'JavaScript', value: 'js' },
  { id: 5, name: 'TypeScript', value: 'ts' },
  { id: 6, name: 'PHP', value: 'php' },
  { id: 7, name: 'JSON', value: 'json' }
]

const selectedLang = ref(langs[0])
</script>

<template>
  <EditorPopover class="py-2 px-3">
    <template #button>
      <PopoverEditorButton
        icon="ri-code-box-line"
        :active="props.editor?.isActive('codeBlock')"
        name="Codeblock"
      ></PopoverEditorButton>
    </template>
    <template #default>
      <p class="font-medium text-lg">Select Codeblock Language</p>
      <Listbox v-model="selectedLang" v-slot="{ open }">
        <ListboxButton
          class="bg-transparent border-none py-2 px-4 border border-solid border-slate-300 rounded-lg w-full flex justify-between"
        >
          {{ selectedLang.name }}
          <v-icon v-if="open" name="ri-arrow-up-s-line"></v-icon>
          <v-icon v-else name="ri-arrow-down-s-line"></v-icon>
        </ListboxButton>
        <ListboxOptions class="mt-2 shadow px-0 py-2 rounded-lg">
          <ListboxOption
            as="template"
            v-for="lang in langs"
            :key="lang.id"
            :value="lang"
            v-slot="{ selected }"
          >
            <li
              class="list-none rounded-lg hover:bg-zinc-600 hover:text-slate-200 hover:cursor-pointer py-2 px-5"
            >
              <v-icon v-if="selected" name="ri-arrow-right-s-line" class="mr-1"></v-icon>
              {{ lang.name }}
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Listbox>
      <button
        class="mt-5 py-2 px-5 rounded-lg bg-transparent border border-solid border-slate-400 hover:bg-zinc-600 hover:text-slate-100 hover:cursor-pointer"
        @click="
          props.editor
            ?.chain()
            .focus()
            .toggleCodeBlock(
              selectedLang.value !== 'auto'
                ? {
                    language: selectedLang.value
                  }
                : undefined
            )
            .run()
        "
      >
        Save
      </button>
    </template>
  </EditorPopover>
</template>
