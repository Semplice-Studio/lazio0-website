<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="row mb-4">
      <div class="col-12">
        <h2 :id="`title-${uid}`">{{ title }}</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in newsEntries" :key="index" class="col-12 col-lg-4">
        <CardNews v-bind="item" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { CardNewsFragment } from '@/graphql'

defineProps({
  title: {
    type: String,
    default: ''
  },
  newsEntries: {
    type: Array as PropType<CardNewsFragment[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>
