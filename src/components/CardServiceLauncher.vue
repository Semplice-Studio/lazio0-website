<template>
  <Card spacing class="card-bg">
    <BCardBody>
      <div class="categoryicon-top text-primary">
        <Icon icon="it-settings" />
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif m-0" v-html="abstract" />
        <div v-if="htmlContent" class="card-abstract font-sans-serif m-0" v-html="htmlContent" />
      </BCardText>
      <NuxtLinkLocale class="read-more" :to="`/${buttonLink?.entry?.uri}`">
        {{ buttonLink?.label || buttonLink?.defaultLabel }}<!--
        --><Icon icon="it-arrow-right" />
      </NuxtLinkLocale>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import type { ServiceItemFragment } from '@/graphql'

withDefaults(defineProps<ServiceItemFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

// const category = computed(() => props.serviceCategories?.[0])
</script>

<style scoped>
.card-abstract,
.card-abstract > * {
  font-size: 1rem;
}
</style>
