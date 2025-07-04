<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { TransparenciesEntryFragment } from '@/graphql'
import PageTransparenciesIndexGQL from '@/graphql/PageTransparenciesIndex.gql'

const route = useRoute()
const slug = route.params.slug as string

const { isPreview, previewTimestamp } = usePreview()

defineI18nRoute({
  paths: {
    en: '/transparencies', // -> accessible at /en/transparencies
    it: '/amministrazione-trasparente' // -> accessible at /it/amministrazione-trasparente
  }
})

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const { data, status } = await useCraftPage<TransparenciesEntryFragment>('transparencies-' + slug, PageTransparenciesIndexGQL, { slug })
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
        <BreadcrumbItem>{{ data.title }}</BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="container my-5">
      <PageHero :abstract="data.htmlContent" :button-link="data.buttonLink" :title="data.title" />
    </section>
    <section class="container my-5">
      <PageContentWithNav
        :blocks="blocks"
        :navigation="data.sidebarNavigation"
        :navigation-title="data.sidebarTitle"
        :with-sidebar="data.withSidebar"
      >
        <PageUpdatedAt :date="data.dateUpdated" />
      </PageContentWithNav>
    </section>
  </div>
</template>
