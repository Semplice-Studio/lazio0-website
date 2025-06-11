import type { ImageFullFragment } from '@/graphql'

export function useCraftSeo(seo: Ref<{ metaTitle?: string, metaDescription?: string, ogImage?: ImageFullFragment[] }>) {
  useSeoMeta({
    title: seo.value?.metaTitle,
    ogTitle: seo.value?.metaTitle,
    description: seo.value?.metaDescription,
    ogDescription: seo.value?.metaDescription,
    ogImage: (seo.value?.ogImage?.[0] as ImageFullFragment)?.src,
    twitterCard: 'summary_large_image'
  })
}
