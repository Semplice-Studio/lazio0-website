import type { ButtonLinkFragment } from '@/graphql'

const ENTRY_TO_ROUTE = {
  company: 'index',
  newsIndex: 'news'
}

export function useCraftLink(link: ButtonLinkFragment) {
  if (!link) {
    return undefined
  }

  if (link.type === 'entry' && link.entry) {
    return ENTRY_TO_ROUTE[link.entry.typeHandle as keyof typeof ENTRY_TO_ROUTE]
  }

  return undefined
}
