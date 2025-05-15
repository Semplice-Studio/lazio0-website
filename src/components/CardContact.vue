<template>
  <Card
    teaser
    class="rounded shadow p-4 border-bottom-card"
  >
    <BCardBody>
      <BCardTitle class="h5 text-primary">{{ title }}</BCardTitle>
      <BCardText class="pt-0 font-sans-serif">
        <div v-if="address" v-html="address" />
        <a v-if="email" :href="email.url">
          {{ email.label || email.defaultLabel }}
        </a>
      </BCardText>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import type { ContactItemFragment } from '@/graphql'

defineProps<ContactItemFragment>()
</script>
