import type { ButtonLinkFragment } from '@/graphql'

export function useCraftLink(link: ButtonLinkFragment) {
  const { locale } = useI18n()

  if (!link) return null

  const url = computed(() => {
    if (link.entry && link.entry.uri) {
      return `/${locale.value}/${link.entry.uri}`
    }

    if (link.url) {
      return link.url
    }

    return ''
  })

  return readonly({
    label: link.label || link.defaultLabel,
    ariaLabel: link.ariaLabel || link.label || link.defaultLabel,
    url: url.value
  })
}
