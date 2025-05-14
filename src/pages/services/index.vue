<script setup lang="ts">
import type { ServicesIndexEntryFragment } from '@/graphql'
import PageServicesIndexGQL from '@/graphql/PageServicesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/services', // -> accessible at /services
    it: '/servizi' // -> accessible at /servizi
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
    <section class="container my-5">
      <PageHero :abstract="data.abstract" :title="data.title" />
    </section>
  </div>
</template>
