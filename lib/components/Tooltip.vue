<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    compact?: boolean
    position?: string
    activator?: string
  }>(),
  {
    compact: true,
    position: 'top-7 left-2',
    activator: 'group-hover:opacity-100'
  }
)

const classes = [
  'transition-opacity duration-200 delay-500 opacity-0 absolute rounded-full py-1 px-3 bg-[rgba(35,35,35,0.6)] z-10 text-slate-200',
  {
    'w-full': !props.compact,
    'w-fit': props.compact
  },
  props.position,
  props.activator
]
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
