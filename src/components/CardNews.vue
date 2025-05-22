<template>
  <Card class="card-img pb-5 no-after">
    <div class="img-responsive-wrapper">
      <div class="img-responsive img-responsive-panoramic">
        <figure class="img-wrapper">
          <CraftImage v-bind="featuredImage" />
        </figure>
        <div class="card-calendar bg-primary text-white d-flex flex-column justify-content-center">
          <span class="card-date">
            <NuxtTime day="numeric" :datetime="new Date(date)" />
          </span>
          <span class="card-day">
            <NuxtTime month="long" :datetime="new Date(date)" />
          </span>
        </div>
      </div>
    </div>
    <BCardBody>
      <div v-if="category" class="categoryicon-top">
        <Icon icon="it-calendar" />
        <span class="text text-primary">{{ category.title }}</span>
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif mb-4" v-html="abstract" />
      </BCardText>
      <NuxtLinkLocale class="read-more" :to="{ name: 'news-slug', params: { slug } }">
        Leggi di più<!--
        --><Icon icon="it-arrow-right" />
      </NuxtLinkLocale>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import type { CardNewsFragment } from '@/graphql'

const props = withDefaults(defineProps<CardNewsFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

const category = computed(() => props.newsCategories?.[0])
const featuredImage = computed(() => props.image?.[0])
</script>
