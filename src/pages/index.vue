<script setup lang="ts">
import type { CompanyEntryFragment } from '@/graphql'
import PageHomeGQL from '@/graphql/PageHome.gql'

const { isPreview, previewTimestamp } = usePreview()

// Disable SSR for preview mode
if (isPreview.value) {
  definePageMeta({ ssr: false })
}

const { data, status } = await useCraftPage<CompanyEntryFragment>('home', PageHomeGQL)
const companyBlocks = computed(() => data?.companyBlocks?.map((block) => ({
  ...block,
  typeHandle: block.typeHandle === 'blockParagraph' ? 'blockHighlightedParagraph' : block.typeHandle
})) || []
)
</script>

<template>
  <div v-if="status === 'success'" :key="previewTimestamp">
    <Blocks :blocks="companyBlocks" />
  </div>
</template>
