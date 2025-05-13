<script setup lang="ts">
interface Props {
  label: string
  iconName?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  iconName: 'it-search',
  href: undefined
})
</script>

<template>
  <div class="it-search-wrapper">
    <span v-if="label" class="d-none d-md-block">{{ label }}</span>
    <a class="search-link rounded-icon" :aria-label="label" :href="href">
      <Icon :icon="iconName" />
    </a>
  </div>
</template>
