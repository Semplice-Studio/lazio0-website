<script setup lang="ts">
import type { NewsIndexEntryFragment } from '@/graphql'
import PageNewsIndexGQL from '@/graphql/PageNewsIndex.gql'

defineI18nRoute({
  paths: {
    en: '/news', // -> accessible at /services
    it: '/novita' // -> accessible at /servizi
  }
})

const search = ref('')
const categories = ref([])

const { data, status } = await useCraftPage<NewsIndexEntryFragment>('news', PageNewsIndexGQL)
</script>

<template>
  <div v-if="status === 'success'" class="container">
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
      <ListNewsCategories v-model:categories="categories" />
      <ListNews :categories="categories" :search="search" />
    </section>
  </div>
</template>
