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
</script>
