<script setup lang="ts">
interface AccordionHeaderProps {
  tag?: string
  active?: boolean
  onToggle?: () => void
}

withDefaults(defineProps<AccordionHeaderProps>(), {
  tag: 'button',
  active: false,
  onToggle: undefined
})
</script>

<template>
  <div class="accordion-header">
    <component
      :is="tag"
      :aria-expanded="active ? 'true' : 'false'"
      :class="[
        'accordion-button',
        { collapsed: !active }
      ]"
      @click="onToggle"
    >
      <slot />
    </component>
    <slot name="append" />
  </div>
</template>
