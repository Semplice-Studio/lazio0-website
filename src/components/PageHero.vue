<template>
  <div class="row">
    <div class="col-md-8">
      <div class="it-hero-wrapper">
        <div class="it-hero-text-wrapper">
          <!-- primary-color-a9 -->
          <h1 class="h1">{{ title }}</h1>
          <div v-if="abstract" class="hero-text neutral-1-color-a7" v-html="abstract" />
          <Button
            v-if="buttonLink"
            :download="isAsset ? true : undefined"
            :href="!isNuxtLink ? href : undefined"
            :rel="rel"
            :tag="tagComponent"
            :target="target"
            :to="isNuxtLink ? to : undefined"
          >
            <slot>
              {{ label }}
            </slot>
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

const {
  tagComponent,
  href,
  to,
  label,
  isNuxtLink,
  rel,
  target,
  isAsset
} = useCraftLink(props.buttonLink)
</script>

<style scoped>
.it-hero-wrapper {
  min-height: auto;
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

.hero-text :deep(p) {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
