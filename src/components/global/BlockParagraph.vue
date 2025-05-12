<template>
  <Section
    :aria-labelledby="uid"
    :class="{
      'p-0': !evidence
    }"
    :color="evidence && 'muted' || undefined"
  >
    <div class="row">
      <div class="col-12">
        <h2 :id="uid">{{ title }}</h2>
        <div v-if="htmlContent" class="text-md-left" v-html="htmlContent" />
        <Button v-if="buttonLink" :aria-label="buttonLink.ariaLabel || buttonLink.label || buttonLink.defaultLabel" :to="buttonLinkTo">
          {{  buttonLink.label || buttonLink.defaultLabel }}
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment } from '@/graphql'

const props = defineProps({
  buttonLink: {
    type: Object as PropType<ButtonLinkFragment>,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  htmlContent: {
    type: String,
    default: ''
  },
  evidence: {
    type: Boolean,
    default: false
  },
  uid: {
    type: String,
    default: ''
  }
})

const buttonLinkTo = useCraftLink(props.buttonLink)
</script>
