<script setup lang="ts">
import EditorFontType from './Menus/EditorFontType.vue'
import type { EditorOptions } from '../types'
import Color from './Menus/Color.vue'
import FontStyle from './Menus/FontStyle.vue'
import ExtraMarks from './Menus/ExtraMarks.vue'
import TextAlign from './Menus/TextAlign.vue'
import ListItem from './Menus/ListItem.vue'
import EmbedMenu from './Menus/Embeds/EmbedMenu.vue'
import History from './Menus/History.vue'
import ExtraNodes from './Menus/ExtraNodes.vue'

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
    <TextAlign />
    <ListItem />
    <ExtraMarks />
    <ExtraNodes :image-options="props.options?.image" />
    <EmbedMenu />
    <History />
  </div>
</template>
