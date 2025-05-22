<template>
  <Card spacing class="card-bg card-big">
    <BCardBody>
      <div v-if="category" class="categoryicon-top text-primary">
        <!-- <Icon icon="it-settings" /> -->
        <ServiceLineIcon class="icon" />
        <span class="text text-primary">{{ category.title }}</span>
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif" v-html="abstract" />
      </BCardText>
      <NuxtLinkLocale class="read-more" :to="{ name: 'services-slug', params: { slug } }">
        Approfondisci<!--
        --><Icon icon="it-arrow-right" />
      </NuxtLinkLocale>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import ServiceLineIcon from '@/assets/icons/service-line.svg'
import type { CardServicesFragment } from '@/graphql'

const props = withDefaults(defineProps<CardServicesFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

const category = computed(() => props.serviceCategories?.[0])
</script>
