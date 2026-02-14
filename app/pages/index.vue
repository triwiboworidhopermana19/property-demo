<template>
  <div class="flex flex-1 overflow-hidden">
    <SidebarFilters @update:filters="onFilters" />

    <div class="flex-1 relative">
      <MapView
        v-if="filteredProperties && filteredProperties.length > 0"
        :properties="filteredProperties"
        :center="mapCenter"
        :zoom="mapZoom"
      />
      <div v-else class="flex items-center justify-center h-full bg-gray-100">
        <div class="text-gray-500">No properties found</div>
      </div>
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
