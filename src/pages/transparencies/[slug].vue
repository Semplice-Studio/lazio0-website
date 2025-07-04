<script setup lang="ts">
import type { CraftMatrixField } from '@/components/Blocks.vue'
import type { TransparenciesEntryFragment } from '@/graphql'
import PageTransparenciesGQL from '@/graphql/PageTransparencies.gql'

const route = useRoute()
const slug = route.params.slug as string

const { isPreview, previewTimestamp } = usePreview()

defineI18nRoute({
  paths: {
    en: '/transparencies/[slug]', // -> accessible at /en/services/[slug]
    it: '/amministrazione-trasparente/[slug]' // -> accessible at /it/servizi/[slug]
  }
})

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const { data, status } = await useCraftPage<TransparenciesEntryFragment>('transparencies-' + slug, PageTransparenciesGQL, { slug })
const blocks = computed(() => (data?.pageBlocks || []) as CraftMatrixField[])

// Computed property per i parent appiattiti
const flattenedParents = computed(() => {
  return flattenParentsReverse(data)
})

// Alternativa più concisa con array.reverse()
const flattenParentsReverse = (parentObj: TransparenciesEntryFragment['parent']) => {
  const parents = []
  let current = parentObj

  while (current && current.parent) {
    parents.push({
      title: current.parent.title!.length > 60
        ? current.parent.title!.substring(0, 60) + '...'
        : current.parent.title,
      uri: current.parent.uri
    })
    current = current.parent
  }

  return parents.reverse()
}
</script>

<template>
  <div v-if="status === 'success'" :key="previewTimestamp">
    <section class="container my-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'index' }">Home</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NuxtLinkLocale :to="{ name: 'transparencies' }">Amministrazione Trasparente</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem v-for="parent in flattenedParents" :key="parent.uri">
          <NuxtLinkLocale :to="`/${parent.uri}`">{{ parent.title }}</NuxtLinkLocale>
          <span class="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ data.title!.length > 60 ? data.title!.substring(0, 60) + '...' : data.title! }}</BreadcrumbItem>
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
