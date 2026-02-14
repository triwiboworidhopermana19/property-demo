<template>
  <div class="flex flex-1 overflow-hidden">
    <SidebarFilters @update:filters="onFilters" />

    <div class="flex-1 relative">
      <MapView :properties="filteredProperties" :center="mapCenter" :zoom="mapZoom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Property } from '#shared/types/property'

// Fetch all properties
const { data: properties } = await useFetch<Property[]>('/api/properties', {
  default: () => [],
})

// Property filtering and map management
const { filteredProperties, mapCenter, mapZoom, updateFilters } = usePropertyFilters(properties)

// Handle filter updates from sidebar
const onFilters = updateFilters
</script>
