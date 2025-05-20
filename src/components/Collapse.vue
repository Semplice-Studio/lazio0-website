<script setup lang="ts">
// import { Icon } from '../Icon/Icon.vue'

interface CollapseProps {
  isOpen?: boolean
  tag?: string
  navbar?: boolean
  megamenu?: boolean
  header?: boolean
  closeSrText?: string
  onOverlayClick?: () => void
}

const props = withDefaults(defineProps<CollapseProps>(), {
  isOpen: false,
  tag: 'div',
  header: false,
  closeSrText: 'Nascondi la navigazione'
})

const style = computed(() => ({
  display: props.isOpen ? 'block' : 'none'
}))

const visible = ref(false)
watch(() => props.isOpen, (value) => {
  visible.value = value
})
</script>

<template>
  <BCollapse
    v-model="visible"
    :class="{
      'navbar-collapsable': navbar || megamenu,
      'expanded': isOpen,
      'link-list-wrapper': header
    }"
    :is-nav="navbar"
  >
    <!-- :style="(navbar || megamenu) ? style : undefined" -->
    <template v-if="navbar || megamenu">
      <div
        class="overlay"
        :class="{
          fade: isOpen,
          show: isOpen
        }"
        @click="onOverlayClick"
      />
      <!-- :style="style" -->
      <div class="close-div">
        <button class="btn close-menu" type="button" @click="onOverlayClick">
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
