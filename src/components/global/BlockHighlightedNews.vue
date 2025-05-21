<template>
  <Section
    :id="uid"
    class="it-page-section px-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <h2 :id="`title-${uid}`" class="primary-color-a9">{{ title }}</h2>
        </div>
      </div>
      <div class="row ps-lg-5">
        <div v-for="(item, index) in newsEntries" :key="index" class="col-12 col-lg-4">
          <div class="card-wrapper">
            <CardNews v-bind="item" />
          </div>
        </div>
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
