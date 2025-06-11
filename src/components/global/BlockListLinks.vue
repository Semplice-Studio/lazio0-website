<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <h2 :id="`title-${uid}`" class="primary-color-a9">{{ title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <List>
            <ListItem v-for="(item, index) in linkItems" :key="index" icon>
              <template #icon>
                <Icon v-if="item.buttonLink.type === 'asset'" icon="it-clip" />
                <Icon v-else-if="item.buttonLink.type === 'entry'" icon="it-link" />
                <Icon v-else icon="it-external-link" />
              </template>
              <CraftLink class="text" :link="item.buttonLink" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment } from '@/graphql'

interface LinkItems {
  buttonLink: ButtonLinkFragment
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  linkItems: {
    type: Array as PropType<LinkItems[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>
