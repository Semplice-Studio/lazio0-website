<script setup lang="ts">

const props = defineProps<{
  tag?: string
  href?: string
  teaser?: boolean
  spacing?: boolean
  wrapperClassName?: string
}>()

const tag = props.tag || 'div'
</script>

<template>
  <!-- <div
    class="card-wrapper"
    :class="{
      'card-space': spacing,
      'card-teaser-wrapper': teaser
    }"
  > -->
  <BCard
    :is="tag"
    no-body
    :class="{
      'card-teaser': teaser
    }"
  >
    <slot />
  </BCard>
  <!-- </div> -->
</template>
