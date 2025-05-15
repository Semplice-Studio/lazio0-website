<template>
  <div class="form-group">
    <div class="input-group">
      <BFormInput v-model="text" placeholder="Cerca in servizi" />
      <div class="input-group-append">
        <Button icon primary size="sm">
          <span class="visually-hidden">Cerca </span>
          <Icon class="icon-white" icon="it-search" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = ref('')
</script>
