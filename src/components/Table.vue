<template>
  <div v-if="tableData?.columns?.length && tableData?.rows?.length" class="table-responsive">
    <table class="table">
      <thead>
        <tr class="table-dark">
          <th
            v-for="(column, index) in tableData.columns"
            :key="`header-${index}`"
            scope="col"
            :class="getColumnClass(column)"
            :style="getColumnStyle(column)"
          >
            {{ column?.heading || `Colonna ${index + 1}` }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData.rows" :key="`row-${rowIndex}`">
          <td
            v-for="(cell, cellIndex) in row"
            :key="`cell-${rowIndex}-${cellIndex}`"
            :class="getColumnClass(tableData.columns?.[cellIndex])"
            :style="getColumnStyle(tableData.columns?.[cellIndex])"
          >
            <NuxtTime
              v-if="tableData.columns?.[cellIndex].type === 'date'"
              day="numeric"
              month="long"
              year="numeric"
              :datetime="new Date(cell)"
            />
            <template v-else>
              {{ cell }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Table_TableMakerField, Table_TableMakerField_Column } from '@/graphql'

type Maybe<T> = T | null | undefined

// Props
interface TableProps {
  tableData?: Table_TableMakerField | null
}

withDefaults(defineProps<TableProps>(), {
  tableData: null
})

const getColumnStyle = (column?: Maybe<Table_TableMakerField_Column>) => {
  const styles: Record<string, string> = {}

  if (column?.width) {
    styles.width = column.width.includes('%') || column.width.includes('px')
      ? column.width
      : `${column.width}px`
  }

  if (column?.align) {
    styles.textAlign = column.align
  }

  return styles
}

const getColumnClass = (column?: Maybe<Table_TableMakerField_Column>) => {
  const classes = []

  if (column?.align) {
    classes.push(`text-${column.align}`)
  }

  if (column?.type) {
    classes.push(`column-${column.type}`)
  }

  return classes.join(' ')
}
</script>
