<script setup lang="ts">
import EditorButton from './EditorButton.vue'
import EditorFontType from './Menus/EditorFontType.vue'
import MenuWrapper from './MenuWrapper.vue'
import type { EditorOptions } from '../types'
import Color from './Menus/Color.vue'
import FontStyle from './Menus/FontStyle.vue'
import Extras from './Menus/Extras.vue'
import TextAlign from './Menus/TextAlign.vue'

const props = defineProps<{
  options?: EditorOptions
}>()
</script>

<template>
  <div
    class="bg-slate-100 md:rounded-lg rounded-xl 2xl:rounded-full py-1 px-2 flex items-center flex-wrap gap-5"
  >
    <EditorFontType />
    <Color />
    <FontStyle />
    <div class="flex gap-2 md:gap-5">
      <TextAlign />
      <MenuWrapper>
        <EditorButton icon="ri-list-ordered" name="Number List" />
        <EditorButton icon="ri-list-unordered" name="Bullet List" />
        <EditorButton icon="ri-task-line" name="Task List" />
      </MenuWrapper>
    </div>
    <Extras :image-options="props.options?.image" />
    <MenuWrapper>
      <EditorButton icon="ri-links-line" name="Link" />
      <EditorButton icon="ri-youtube-line" name="Youtube" />
      <EditorButton icon="ri-twitter-line" name="Twitter" />
      <EditorButton icon="ri-window-line" name="Embed Frame" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton icon="ri-arrow-go-back-fill" name="Undo" />
      <EditorButton icon="ri-arrow-go-forward-fill" name="Redo" />
    </MenuWrapper>
  </div>
</template>
