<template>
  <div class="it-search-wrapper" role="button" @click="open = true">
    <span v-if="label" class="d-none d-md-block">{{ label }}</span>
    <a class="search-link rounded-icon" :aria-label="label">
      <Icon :icon="iconName" />
    </a>
  </div>

  <Modal v-model:open="open" aria-label="Cerca" class="search-modal" size="lg" title="Cerca">
    <div class="container">
      <div class="row variable-gutters">
        <div class="col">
          <FormSearchAutocomplete v-model:search="search" :autocomplete-items="autocompleteItems" />
        </div>
      </div>
      <div class="row variable-gutters">
        <div class="col-lg-5">
          <div class="searches-list-wrapper">
            <div class="other-link-title">FORSE STAVI CERCANDO</div>
            <ul class="searches-list">
              <li>
                <a href="#">Rilascio Carta Identità Elettronica (CIE)</a>
              </li>
              <li>
                <a href="#">Cambio di residenza</a>
              </li>
              <li>
                <a href="#">Tributi online</a>
              </li>
              <li>
                <a href="#">Prenotazione appuntamenti</a>
              </li>
              <li>
                <a href="#">Rilascio tessera elettorale</a>
              </li>
              <li>
                <a href="#">Voucher connettività</a>
              </li>
            </ul><!-- /searches-list -->
          </div><!-- /searches-list-wrapper -->
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">

import GetSearch from '@/graphql/GetSearch.gql'

defineProps<{
  label: string
  iconName: string
}>()

const open = ref(false)
const search = ref('')
const autocompleteItems = ref([])

const route = useRoute()
const gql = useCraftGraphQL()

watch(search, async (value) => {
  if (value.length > 3) {
    const { data } = await gql(GetSearch, {
      search: value
    })
    autocompleteItems.value = (data.entries || [])
  }
})

watch(route, () => {
  open.value = false
})
</script>
