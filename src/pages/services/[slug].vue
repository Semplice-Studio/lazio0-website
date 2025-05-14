<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { ServicesEntryFragment } from '@/graphql'
import PageServiceGQL from '@/graphql/PageService.gql'

defineI18nRoute({
  paths: {
    en: '/services/[slug]', // -> accessible at /en/services/[slug]
    it: '/servizi/[slug]' // -> accessible at /it/servizi/[slug]
  }
})

const route = useRoute()
const slug = route.params.slug as string

const { data, status } = await useCraftPage<ServicesEntryFragment>('service -' + slug, PageServiceGQL, { slug })
const blocks = computed(() => (data?.pageBlocks || []) as CraftMatrixField[])
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
          <NuxtLinkLocale :to="{ name: 'services' }">Servizi</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="container my-5">
      <PageHero :abstract="data.abstract" :button-link="data.buttonLink" :title="data.title" />
    </section>
    <section class="container my-5">
      <PageContent :blocks="blocks" />
    </section>
  </div>
</template>

<style scoped>
:deep(.blocks) {
  display: grid;
  gap: 4rem;
}
</style>
