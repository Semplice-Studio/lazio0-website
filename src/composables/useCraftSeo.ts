import type { UseSeoMetaInput } from '@unhead/vue'

import type { ImageFullFragment } from '@/graphql'

export function useCraftSeo(seo: Ref<{ metaTitle?: string, metaDescription?: string, ogImage?: ImageFullFragment[] }>) {
  const seoMetaInput: UseSeoMetaInput = {
    twitterCard: 'summary_large_image'
  }

  if (seo.value?.metaTitle) {
    seoMetaInput.title = seo.value.metaTitle
    seoMetaInput.ogTitle = seo.value.metaTitle
  }

  if (seo.value?.metaDescription) {
    seoMetaInput.description = seo.value.metaDescription
    seoMetaInput.ogDescription = seo.value.metaDescription
  }

  if (seo.value?.ogImage?.[0]) {
    seoMetaInput.ogImage = (seo.value.ogImage[0] as ImageFullFragment).src
  }

  useSeoMeta(seoMetaInput)
}
