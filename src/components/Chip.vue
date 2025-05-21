<template>
  <component
    :is="tag"
    :class="[
      'chip',
      {
        'chip-simple': simple,
        'chip-lg': large,
        'chip-disabled': disabled,
        [`chip-${color}`]: !!color
      }
    ]"
  >
    <span class="chip-label">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

withDefaults(defineProps<{
  tag?: string | object
  simple?: boolean
  large?: boolean
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string
}>(), {
  tag: 'div',
  simple: false,
  large: false,
  disabled: false,
  color: ''
})
</script>
