/**
 * Map center coordinates for cities in Papua
 */
export const CITY_CENTERS: Record<string, [number, number]> = {
  Jayapura: [-2.533, 140.717],
  Abepura: [-2.592, 140.669],
  Sentani: [-2.576, 140.516],
}

/**
 * Default map configuration
 */
export const DEFAULT_MAP_CENTER: [number, number] = CITY_CENTERS.Jayapura
export const DEFAULT_MAP_ZOOM = 13
