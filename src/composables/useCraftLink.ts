import { NuxtLinkLocale } from '#components'

export interface CraftLink {
  url?: string
  type?: string
  typeLabel?: string
  newWindow?: string
  element?: {
    title?: string
    uri?: string
    filename?: string
    mimeType?: string
  }
  label?: string
}

export function useCraftLink(link: CraftLink) {
  const type = computed(() => link?.type!.toLowerCase() || '')
  const url = computed(() => link?.url)

  const isEmail = computed(() => type.value === 'email')
  const isTel = computed(() => type.value === 'tel')
  const isEntry = computed(() => type.value.includes('entry'))
  const isAsset = computed(() => type.value.includes('asset'))
  // const isPassive = computed(() => type.value.includes('passive'))
  // const isExternal = computed(() => /^https?:\/\//.test(url.value))
  const isExternal = computed(() => type.value.includes('url'))
  const isNuxtLink = computed(() => isEntry.value && !isExternal.value)

  const href = computed(() => {
    if (!url.value) return null
    if (isEmail.value) return `mailto:${url.value}`
    if (isTel.value) return `tel:${url.value}`
    return url.value
  })

  const tagComponent = computed(() => {
    // if (isPassive.value) return 'span'
    if (isNuxtLink.value) return NuxtLinkLocale
    else if (!isNuxtLink.value && href.value) return 'a'
    else return 'span'
  })

  function getURI(uri: string | undefined) {
    if (!uri || uri === '__home__') {
      return '/'
    } else {
      return `/${uri}`
    }
  }

  const to = computed(() => {
    if (isNuxtLink.value) {
      return link?.element?.uri
        ? getURI(link.element.uri)
        : undefined
    }
    return undefined
  })

  const target = computed(() => {
  // return link?.newWindow ? link?.newWindow : isAsset.value || isExternal.value ? '_blank' : undefined
    return link?.newWindow ? link?.newWindow : isAsset.value || isExternal.value ? '_blank' : undefined
  })

  const rel = computed(() => {
    return target.value ? 'noopener noreferrer' : undefined
  })

  const label = computed(() => {
    return (
      link?.label
      || link?.element?.title
      || link?.element?.filename
      || link?.url
    )
  })

  return readonly({
    label,
    href,
    to,
    target,
    rel,
    tagComponent,
    isEmail,
    isTel,
    isEntry,
    isAsset,
    // isPassive,
    isExternal,
    isNuxtLink,
    type
  })
}
