<script setup lang="ts">
import { SLIM } from '@/composables/useHeaderContext'

const type = useHeaderContext()
</script>

<template>
  <div
    :class="{
      'it-header-slim-right-zone': type === SLIM,
      'it-right-zone': type !== SLIM
    }">
    <slot />
  </div>
</template>
