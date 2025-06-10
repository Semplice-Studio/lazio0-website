<template>
  <component
    :is="tag"
    class="btn"
    :aria-disabled="isAriaDisabled"
    :class="[`btn-${theme}`, { 'btn-icon': icon }]"
    :disabled="disabled"
    :to="to"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

import type { NuxtLinkProps } from '#app'
import { NuxtLinkLocale } from '#components'

type ButtonSize = 'lg' | 'sm' | 'xs'
type ButtonTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | false

interface ButtonProps {
  block?: boolean
  outline?: boolean
  theme?: ButtonTheme
  tag?: string | Component
  icon?: boolean
  size?: ButtonSize
  close?: boolean
  active?: boolean
  to: NuxtLinkProps['to']
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  size: 'lg',
  theme: 'primary',
  icon: false
})

const tag = computed(() => {
  if (props.to) {
    return NuxtLinkLocale
  }
  return props.tag
})

const isAriaDisabled = computed(() =>
  props.disabled ? 'true' : undefined
)
</script>
