<template>
  <picture
    :class="[
      'image',
    ]">
    <source
      v-if="avif"
      type="image/avif"
      :srcset="avif">
    <source
      v-if="webp"
      type="image/webp"
      :srcset="webp">
    <img
      ref="el"
      :alt="alt"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
      :role="role"
      :src="src || url"
      v-bind="imageProps"
      :title="title"
      :width="width">
  </picture>
</template>

<script setup>
import {
  computed, onMounted, ref
} from '#imports'

const props = defineProps({
  preload: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  },
  url: String,
  webp: String,
  avif: String,
  alt: String,
  title: String,
  role: String,
  width: [String, Number],
  height: [String, Number],
  lazy: {
    type: Boolean,
    default: true
  },
  cover: {
    type: Boolean,
    default: true
  },
  hasFocus: { type: Boolean },
  focus: {
    type: Array,
    default: () => []
  },
  contained: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['load'])

const $el = useTemplateRef('el')
const loaded = ref(false)

// const vertical = parseInt(props.width) < parseInt(props.height)
// const square = parseInt(props.width) == parseInt(props.height)

const imageProps = computed(() => {
  let focusPoint = null

  if (props.hasFocus && props.focus?.length) {
    focusPoint = `object-position: ${props.focus[0] * 100}% ${props.focus[1] * 100}%`
  }

  return {
    style: focusPoint,
    preload: props.preload
  }
})

const handleLoad = () => {
  loaded.value = true
  emit('load')
}

onMounted(() => {
  if ($el.value && props.lazy) {
    if ($el.value.complete) {
      handleLoad()
    } else {
      $el.value.addEventListener('load', handleLoad, { once: true })
    }
  }
})
</script>
