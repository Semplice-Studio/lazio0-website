<script setup lang="ts">
import type { NoticesIndexEntryFragment } from '@/graphql'
import PageNoticesIndexGQL from '@/graphql/PageNoticesIndex.gql'

defineI18nRoute({
  paths: {
    en: '/notices', // -> accessible at /notices
    it: '/concorsi' // -> accessible at /concorsi
  }
})

const { data, status } = await useCraftPage<NoticesIndexEntryFragment>('notices', PageNoticesIndexGQL)
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
      <ListNotices />
    </section>
  </div>
</template>
