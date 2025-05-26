<template>
  <li>
    <component
      :is="tagComputed"
      class="list-item"
      :class="{
        active,
        disabled,
        header,
        divider,
        large,
        'medium': bold,
        'dropdown-item': inDropdown
      }"
      :link="link"
      :tabindex="inDropdown ? 0 : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

import type { CraftLinkProps } from '@/components/CraftLink.vue'
import { CraftLink } from '#components'

interface LinkListItemProps {
  active?: boolean
  disabled?: boolean
  large?: boolean
  bold?: boolean
  header?: boolean
  divider?: boolean
  inDropdown?: boolean
  tag?: string | Component
  link: Partial<CraftLinkProps>
}

const props = withDefaults(defineProps<LinkListItemProps>(), {
  tag: CraftLink
})

const tagComputed = computed(() => {
  if (props.header) return 'h3'
  if (props.divider) return 'span'
  return props.tag
})

// const role = computed(() => (attrs.onClick ? 'button' : inDropdown ? 'menuitem' : undefined))

// function onClick(event: MouseEvent) {
//   if (disabled) {
//     event.preventDefault()
//   }
// }
</script>
