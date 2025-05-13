<script setup lang="ts">
import { computed } from 'vue'

interface DopdownToggleProps {
  caret?: boolean
  tag?: string
  inNavbar?: boolean
  color?: string
}

const props = withDefaults(
  defineProps<DopdownToggleProps>(),
  {
    caret: false,
    tag: 'button',
    inNavbar: false,
    color: ''
  }
)

const actualTag = computed(() => (props.tag === 'a' || props.inNavbar) ? 'a' : 'button')
const roleAttr = computed(() => actualTag.value === 'a' ? 'button' : 'link')
</script>

<template>
  <component
    :is="actualTag"
    class="dropdown-toggle"
    :class="{
      'btn-dropdown': actualTag === 'a' && !inNavbar,
      btn: tag === 'button' && !inNavbar,
      [`btn-${color}`]: tag === 'button' && !!color
    }"
    :role="roleAttr"
  >
    <slot />
    <!-- <Icon
      v-if="caret"
      icon="it-expand"
      :class="[
        'icon-expand',
        !inNavbar ? 'icon-sm' : 'icon-xs',
        inNavbar ? 'ms-1' : '',
        actualTag !== 'a' ? 'icon-light' : '',
        color ? 'white' : 'primary'
      ]"
    /> -->
  </component>
</template>
