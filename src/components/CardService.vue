<template>
  <Card spacing class="service-card card-bg card-big">
    <BCardBody>
      <div v-if="category" class="categoryicon-top">
        <!-- <Icon icon="it-settings" /> -->
        <ServiceLineIcon class="icon" />
        <span class="text">{{ category.title }}</span>
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif" v-html="abstract" />
      </BCardText>
      <NuxtLinkLocale class="read-more" :to="{ name: 'services-slug', params: { slug } }">
        Approfondisci
        <Icon icon="it-arrow-right" />
      </NuxtLinkLocale>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import ServiceLineIcon from '@/assets/icons/service-line.svg'
import type { ServicesCardFragment } from '@/graphql'

const props = withDefaults(defineProps<ServicesCardFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

const category = computed(() => props.serviceCategories?.[0])
</script>

<style scoped lang="scss">
@import "bootstrap-italia/src/scss/base/functions";
@import "bootstrap-italia/src/scss/base/variables";

.service-card {
  border: 1px $header-center-theme-light-bg-color;
  border-radius: 24px;
  box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 0.05);
}
</style>
