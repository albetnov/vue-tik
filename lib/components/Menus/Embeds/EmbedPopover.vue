<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import EditorButton from '../../EditorButton.vue'
import EditorInput from '../../EditorInput.vue'
import EditorPopover from '../../EditorPopover.vue'
import PrimaryButton from '../../PrimaryButton.vue'
import { ref } from 'vue'

const props = defineProps<{
  icon: string
  name: string
  label: string
  placeholder: string
}>()

const emits = defineEmits<{
  click: [value: string]
}>()

const src = ref('')
</script>

<template>
  <EditorPopover class="px-3 py-2">
    <template #button>
      <PopoverButton as="template">
        <EditorButton :icon="props.icon" :name="props.name" />
      </PopoverButton>
    </template>
    <template #panel>
      <label>
        {{ props.label }}
        <EditorInput type="text" v-model="src" :placeholder="props.placeholder" />
      </label>
      <PrimaryButton @click="emits('click', src)" class="mt-5 py-2 px-3.5 rounded-full">
        <v-icon name="ri-save-line"></v-icon>
      </PrimaryButton>
    </template>
  </EditorPopover>
</template>
