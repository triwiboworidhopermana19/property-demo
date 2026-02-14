// Runtime theme configuration for the property mapping UI.
// Tailwind color tokens live in tailwind.config.ts — keep them in sync.

export interface StatusConfig {
  label: string
  color: string
}

// Status colors used for marker icons, sidebar dots, and popup badges.
// Keys should match the `status` field on property records (lowercased).
export const STATUS_COLORS: Record<string, StatusConfig> = {
  available: { label: 'Available', color: '#3B82F6' },
  sold: { label: 'Sold', color: '#9CA3AF' },
  evidence: { label: 'Evidence', color: '#F97316' },
  asset: { label: 'Aset Dinilai', color: '#EAB308' },
}

export const RADIUS_OPTIONS = [
  { value: '1', label: '1 km', color: '#1B2A4A' },
  { value: '2', label: '2 km', color: '#9CA3AF' },
  { value: '5', label: '5 km', color: '#D1D5DB' },
] as const

export const NAV_ITEMS = [
  { label: 'Dashboard', to: '/' },
  { label: 'Analisis Pasar', to: '/analysis' },
  { label: 'Proyek Penilaian', to: '/valuation' },
] as const

/** Generate an SVG map pin as a data URI for Leaflet LIcon */
export function createMarkerSvg(fillColor: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
    <path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 21.9 12.5 41 12.5 41S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0Z" fill="${fillColor}" stroke="#fff" stroke-width="1.5"/>
    <circle cx="12.5" cy="12.5" r="5" fill="#fff"/>
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/** Get the marker icon data URI for a given property status */
export function getMarkerIcon(status: string): string {
  const key = status?.toLowerCase() ?? ''
  const config = STATUS_COLORS[key]
  return createMarkerSvg(config?.color ?? '#6B7280')
}
