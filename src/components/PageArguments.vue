<template>
  <div v-if="tags.length > 0">
    <div class="mb-2">
      <p>Argomenti:</p>
    </div>
    <div class="it-tags-list">
      <Chip v-for="tag in tags" :key="tag.id" simple color="primary">
        {{ tag.title }}
      </Chip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TagFragment } from '@/graphql'

defineProps({
  tags: {
    type: Array as () => TagFragment[],
    default: () => []
  }
})
</script>
