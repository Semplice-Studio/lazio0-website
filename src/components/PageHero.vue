<template>
  <div class="row">
    <div class="col-md-8">
      <h1>{{ title }}</h1>
      <div v-if="abstract" class="text-md-left" v-html="abstract" />
      <Button :to="buttonLinkTo">{{ buttonLink?.label }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { ButtonLinkFragment } from '@/graphql'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  abstract: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: Object as PropType<ButtonLinkFragment>,
    default: () => ({})
  }
})

const buttonLinkTo = useCraftLink(props.buttonLink)
</script>
