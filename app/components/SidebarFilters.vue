<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { STATUS_COLORS, RADIUS_OPTIONS } from '~/utils/theme'

const emit = defineEmits<{
  'update:filters': [filters: {
    city: string
    type: string
    priceRange: string
    radius: string
    status: string[]
  }]
}>()

const cities = ['Jayapura', 'Abepura', 'Sentani']
const propertyTypes = ['Rumah', 'Apartemen', 'Ruko']
const priceRanges = [
  { value: '0-500000000', label: '0 - 500 jt' },
  { value: '500000000-2000000000', label: '500 jt - 2 M' },
  { value: '2000000000-10000000000', label: '2 M+' },
]

// Individual refs — more reliable than reactive for v-model binding
const city = ref('Jayapura')
const type = ref('Rumah')
const priceRange = ref('500000000-2000000000')
const radius = ref('1')
const status = ref<string[]>([])

function toggleStatus(key: string) {
  const idx = status.value.indexOf(key)
  if (idx === -1) {
    status.value = [...status.value, key]
  } else {
    status.value = status.value.filter(s => s !== key)
  }
}

// Auto-emit on any change — watchEffect tracks all refs read inside
watchEffect(() => {
  emit('update:filters', {
    city: city.value,
    type: type.value,
    priceRange: priceRange.value,
    radius: radius.value,
    status: [...status.value],
  })
})
</script>

<template>
  <aside class="bg-sidebar-bg p-5 overflow-y-auto shrink-0" style="width: 300px;">
    <!-- City -->
    <div>
      <h3 class="text-sm font-bold text-gray-700 mb-2">Kota</h3>
      <select
        v-model="city"
        class="w-full px-3 py-2 bg-white border border-sidebar-border rounded-lg text-sm
               hover:border-gray-400 transition-colors cursor-pointer appearance-none
               bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
               bg-no-repeat bg-[right_0.5rem_center]"
      >
        <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <!-- Property Type -->
    <div class="mt-5">
      <h3 class="text-sm font-bold text-gray-700 mb-2">Jenis Properti</h3>
      <select
        v-model="type"
        class="w-full px-3 py-2 bg-white border border-sidebar-border rounded-lg text-sm
               hover:border-gray-400 transition-colors cursor-pointer appearance-none
               bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
               bg-no-repeat bg-[right_0.5rem_center]"
      >
        <option v-for="t in propertyTypes" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>

    <!-- Price Range -->
    <div class="mt-5">
      <h3 class="text-sm font-bold text-gray-700 mb-2">Harga</h3>
      <select
        v-model="priceRange"
        class="w-full px-3 py-2 bg-white border border-sidebar-border rounded-lg text-sm
               hover:border-gray-400 transition-colors cursor-pointer appearance-none
               bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
               bg-no-repeat bg-[right_0.5rem_center]"
      >
        <option v-for="pr in priceRanges" :key="pr.value" :value="pr.value">{{ pr.label }}</option>
      </select>
    </div>

    <!-- Radius -->
    <div class="mt-5">
      <h3 class="text-sm font-bold text-gray-700 mb-2">Radius</h3>
      <div class="flex gap-4 items-center">
        <label
          v-for="opt in RADIUS_OPTIONS"
          :key="opt.value"
          class="flex items-center gap-1.5 cursor-pointer text-sm"
        >
          <input
            type="radio"
            :value="opt.value"
            v-model="radius"
            class="sr-only peer"
          />
          <span
            class="w-4 h-4 rounded-sm flex items-center justify-center"
            :style="{ backgroundColor: opt.color }"
          >
            <Icon
              v-if="radius === opt.value"
              name="lucide:check"
              class="w-3 h-3 text-white"
            />
          </span>
          <span>{{ opt.label }}</span>
        </label>
      </div>
    </div>

    <!-- Status -->
    <div class="mt-5">
      <h3 class="text-sm font-bold text-gray-700 mb-2">Status</h3>
      <div class="flex flex-wrap gap-x-4 gap-y-2">
        <button
          v-for="(config, key) in STATUS_COLORS"
          :key="key"
          type="button"
          class="flex items-center gap-1.5 text-sm cursor-pointer"
          @click="toggleStatus(key as string)"
        >
          <span
            class="w-3.5 h-3.5 rounded-full shrink-0 border-2 transition-colors"
            :style="{
              borderColor: config.color,
              backgroundColor: status.includes(key as string) ? config.color : 'transparent',
            }"
          />
          <span :class="status.includes(key as string) ? 'font-semibold' : ''">
            {{ config.label }}
          </span>
        </button>
      </div>
    </div>
  </aside>
</template>
