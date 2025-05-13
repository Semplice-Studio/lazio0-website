<script setup lang="ts">
import { CENTER } from '@/composables/useHeaderContext'
// import Icon from '../Icon/Icon.vue'

withDefaults(defineProps<{
  tag?: string
  responsive?: boolean
  href?: string
  iconName?: string
  iconAlt?: string
}>(), {
  tag: 'a',
  responsive: false
})

const type = useHeaderContext()
</script>

<template>
  <component
    :is="'a'"
    v-if="type !== CENTER"
    class="navbar-brand d-lg-block"
    :class="{ 'd-none': !responsive }"
    :href="href"
  >
    <slot />
  </component>

  <div v-else class="it-brand-wrapper">
    <a :href="href">
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
    </a>
  </div>
</template>
