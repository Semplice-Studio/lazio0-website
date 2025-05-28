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
  <SiteSearch :icon-name="iconName" :label="label" />
</template>
