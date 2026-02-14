import { ref, computed, watch } from 'vue'
import type { Property, ActiveFilters } from '#shared/types/property'
import { haversineKm } from '~/utils/geo'
import { CITY_CENTERS, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '#shared/constants/map'

/**
 * Composable for property filtering and map management
 */
export function usePropertyFilters(properties: Ref<Property[]>) {
  const activeFilters = ref<ActiveFilters>({})
  const mapCenter = ref<[number, number]>(DEFAULT_MAP_CENTER)
  const mapZoom = ref(DEFAULT_MAP_ZOOM)

  // Update map center when city filter changes
  watch(() => activeFilters.value.city, (city) => {
    if (city && CITY_CENTERS[city]) {
      mapCenter.value = CITY_CENTERS[city]
    }
  })

  // Filter properties based on active filters
  const filteredProperties = computed(() => {
    // Early return for SSR or when properties are not loaded
    if (!properties.value || properties.value.length === 0) {
      return []
    }

    const f = activeFilters.value
    let list = properties.value.slice()

    // City filter
    if (f.city) {
      list = list.filter(p => p.city === f.city)
    }

    // Type filter
    if (f.type) {
      list = list.filter(p => p.type === f.type)
    }

    // Price range filter
    if (f.priceRange) {
      const [min, max] = f.priceRange.split('-').map(Number)
      if (min || max) {
        list = list.filter(p => {
          if (min && max) return p.price >= min && p.price <= max
          if (min) return p.price >= min
          return true
        })
      }
    }

    // Radius filter (skip during SSR)
    if (f.radius && import.meta.client) {
      const radiusKm = Number(f.radius)
      const [centerLat, centerLng] = mapCenter.value
      list = list.filter(p =>
        haversineKm(centerLat, centerLng, p.latitude, p.longitude) <= radiusKm
      )
    }

    // Status filter
    if (f.status && f.status.length > 0) {
      list = list.filter(p => f.status!.includes(p.status.toLowerCase()))
    }

    return list
  })

  function updateFilters(filters: ActiveFilters) {
    activeFilters.value = filters
  }

  return {
    activeFilters,
    mapCenter,
    mapZoom,
    filteredProperties,
    updateFilters,
  }
}
