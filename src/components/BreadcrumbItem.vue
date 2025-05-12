<template>
  <component
    :is="tag"
    class="breadcrumb-item"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface BreadcrumbItemProps {
  /** Use a custom root tag/component (default: 'li') */
  tag?: string
}

// Props with default values
withDefaults(defineProps<BreadcrumbItemProps>(), {
  tag: 'li'
})
</script>
