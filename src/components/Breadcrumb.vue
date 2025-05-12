<template>
  <component
    :is="tag"
    class="breadcrumb-container"
    :aria-label="ariaLabel ?? 'Percorso di navigazione'"
  >
    <component
      :is="listTag"
      :class="['breadcrumb', {
        'dark px-3': dark,
      }]"
    >
      <slot />
    </component>
  </component>
</template>

<script setup lang="ts">
interface BreadcrumbProps {
  /** Use a custom root tag/component (default: 'nav') */
  tag?: string

  /** Use a custom list tag/component (default: 'ol') */
  listTag?: string

  /** Apply dark theme styling (e.g., for dark background) */
  dark?: boolean

  /** Accessible label for the breadcrumb navigation */
  ariaLabel?: string
}

// Props with default values
withDefaults(defineProps<BreadcrumbProps>(), {
  tag: 'nav',
  listTag: 'ol',
  dark: false
})
</script>
