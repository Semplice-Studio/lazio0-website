<script setup lang="ts">
interface ListProps {
  tag?: string
  noWrapper?: boolean
}

withDefaults(defineProps<ListProps>(), {
  tag: 'div',
  class: '',
  noWrapper: false
})
</script>

<template>
  <ul
    v-if="noWrapper"
    class="it-list"
  >
    <slot />
  </ul>

  <component
    :is="tag"
    v-else
    class="it-list-wrapper"
  >
    <ul class="it-list">
      <slot />
    </ul>
  </component>
</template>
