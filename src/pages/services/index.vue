<script setup lang="ts">
import type { ServicesIndexEntryFragment } from '@/graphql'
import PageServicesIndexGQL from '@/graphql/PageServicesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/services', // -> accessible at /services
    it: '/servizi' // -> accessible at /servizi
  }
})

const search = ref('')

const { data, status } = await useCraftPage<ServicesIndexEntryFragment>('services', PageServicesIndexGQL)
</script>

<template>
  <div v-if="status === 'success'">
    <section class="container my-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="container">
      <PageHero :abstract="data.abstract" :title="data.title">
        <FormSearch v-model:search="search" />
      </PageHero>
    </section>
    <section class="container mb-5">
      <ListServicesCategories />
      <ListServices :search="search" />
    </section>
  </div>
</template>
