<script setup lang="ts">
interface NavProps {
  /** Whether to render as vertical nav (bool or 'xs') */
  vertical?: boolean | 'xs'
  /** Custom tag to render */
  tag?: string
  /** Add secondary nav style */
  secondary?: boolean
  /** Render tabs */
  tabs?: boolean
  /** Render pills */
  pills?: boolean
  /** Render as card navigation */
  card?: boolean
  /** Render inside navbar */
  navbar?: boolean
  /** Equal width items */
  justified?: boolean
  /** Fill full width */
  fill?: boolean
  /** Align content horizontally */
  horizontal?: 'center' | 'end'
}

withDefaults(defineProps<NavProps>(), {
  tag: 'ul',
  vertical: false,
  horizontal: 'center'
})
</script>

<template>
  <nav aria-label="Principale">
    <BNav
      :is="tag"
      role="tablist"
      :class="{
        'navbar-secondary': secondary,
        'nav-tabs': tabs,
        'nav-pills': pills,
        'card-header-tabs': card,
        'navbar-nav': navbar,
        'nav-justified': justified,
        'nav-fill': fill,
        'flex-column': vertical === true || vertical === 'xs',
        [`justify-content-${horizontal}`]: horizontal
      }"
    >
      <slot />
    </BNav>
  </nav>
</template>
