<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { NewsEntryFragment } from '@/graphql'
import PageNewsGQL from '@/graphql/PageNews.gql'

defineI18nRoute({
  paths: {
    en: '/news/[slug]', // -> accessible at /en/news/[slug]
    it: '/novita/[slug]' // -> accessible at /it/novita/[slug]
  }
})

const route = useRoute()
const slug = route.params.slug as string

const { data, status } = await useCraftPage<NewsEntryFragment>('news-' + slug, PageNewsGQL, { slug })

const blocks = computed(() => (data?.pageBlocks || []) as CraftMatrixField[])
const featuredImage = computed(() => data.image?.[0])
</script>

<template>
  <div v-if="status === 'success'">
    <section class="container my-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'news' }">Novità</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="container my-5">
      <PageHero :abstract="data.htmlContent" :button-link="data.buttonLink" :title="data.title" />
    </section>
    <PageHeroImage :image="featuredImage" />
    <section v-if="blocks.length > 0" class="container my-5">
      <PageContent :blocks="blocks" />
    </section>
  </div>
</template>
