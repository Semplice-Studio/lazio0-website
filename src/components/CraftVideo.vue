<template>
  <!-- data-bs-video -->
  <video
    ref="videoRef"
    playsinline
    webkit-playsinline
    class="video-js"
    preload="auto"
    :autoplay="autoPlay"
    :class="fluid ? 'video-fluid' : ''"
    :controls="controls"
    :loop="loop"
    :poster="poster"
    :src="src"
  />
</template>

<script setup lang="ts">
import { VideoPlayer } from 'bootstrap-italia'

interface CraftVideoProps {
  src: string
  type: string
  autoPlay?: boolean
  controls?: boolean
  loop?: boolean
  fluid?: boolean
  poster?: string
}

const props = withDefaults(defineProps<CraftVideoProps>(), {
  controls: true,
  autoPlay: false,
  loop: false,
  fluid: true,
  poster: undefined
})

const videoRef = ref<HTMLVideoElement | null>(null)
const instance = ref<VideoPlayer>() // Replace `any` with the actual VideoPlayer type if available

onMounted(() => {
  if (videoRef.value && VideoPlayer && !instance.value) {
    instance.value = new VideoPlayer(videoRef.value)
  }

  // if (props.autoPlay) {
  //   setTimeout(() => {
  //     instance.value?.player?.play()
  //   }, 1000)
  // }
})

onBeforeUnmount(() => {
  if (instance.value) {
    instance.value.dispose()
  }
})
</script>
