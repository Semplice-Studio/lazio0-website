<script setup lang="ts">
import type { ServicesIndexEntryFragment } from '@/graphql'
import PageServicesIndexGQL from '@/graphql/PageServicesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/news', // -> accessible at /services
    it: '/novita' // -> accessible at /servizi
  }
})

const { data, status } = await useCraftPage<ServicesIndexEntryFragment>('servicesIndex', PageServicesIndexGQL)
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
    <section class="container mt-5">
      <PageHero :abstract="data.abstract" :title="data.title">
        <FormSearch />
      </PageHero>
    </section>
    <section class="container mb-5">
      <ListServices />
    </section>
  </div>
</template>
