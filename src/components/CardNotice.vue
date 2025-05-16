<template>
  <Card spacing class="card-bg card-big">
    <BCardBody>
      <div v-if="category" class="categoryicon-top text-primary">
        <Icon icon="it-file" />
        <span class="text text-primary">{{ category.title }}</span>
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif" v-html="abstract" />
      </BCardText>
      <NuxtLinkLocale class="read-more" :to="{ name: 'notices-slug', params: { slug } }">
        Approfondisci
        <Icon icon="it-arrow-right" />
      </NuxtLinkLocale>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import type { CardNoticesFragment } from '@/graphql'

const props = withDefaults(defineProps<CardNoticesFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

const category = computed(() => props.noticeCategories?.[0])
</script>
