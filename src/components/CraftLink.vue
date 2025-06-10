<template>
  <component
    :is="tagComponent"
    :download="isAsset ? true : undefined"
    :href="!isNuxtLink ? href : undefined"
    :rel="rel"
    :target="target"
    :to="isNuxtLink ? to : undefined"
  >
    <slot>
      {{ label }}
    </slot>
  </component>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'

// import { NuxtLinkLocale } from '#components'

// type LinkType = 'Entry' | 'Asset'

export interface CraftLinkProps {
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
  title?: string
}

const props = defineProps<{
  link: CraftLinkProps
}>()

const {
  tagComponent,
  href,
  to,
  label,
  isNuxtLink,
  rel,
  target,
  isAsset
} = useCraftLink(props.link)

// const type = computed(() => props.link?.type!.toLowerCase())
// const url = computed(() => props.link?.url)

// const isEmail = computed(() => type.value === 'email')
// const isTel = computed(() => type.value === 'tel')
// const isEntry = computed(() => type.value.includes('entry'))
// const isAsset = computed(() => type.value.includes('asset'))
// const isPassive = computed(() => type.value.includes('passive'))
// // const isExternal = computed(() => /^https?:\/\//.test(url.value))
// const isExternal = computed(() => type.value.includes('url'))
// const isNuxtLink = computed(() => isEntry.value && !isExternal.value)

// const href = computed(() => {
//   if (!url.value) return null
//   if (isEmail.value) return `mailto:${url.value}`
//   if (isTel.value) return `tel:${url.value}`
//   return url.value
// })

// const tagComponent = computed(() => {
//   if (isPassive.value) return 'span'
//   if (isNuxtLink.value) return NuxtLinkLocale
//   else if (!isNuxtLink.value && href.value) return 'a'
//   else return 'span'
// })

// function getURI(uri: string | undefined) {
//   if (!uri || uri === '__home__') {
//     return ''
//   } else {
//     return `/${uri}`
//   }
// }

// const to = computed(() => {
//   if (isNuxtLink.value) {
//     return props.link?.element?.uri
//       ? getURI(props.link.element.uri)
//       : undefined
//   }
//   return undefined
// })

// const target = computed(() => {
//   // return props.link?.newWindow ? props.link?.newWindow : isAsset.value || isExternal.value ? '_blank' : undefined
//   return props.link?.newWindow ? props.link?.newWindow : isAsset.value || isExternal.value ? '_blank' : undefined
// })

// const rel = computed(() => {
//   return target.value ? 'noopener noreferrer' : undefined
// })

// const label = computed(() => {
//   return (
//     props.link?.title
//     || props.link?.element?.title
//     || props.link?.element?.filename
//     || props.link?.url
//   )
// })
</script>
