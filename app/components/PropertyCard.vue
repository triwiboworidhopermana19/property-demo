<template>
  <div class="p-3 text-sm min-w-[200px]">
    <div class="font-bold text-gray-900 text-base mb-2">
      {{ property.title || 'Property' }}
    </div>
    <div class="space-y-1 text-gray-600 text-xs">
      <div>
        <span class="font-medium">Luas Tanah:</span>
        {{ property.area ?? property.size ?? '—' }} m²
      </div>
      <div>
        <span class="font-medium">Harga:</span>
        {{ formattedPrice }}
      </div>
      <div class="flex items-center gap-1.5">
        <span class="font-medium">Status:</span>
        <span
          class="inline-block w-2.5 h-2.5 rounded-full shrink-0"
          :style="{ backgroundColor: statusColor }"
        />
        <span>{{ property.status ?? 'Unknown' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { STATUS_COLORS } from '~/utils/theme'

const props = defineProps<{ property: Record<string, any> }>()

const formattedPrice = computed(() => {
  const p = props.property?.price
  if (p == null) return '—'
  try {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(p))
  } catch {
    return String(p)
  }
})

const statusColor = computed(() => {
  const key = (props.property?.status ?? '').toLowerCase()
  return STATUS_COLORS[key]?.color ?? '#6B7280'
})
</script>
