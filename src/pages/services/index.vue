<script setup lang="ts">
import type { ServicesIndexEntryFragment } from '@/graphql'
import PageServicesIndexGQL from '@/graphql/PageServicesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/services', // -> accessible at /services
    it: '/servizi' // -> accessible at /servizi
  }
})

const { isPreview, previewTimestamp } = usePreview()

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const search = ref('')
const categories = ref([])

const { data, status } = await useCraftPage<ServicesIndexEntryFragment>('services', PageServicesIndexGQL)
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
      <ListServicesCategories v-model:categories="categories" />
      <ListServices :categories="categories" :search="search" />
    </section>
  </div>
</template>
