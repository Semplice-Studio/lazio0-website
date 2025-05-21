<template>
  <BForm class="form-group" @submit.prevent="$emit('update:search', text)">
    <div class="input-group">
      <BFormInput v-model="text" placeholder="Cerca in servizi" />
      <div class="input-group-append">
        <Button icon primary size="sm">
          <span class="visually-hidden">Cerca </span>
          <Icon class="icon-white" icon="it-search" />
        </Button>
      </div>
    </div>
  </BForm>
</template>

<script setup lang="ts">
defineProps({
  search: {
    type: String,
    default: ''
  }
})

const text = ref('')

defineEmits<{
  (e: 'update:search', value: boolean): void
}>()
</script>
