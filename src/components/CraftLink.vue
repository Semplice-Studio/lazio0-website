<template>
  <component
    :is="tagComponent"
    :download="isAsset ? true : undefined"
    :href="!isNuxtLink ? href : undefined"
    :rel="rel"
    :target="target"
    :to="isNuxtLink ? '/' + link.element?.uri : undefined"
  >
    <slot>
      {{ label }}
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { NuxtLinkLocale } from '#components'

type LinkType = 'Entry' | 'Asset'

export interface CraftLinkProps {
  url?: string
  typeLabel?: string
  newWindow?: string
  element?: {
    title?: string
    uri?: string
    filename?: string
    mimeType?: string
  }
  title: string
}

const props = defineProps<{
  link: CraftLinkProps
}>()

const type = computed(() => props.link?.typeLabel)
const url = computed(() => props.link?.url)

const isEmail = computed(() => type.value === 'email')
const isTel = computed(() => type.value === 'tel')
const isEntry = computed(() => type.value === 'Articolo')
const isAsset = computed(() => type.value === 'Risorsa')
const isPassive = computed(() => type.value === 'Passive')
// const isExternal = computed(() => /^https?:\/\//.test(url.value))
const isExternal = computed(() => false)
const isNuxtLink = computed(() => isEntry.value && !isExternal.value)

const href = computed(() => {
  if (!url.value) return null
  if (isEmail.value) return `mailto:${url.value}`
  if (isTel.value) return `tel:${url.value}`
  return url.value
})

const tagComponent = computed(() => {
  if (isPassive.value) return 'span'
  if (isNuxtLink.value) return NuxtLinkLocale
  else if (!isNuxtLink.value && href.value) return 'a'
  else return 'span'
})

const target = computed(() => {
  // return props.link?.newWindow ? props.link?.newWindow : isAsset.value || isExternal.value ? '_blank' : undefined
  return props.link?.newWindow
})

const rel = computed(() => {
  return target.value ? 'noopener noreferrer' : undefined
})

const label = computed(() => {
  return (
    props.link?.title
    || props.link?.element?.title
    || props.link?.element?.filename
    || props.link?.url
  )
})
</script>
