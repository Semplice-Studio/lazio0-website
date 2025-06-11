<template>
  <div class="row">
    <div v-if="withSidebar" class="col-12 col-lg-4">
      <p v-if="navigationTitle" class="mb-4 text-uppercase">{{ navigationTitle }}</p>
      <PageAccordionNav :navigation="navigation" />
    </div>
    <div class="it-page-sections-container col-12" :class="{ 'col-lg-8': withSidebar }">
      <Blocks :blocks="blocks" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { PagesEntryFragment } from '@/graphql'

defineProps({
  blocks: {
    type: Array as () => CraftMatrixField[],
    required: true
  },
  navigation: {
    type: Array as PropType<PagesEntryFragment['sidebarNavigation']>,
    default: () => ([])
  },
  navigationTitle: {
    type: String,
    default: null
  },
  withSidebar: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.it-page-sections-container > :not([hidden]) ~ :not([hidden]) {
  margin-top: 2rem;
}
</style>
