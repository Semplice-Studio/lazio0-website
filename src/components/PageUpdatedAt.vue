<template>
  <div v-if="date">
    <p class="text-muted">
      Ultimo aggiornamento: <NuxtTime
        day="numeric"
        month="long"
        year="numeric"
        :datetime="date"
      />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: null
  }
})
</script>
