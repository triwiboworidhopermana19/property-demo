<template>
  <div class="flex-1 bg-sidebar-bg overflow-auto p-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column: Client Info + Table -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Client Information Card -->
          <div v-if="subjectProperty" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="text-sm font-medium text-gray-600 min-w-[120px]">Klien:</span>
                <span class="font-bold text-gray-900">{{ subjectProperty.city }} - {{ subjectProperty.type }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sm font-medium text-gray-600 min-w-[120px]">Lokasi Aset:</span>
                <span class="font-bold text-gray-900">{{ subjectProperty.title }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sm font-medium text-gray-600 min-w-[120px]">Estimasi Nilai:</span>
                <span class="font-bold text-navy text-lg">{{ formatCurrency(indicativeValue) }}</span>
              </div>
            </div>
          </div>

          <!-- Property Comparison Table -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <table class="w-full">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Pilih</th>
                  <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Alamat Pembanding</th>
                  <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Luas (m²)</th>
                  <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Harga (Rp)</th>
                  <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Penyesuaian</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="comp in comparables"
                  :key="comp.id"
                  class="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  :class="{ 'bg-blue-50': selectedComparableIds.includes(comp.id) }"
                >
                  <td class="px-6 py-4">
                    <input
                      type="checkbox"
                      :value="comp.id"
                      v-model="selectedComparableIds"
                      class="w-5 h-5 text-navy border-gray-300 focus:ring-2 focus:ring-navy cursor-pointer rounded"
                    />
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ comp.title }}</td>
                  <td class="px-6 py-4 text-sm text-gray-700">{{ comp.area }}</td>
                  <td class="px-6 py-4 text-sm font-semibold text-gray-900">{{ formatCurrency(comp.price) }}</td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-block px-4 py-1.5 text-sm font-bold rounded-md"
                      :class="getAdjustmentBadgeClass(comp)"
                    >
                      {{ getPriceDiff(comp) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Adjustment Panel (Below Table) -->
          <div v-if="selectedComparables.length > 0" class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="p-6">
              <h3 class="text-base font-bold text-gray-800 mb-5">Penyesuaian</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center py-2">
                  <span class="text-sm font-medium text-gray-700">Selisih Harga:</span>
                  <span class="text-base font-bold" :class="priceAdjustment.class">
                    {{ priceAdjustment.value }}
                  </span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-sm font-medium text-gray-700">Selisih Luas:</span>
                  <span class="text-base font-bold" :class="areaAdjustment.class">
                    {{ areaAdjustment.value }}
                  </span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-sm font-medium text-gray-700">Harga/m² Subjek:</span>
                  <span class="text-base font-bold text-gray-900">
                    {{ formatCurrency(subjectPricePerSqm) }}
                  </span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-sm font-medium text-gray-700">Harga/m² Pembanding:</span>
                  <span class="text-base font-bold text-gray-900">
                    {{ formatCurrency(comparablePricePerSqm) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 p-6 bg-gray-50">
              <h3 class="text-sm font-bold text-gray-700 mb-3">Estimasi Nilai Indikatif:</h3>
              <p class="text-3xl font-bold text-navy mb-6">{{ formatCurrency(indicativeValue) }}</p>

              <button
                class="w-full bg-navy text-white px-5 py-3.5 rounded-lg font-semibold hover:bg-navy/90 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Icon name="lucide:file-down" class="w-5 h-5" />
                Export Ringkasan Laporan
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Map Only -->
        <div>
          <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 sticky top-" style="height: 600px;">
            <MapView :properties="mapProperties" :center="mapCenter" :zoom="13" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Property } from '#shared/types/property'
import { formatCurrency } from '~/utils/currency'
import { calculatePriceDiffPercent, formatPriceDiff, getAdjustmentClass } from '~/utils/valuation'

// Fetch all properties
const { data: allProperties } = await useFetch<Property[]>('/api/properties', {
  default: () => [],
})

// Valuation logic using composable
const {
  subjectProperty,
  comparables,
  selectedComparableIds,
  selectedComparables,
  priceAdjustment,
  areaAdjustment,
  subjectPricePerSqm,
  comparablePricePerSqm,
  indicativeValue,
  mapProperties,
  mapCenter,
} = useValuation(1, 'Jayapura', allProperties)

// Helper functions for table display
function getPriceDiff(comp: Property): string {
  if (!subjectProperty.value) return '0%'
  const percentage = calculatePriceDiffPercent(comp, subjectProperty.value)
  return formatPriceDiff(percentage)
}

function getAdjustmentBadgeClass(comp: Property): string {
  if (!subjectProperty.value) return 'bg-gray-100 text-gray-700'
  const percentage = calculatePriceDiffPercent(comp, subjectProperty.value)
  return getAdjustmentClass(percentage)
}
</script>
