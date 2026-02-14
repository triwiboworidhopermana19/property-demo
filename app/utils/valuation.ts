import type { Property } from '#shared/types/property'

/**
 * Calculate price difference percentage between two properties
 */
export function calculatePriceDiffPercent(comparable: Property, subject: Property): number {
  const diff = comparable.price - subject.price
  return (diff / subject.price) * 100
}

/**
 * Format price difference as percentage string
 */
export function formatPriceDiff(percentage: number): string {
  return `${percentage > 0 ? '+' : ''}${percentage.toFixed(1)}%`
}

/**
 * Get Tailwind CSS classes for adjustment badge based on percentage
 */
export function getAdjustmentClass(percentage: number): string {
  if (percentage >= 3.5) return 'bg-green-100 text-green-700'
  if (percentage >= 2.5) return 'bg-yellow-100 text-yellow-700'
  return 'bg-orange-100 text-orange-700'
}

/**
 * Calculate price per square meter
 */
export function calculatePricePerSqm(property: Property): number {
  return property.price / property.area
}

/**
 * Calculate adjustment data for comparison
 */
export function calculateAdjustment(value1: number, value2: number) {
  const diff = value1 - value2
  const percent = (diff / value2) * 100
  return {
    value: `${diff > 0 ? '+' : ''}${percent.toFixed(1)}%`,
    class: diff > 0 ? 'text-green-600' : 'text-red-600'
  }
}
