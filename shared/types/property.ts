export interface Property {
  id: number
  title: string
  latitude: number
  longitude: number
  price: number
  area: number
  status: string
  city: string
  type: string
}

export interface ActiveFilters {
  city?: string
  type?: string
  priceRange?: string
  radius?: string
  status?: string[]
}
