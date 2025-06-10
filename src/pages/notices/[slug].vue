<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { NewsEntryFragment } from '@/graphql'
import PageNoticesGQL from '@/graphql/PageNotices.gql'

defineI18nRoute({
  paths: {
    en: '/notices/[slug]', // -> accessible at /en/news/[slug]
    it: '/concorsi/[slug]' // -> accessible at /it/novita/[slug]
  }
})

const route = useRoute()
const slug = route.params.slug as string

const { isPreview, previewTimestamp } = usePreview()

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const { data, status } = await useCraftPage<NewsEntryFragment>('notices-' + slug, PageNoticesGQL, { slug })
const blocks = computed(() => (data?.pageBlocks || []) as CraftMatrixField[])
</script>

<template>
  <div v-if="status === 'success'" :key="previewTimestamp">
    <section class="container my-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'notices' }">Bandi, Concorsi e Gare</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="container my-5">
      <PageHero :abstract="data.htmlContent" :button-link="data.buttonLink" :title="data.title" />
    </section>
    <section v-if="blocks.length > 0" class="container my-5">
      <PageContent :blocks="blocks" />
    </section>
  </div>
</template>
