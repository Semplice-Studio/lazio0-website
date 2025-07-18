<template>
  <h2 :id="`title-${uid}`" class="title primary-color-a9 mb-3">{{ title }}</h2>
  <div v-if="abstract" class="subtitle neutral-1-color-a7" v-html="abstract" />
  <div v-if="htmlContent" class="htmlContent text-md-left" v-html="htmlContent" />
</template>

<script setup lang="ts">
defineProps({
  abstract: {
    type: String,
    default: ''
  },
  htmlContent: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.subtitle :deep(p) {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
