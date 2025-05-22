<template>
  <div v-if="status === 'success'" class="mb-5">
    <div class="row">
      <div class="col-12">
        <Chip v-for="category in categoryItems" :key="category.id" large tag="label" :color="!selection.includes(category.slug!) && 'primary' || undefined" :simple="!selection.includes(category.slug!)">
          {{ category.title }}
          <input v-model="selection" class="visually-hidden" type="checkbox" :value="category.slug">
          <template v-if="selection.includes(category.slug!)" #afterLabel>
            <Button class="pe-none" :theme="false">
              <Icon icon="it-close" />
            </Button>
          </template>
        </Chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CategoryInterface } from '@/graphql'
import ListNewsCategoriesGQL from '@/graphql/ListNewsCategories.gql'

// const route = useRoute()
// const slug = route.params.slug as string

defineProps({
  categories: {
    type: Array as PropType<CategoryInterface[]>,
    default: () => []
  }
})

const selection = ref<string[]>([])

const emit = defineEmits<{
  (e: 'update:categories', value: string[]): void
}>()

watch(selection, (value) => {
  emit('update:categories', value)
})

const { data: categoryItems, status } = await useCraftCategories<CategoryInterface>(
  'news-categories',
  ListNewsCategoriesGQL
)
</script>
