<script setup lang="ts">
import type { Component } from 'vue'

import { CENTER } from '@/composables/useHeaderContext'

withDefaults(defineProps<{
  tag?: string | Component
  responsive?: boolean
  iconName?: string
  iconAlt?: string
}>(), {
  tag: 'div',
  responsive: false
})

const type = useHeaderContext()
</script>

<template>
  <component
    :is="tag"
    v-if="type !== CENTER"
    class="navbar-brand d-lg-flex align-items-center"
    :class="{ 'd-none': !responsive }"
  >
    <slot />
  </component>

  <component :is="tag" v-else class="it-brand-wrapper">
    <Icon v-if="iconName" :icon="iconName" :title="iconAlt" />
    <div class="it-brand-text">
      <template v-for="(child, index) in $slots.default?.()" :key="index">
        <component
          :is="child"
          v-bind="{
            ...child.props,
            // class: [child.props?.class, index !== 0 && 'd-none d-md-block']
            class: {
              'd-none d-md-block': index !== 0,
            }
          }"
        />
      </template>
    </div>
  </component>
</template>
