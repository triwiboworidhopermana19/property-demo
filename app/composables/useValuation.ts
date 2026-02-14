import { ref, computed, watch } from 'vue'
import type { Property } from '#shared/types/property'
import { calculatePricePerSqm, calculateAdjustment } from '~/utils/valuation'
import { DEFAULT_MAP_CENTER } from '#shared/constants/map'

/** Composable for property valuation */
export function useValuation(
  subjectPropertyId: number,
  selectedCity: string,
  allProperties: Ref<Property[]>
) {
  // Subject property (the one being analyzed)
  const subjectProperty = computed(() =>
    allProperties.value?.find(p => p.id === subjectPropertyId)
  )

  // Comparable properties (same city, same type, exclude subject)
  const comparables = computed<Property[]>(() => {
    if (!subjectProperty.value) return []
    return (allProperties.value ?? [])
      .filter(p =>
        p.city === selectedCity &&
        p.type === subjectProperty.value!.type &&
        p.id !== subjectPropertyId
      )
      .slice(0, 3) // Top 3 comparables
  })

  // Selected comparables for comparison (multi-select)
  const selectedComparableIds = ref<number[]>([])

  // Auto-select first comparable when comparables change
  watch(comparables, (newComparables) => {
    if (newComparables.length > 0 && selectedComparableIds.value.length === 0 && newComparables[0]) {
      selectedComparableIds.value = [newComparables[0].id]
    }
  }, { immediate: true })

  // Get all selected comparables
  const selectedComparables = computed(() =>
    comparables.value.filter(c => selectedComparableIds.value.includes(c.id))
  )

  // First selected comparable for Penyesuaian panel calculations
  const selectedComparable = computed(() => selectedComparables.value[0])

  // Price adjustment calculation
  const priceAdjustment = computed(() => {
    if (!selectedComparable.value || !subjectProperty.value) {
      return { value: '-', class: 'text-gray-900' }
    }
    return calculateAdjustment(selectedComparable.value.price, subjectProperty.value.price)
  })

  // Area adjustment calculation
  const areaAdjustment = computed(() => {
    if (!selectedComparable.value || !subjectProperty.value) {
      return { value: '-', class: 'text-gray-900' }
    }
    return calculateAdjustment(selectedComparable.value.area, subjectProperty.value.area)
  })

  // Price per square meter calculations
  const subjectPricePerSqm = computed(() =>
    subjectProperty.value ? calculatePricePerSqm(subjectProperty.value) : 0
  )

  const comparablePricePerSqm = computed(() =>
    selectedComparable.value ? calculatePricePerSqm(selectedComparable.value) : 0
  )

  // Indicative value based on comparable's price per sqm applied to subject's area
  const indicativeValue = computed(() => {
    const subject = subjectProperty.value
    const comparable = selectedComparable.value
    if (!subject || !comparable) return 0
    return calculatePricePerSqm(comparable) * subject.area
  })

  // Map properties: show subject + all selected comparables
  const mapProperties = computed(() => {
    if (!subjectProperty.value) return []
    return [subjectProperty.value, ...selectedComparables.value]
  })

  // Map center (subject property location)
  const mapCenter = computed<[number, number]>(() => {
    if (!subjectProperty.value) return DEFAULT_MAP_CENTER
    return [subjectProperty.value.latitude, subjectProperty.value.longitude]
  })

  return {
    subjectProperty,
    comparables,
    selectedComparableIds,
    selectedComparables,
    selectedComparable,
    priceAdjustment,
    areaAdjustment,
    subjectPricePerSqm,
    comparablePricePerSqm,
    indicativeValue,
    mapProperties,
    mapCenter,
  }
}
