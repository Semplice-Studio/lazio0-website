<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="row mb-4">
      <div class="col-12">
        <h2 :id="`title-${uid}`" class="primary-color-a9 mb-3">{{ title }}</h2>
        <div v-if="abstract" class="text-md-left" v-html="abstract" />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in contactItems"
        :key="index"
        class="col-lg-6"
      >
        <CardContact v-bind="item" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment, ContactItemFragment } from '@/graphql'

defineProps({
  email: {
    type: Object as PropType<ButtonLinkFragment>,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  abstract: {
    type: String,
    default: ''
  },
  contactItems: {
    type: Array as PropType<ContactItemFragment[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>
