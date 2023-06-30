<script setup lang="ts">
import { Popover, PopoverPanel } from '@headlessui/vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <Popover class="relative">
    <slot name="button"></slot>
    <PopoverPanel
      v-bind="$attrs"
      class="absolute bg-white border border-solid border-slate-400 rounded-lg z-10 w-fit text-nowrap"
    >
      <slot name="panel"></slot>
    </PopoverPanel>
    <slot></slot>
  </Popover>
</template>
