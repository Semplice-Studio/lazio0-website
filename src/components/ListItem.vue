<script setup lang="ts">
import type { CraftLinkProps } from '@/components/CraftLink.vue'

interface ListItemProps {
  tag?: string
  active?: boolean
  avatar?: boolean
  icon?: boolean
  img?: boolean
  link?: CraftLinkProps
}

const props = withDefaults(defineProps<ListItemProps>(), {
  tag: 'div',
  active: false,
  wrapperClass: ''
})

const hasLeftItem = computed(() => props.icon || props.avatar || props.img)

const mainClassList = computed(() => [
  'list-item',
  { active: props.active }
])

const leftClassList = computed(() => ({
  'it-rounded-icon': props.icon,
  'avatar size-lg': props.avatar,
  'it-thumb': props.img
}))
</script>

<template>
  <li>
    <CraftLink
      v-if="link"
      :class="mainClassList"
      :link="link"
    >
      <div class="it-right-zone">
        <slot />
      </div>
    </CraftLink>

    <component
      :is="tag"
      v-else
      :class="mainClassList"
    >
      <div v-if="hasLeftItem" :class="leftClassList">
        <slot name="icon" />
      </div>
      <div class="it-right-zone">
        <slot />
      </div>
    </component>
  </li>
</template>
