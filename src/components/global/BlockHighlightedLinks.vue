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
      <div
        v-for="(item, index) in linkItems"
        :key="index"
        class="col-4"
      >
        <CardLink v-bind="item" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment } from '@/graphql'

interface LinkItems {
  buttonLink: ButtonLinkFragment
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  linkItems: {
    type: Array as PropType<LinkItems[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>
