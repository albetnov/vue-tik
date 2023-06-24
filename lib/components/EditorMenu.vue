<script setup lang="ts">
import EditorButton from './EditorButton.vue'
import EditorFontType from './EditorFontType.vue'
import MenuWrapper from './MenuWrapper.vue'
</script>

<template>
  <div class="bg-slate-100 rounded-full py-1 px-2 flex items-center gap-5">
    <MenuWrapper>
      <EditorFontType />
    </MenuWrapper>
    <MenuWrapper>
      <input type="color" class="border-none rounded-full w-8 h-8" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton name="ri-bold" />
      <EditorButton name="ri-italic" />
      <EditorButton name="ri-underline" />
      <EditorButton name="ri-strikethrough" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton name="ri-align-left" />
      <EditorButton name="ri-align-center" />
      <EditorButton name="ri-align-right" />
    </MenuWrapper>
    <MenuWrapper>
      <EditorButton name="ri-arrow-go-back-fill" />
      <EditorButton name="ri-arrow-go-forward-fill" />
    </MenuWrapper>
  </div>
</template>
