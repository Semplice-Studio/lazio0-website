<template>
  <component
    :is="tag"
    v-if="!noWrapper && !sublist"
    class="link-list-wrapper"
    :class="{ multiline: multiline }"
  >
    <template v-if="header">
      <slot name="header">{{ header }}</slot>
    </template>
    <ul :class="listClasses">
      <slot />
    </ul>
  </component>

  <template v-else-if="sublist">
    <template v-if="header">
      <slot name="header">{{ header }}</slot>
    </template>
    <ul :class="listClasses">
      <slot />
    </ul>
  </template>

  <ul
    v-else
    :class="listClasses"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
interface LinkListProps {
  tag?: string
  multiline?: boolean
  header?: string
  sublist?: boolean
  avatar?: boolean
  noWrapper?: boolean
}

const props = withDefaults(defineProps<LinkListProps>(), {
  tag: 'div'
})

const {
  tag = 'div',
  multiline = false,
  header,
  sublist = false,
  avatar = false,
  noWrapper = false
} = toRefs(props)

// UL class
const listClasses = computed(() => ({
  'link-list': !sublist.value,
  'link-sublist': sublist.value,
  'avatar-group': avatar.value
}))

</script>
