<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="flex justify-between py-2 px-5">
      <span>Paragraph</span>
      <v-icon name="ri-arrow-drop-down-line"></v-icon>
    </div>
    <div
      class="absolute bg-white border border-solid border-slate-400 top-8 left-3 p-5 rounded-lg z-10"
    >
      <div
        class="flex gap-7 items-center hover:bg-slate-50 transition-colors duration-200 hover:cursor-pointer rounded-lg p-2"
      >
        <div class="p-5 rounded-lg bg-sky-100 text-sky-600">
          <v-icon name="ri-paragraph" />
        </div>
        <div class="whitespace-nowrap">
          <p class="m-0 text-lg">Paragraph</p>
          <span class="block mt-1">Set selection to paragraph</span>
        </div>
      </div>
    </div>
  </div>
</template>
