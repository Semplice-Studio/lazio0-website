<template>
  <div class="it-search-wrapper" role="button" @click="open = true">
    <span v-if="label" class="d-none d-md-block">{{ label }}</span>
    <a class="search-link rounded-icon" :aria-label="label">
      <Icon :icon="iconName" />
    </a>
  </div>

  <Modal v-model:open="open" class="search-modal" size="lg">
    <h1> Cerca </h1>
  </Modal>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  iconName: string
}>()

const open = ref(false)
</script>
