<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import type { NodeViewProps } from '@tiptap/core'
import { NodeViewContent, NodeViewWrapper } from '@tiptap/vue-3'
import { OhVueIcon } from 'oh-vue-icons'
import { computed } from 'vue'

const props = defineProps<NodeViewProps>()

export interface Language {
  id: number
  name: string
  value: string
}

const langs: Language[] = [
  { id: 1, name: 'Auto', value: 'auto' },
  { id: 2, name: 'HTML', value: 'html' },
  { id: 3, name: 'CSS', value: 'css' },
  { id: 4, name: 'JavaScript', value: 'js' },
  { id: 5, name: 'TypeScript', value: 'ts' },
  { id: 6, name: 'PHP', value: 'php' },
  { id: 7, name: 'JSON', value: 'json' }
]

const selectedLang = computed<Language>({
  get() {
    const index = langs.findIndex((item) => item.value === props.node.attrs.language)
    return langs[index] ?? langs[0]
  },
  set(language: Language) {
    props.updateAttributes({ language: language.value })
  }
})
</script>

<template>
  <NodeViewWrapper class="relative bg-zinc-700 rounded-lg px-3 py-2 text-slate-200">
    <Listbox v-model="selectedLang" v-slot="{ open }">
      <ListboxButton
        contenteditable="false"
        class="absolute top-3 right-2 bg-white text-slate-700 py-2 px-4 shadow rounded-lg w-fit flex justify-between"
      >
        {{ selectedLang.name }}
        <OhVueIcon v-if="open" name="ri-arrow-up-s-line"></OhVueIcon>
        <OhVueIcon v-else name="ri-arrow-down-s-line"></OhVueIcon>
      </ListboxButton>
      <ListboxOptions
        contenteditable="false"
        class="mt-2 shadow px-0 py-2 rounded-lg w-36 bg-white border border-solid border-slate-400 absolute right-2 top-5 focus:outline-none"
      >
        <ListboxOption
          as="template"
          v-for="lang in langs"
          :key="lang.id"
          :value="lang"
          v-slot="{ selected }"
        >
          <li
            class="list-none text-slate-700 rounded-lg hover:bg-slate-50 hover:text-slate-800 hover:cursor-pointer py-2 px-5"
          >
            <OhVueIcon v-if="selected" name="ri-arrow-right-s-line" class="mr-1"></OhVueIcon>
            {{ lang.name }}
          </li>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <pre class="!whitespace-normal">
      <code class="font-medium text-[0.9rem]">
        <NodeViewContent />
      </code>
    </pre>
  </NodeViewWrapper>
</template>
