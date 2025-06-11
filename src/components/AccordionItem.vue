<script setup lang="ts">
interface AccordionItemProps {
  tag?: string
}

withDefaults(defineProps<AccordionItemProps>(), {
  tag: 'div'
})
</script>

<template>
  <component
    :is="tag"
    class="accordion-item"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
