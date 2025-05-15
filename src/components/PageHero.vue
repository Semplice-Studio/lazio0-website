<template>
  <div class="row">
    <div class="col-md-8">
      <div class="it-hero-wrapper">
        <div class="it-hero-text-wrapper">
          <h1 class="h1">{{ title }}</h1>
          <div v-if="abstract" class="text-md-left" v-html="abstract" />
          <Button
            v-if="link"
            :aria-label="link.ariaLabel"
            :to="link.url"
          >
            {{ link.label }}
          </Button>
          <slot />
        </div>
      </div>
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
    default: () => null
  }
})

const link = useCraftLink(props.buttonLink)
</script>

<style scoped>
.it-hero-wrapper {
  background-color: unset;
}

.it-hero-text-wrapper {
  padding: 0;
}

.it-hero-wrapper .it-hero-text-wrapper h1 {
  color: unset;
}

.it-hero-text-wrapper :deep(p) {
  color: unset;
  font-family: unset;
}
</style>
