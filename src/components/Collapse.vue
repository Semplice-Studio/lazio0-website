<script setup lang="ts">
import { useVModel } from '@vueuse/core'

interface CollapseProps {
  open?: boolean
  tag?: string
  navbar?: boolean
  megamenu?: boolean
  header?: boolean
  closeSrText?: string
}

const props = withDefaults(defineProps<CollapseProps>(), {
  open: false,
  tag: 'div',
  header: false,
  closeSrText: 'Nascondi la navigazione'
})

const style = computed(() => ({
  display: props.open ? 'block' : 'none'
}))

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()

const visible = useVModel(props, 'open', emit)
</script>

<template>
  <BCollapse
    v-model="visible"
    initial-animation
    :class="{
      'navbar-collapsable': navbar || megamenu,
      'expanded': visible,
      'link-list-wrapper': header
    }"
    :is-nav="navbar"
  >
    <template v-if="navbar || megamenu">
      <div
        class="overlay"
        :class="{
          fade: visible,
          show: visible
        }"
        :style="style"
        @click="visible = false"
      />
      <div class="close-div">
        <button class="btn close-menu" type="button" @click="visible = false">
          <span class="visually-hidden">{{ closeSrText }}</span>
          <Icon color="white" icon="it-close-big" />
        </button>
      </div>
      <div v-if="megamenu" class="menu-wrapper">
        <slot />
      </div>
      <template v-else>
        <slot />
      </template>
    </template>
    <template v-else>
      <slot />
    </template>
  </BCollapse>
</template>
