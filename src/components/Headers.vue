<script setup lang="ts">
interface HeadersProps {
  shadow?: boolean
  sticky?: boolean
}

withDefaults(defineProps<HeadersProps>(), {
  shadow: false,
  sticky: false
})
</script>

<template>
  <div
    class="it-header-wrapper"
    :class="{
      'it-shadow': shadow,
      'it-header-sticky': sticky,
      'sticky-top': sticky
    }"
  >
    <slot />
  </div>
</template>
