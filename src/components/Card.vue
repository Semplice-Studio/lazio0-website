<script setup lang="ts">
interface CardProps {
  tag?: string
  teaser?: boolean
  spacing?: boolean
}

withDefaults(defineProps<CardProps>(), {
  tag: 'div',
  teaser: false,
  spacing: false
})
</script>

<template>
  <BCard
    :is="tag"
    no-body
    :class="{
      'card-teaser': teaser
    }"
  >
    <slot />
  </BCard>
</template>
