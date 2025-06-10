<script setup lang="ts">
import type { NoticesIndexEntryFragment } from '@/graphql'
import PageNoticesIndexGQL from '@/graphql/PageNoticesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/notices', // -> accessible at /notices
    it: '/concorsi' // -> accessible at /concorsi
  }
})

const { isPreview, previewTimestamp } = usePreview()

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const search = ref('')
const categories = ref([])

const { data, status } = await useCraftPage<NoticesIndexEntryFragment>('notices', PageNoticesIndexGQL)
</script>

<template>
  <div v-if="status === 'success'" :key="previewTimestamp" class="container">
    <section class="my-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section>
      <PageHero :abstract="data.abstract" :title="data.title">
        <FormSearch v-model:search="search" />
      </PageHero>
    </section>
    <section class="mb-5">
      <ListNoticesCategories v-model:categories="categories" />
      <ListNotices :categories="categories" :search="search" />
    </section>
  </div>
</template>
