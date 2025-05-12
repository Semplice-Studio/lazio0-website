<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { ServicesEntryFragment } from '@/graphql'
import PageServiceGQL from '@/graphql/PageService.gql'

const route = useRoute()
const entry = route.params.entry as string

const { data, status } = await useCraftPage<ServicesEntryFragment>('service -' + entry, PageServiceGQL, { entry })
const pageBlocks = computed(() => (data?.pageBlocks || []) as CraftMatrixField[])
</script>

<template>
  <div v-if="status === 'success'" class="container">
    <Breadcrumb>
      <BreadcrumbItem>
        <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
        <span class="separator">/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <NuxtLinkLocale :to="{ name: 'services' }">Services</NuxtLinkLocale>
        <span class="separator">/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
    </Breadcrumb>
    <PageHero :abstract="data.abstract" :button-link="data.buttonLink" :title="data.title" />
    <PageContent :blocks="pageBlocks" />
  </div>
</template>
