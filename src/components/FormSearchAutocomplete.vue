<template>
  <BForm
    ref="autocompleteEl"
    class="form-group autocomplete"
    @submit.prevent="$emit('update:search', text)"
  >
    <div class="autocomplete-wrapper">
      <BFormInput
        v-model="text"
        class="form-control ps-5"
        :placeholder="label"
      />
      <span aria-hidden="true" class="autocomplete-icon">
        <Icon icon="it-search" />
      </span>
      <ul v-show="autocompleteItems.length" class="autocomplete__menu autocomplete__menu--visible">
        <li
          v-for="(item, i) in autocompleteItems"
          :id="'accessibleAutocomplete__option--' + (i + 1)"
          :key="i"
          role="option"
          :aria-posinset="i + 1"
        >
          <NuxtLinkLocale class="autocomplete__option" :to="`/${item.uri}`">
            {{ item.title }}
          </NuxtLinkLocale>
        </li>
      </ul>
      <!-- <Button primary type="submit">
        <span>{{ label }}</span>
      </Button> -->
    </div>
  </BForm>
</template>

<script setup lang="ts">
// import { unrefElement } from '@vueuse/core'
// import { SelectAutocomplete } from 'bootstrap-italia'

const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: 'Cerca'
  },
  autocompleteItems: {
    type: Array,
    default: () => []
  }
})

const text = ref('')
const { autocompleteItems } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:search', value: boolean): void
}>()

watch(text, (newValue) => {
  // Emit the updated search value
  emit('update:search', newValue)
})

const autocompleteEl = ref<HTMLULElement | null>(null)

</script>
