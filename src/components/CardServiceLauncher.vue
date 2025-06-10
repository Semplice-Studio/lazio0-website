<template>
  <Card spacing class="card-bg">
    <BCardBody>
      <div class="categoryicon-top text-primary">
        <Icon icon="it-settings" />
      </div>
      <BCardTitle class="text-primary" tag="h4">
        {{ title }}
      </BCardTitle>
      <BCardText>
        <div v-if="abstract" class="card-abstract font-sans-serif m-0" v-html="abstract" />
        <!-- <div v-if="htmlContent" class="card-abstract font-sans-serif m-0" v-html="htmlContent" /> -->
        <ul v-if="serviceEntries?.length" class="card-services list-unstyled">
          <li v-for="(entry, index) in serviceEntries" :key="index">
            <NuxtLinkLocale class="card-abstract text-black font-sans-serif m-0" :to="{ name: 'services-slug', params: { slug: entry.slug } }">
              <Icon class="text-primary fill-primary" icon="it-calendar" />
              <span class="ps-2">{{ entry.title }}</span>
            </NuxtLinkLocale>
          </li>
        </ul>
      </BCardText>
      <CraftLink v-if="buttonLink" class="read-more" :link="buttonLink">
        {{ buttonLink?.label || buttonLink?.defaultLabel }}<!--
        --><Icon icon="it-arrow-right" />
      </CraftLink>
    </BCardBody>
  </Card>
</template>

<script setup lang="ts">
import type { ServicesLauncherItemFragment } from '@/graphql'

withDefaults(defineProps<ServicesLauncherItemFragment>(), {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  slug: '#'
})

// const category = computed(() => props.serviceCategories?.[0])
</script>

<style scoped lang="scss">
.card-abstract,
.card-abstract > * {
  font-size: 1rem;
  text-decoration: none;
}

.card-services {
  display: grid;
  gap: 0.5rem;

  & li > a {
    display: flex;
    gap: 0.5rem;
  }

  & :deep(.icon) {
    width: 24px;
    height: 24px;
    flex: none;
    fill: currentColor;
  }
}
</style>
