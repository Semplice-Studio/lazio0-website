<script setup lang="ts">
interface AccordionProps {
  /** Custom tag to render as root element */
  tag?: string
  /** Background style when active or hover */
  background?: 'active' | 'hover'
  /** Show left icon state */
  iconLeft?: boolean
}

withDefaults(defineProps<AccordionProps>(), {
  tag: 'div',
  iconLeft: false,
  background: undefined
})
</script>

<template>
  <component
    :is="tag"
    :class="{
      accordion: true,
      'accordion-background-active': background === 'active',
      'accordion-background-hover': background === 'hover',
      'accordion-left-icon': iconLeft
    }"
  >
    <slot />
  </component>
</template>
