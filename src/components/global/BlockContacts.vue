<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="row mb-4">
      <div class="col-12">
        <h2 :id="`title-${uid}`">{{ title }}</h2>
        <div v-if="abstract" class="text-md-left" v-html="abstract" />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in contactItems"
        :key="index"
        class="col-6"
      >
        <Card
          teaser
          class="rounded shadow p-4"
        >
          <BCardBody>
            <BCardTitle class="h5">{{ item.title }}</BCardTitle>
            <BCardText class="pt-0 font-sans-serif">
              <div v-if="item.address" v-html="item.address" />
              <a v-if="item.email" class="text-decoration-none" :href="item.email.url">
                {{ item.email.label || item.email.defaultLabel }}
              </a>
            </BCardText>
          </BCardBody>
        </Card>
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
