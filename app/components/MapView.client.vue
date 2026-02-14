<template>
  <div class="h-full w-full">
    <LMap ref="mapRef" :zoom="zoom" :center="center" style="height: 100%; width: 100%;" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />

      <LMarker
        v-for="prop in properties"
        :key="`${markersKey}-${prop.id}`"
        :lat-lng="[prop.latitude, prop.longitude]"
      >
        <LIcon
          :icon-url="getMarkerIcon(prop.status)"
          :icon-size="[25, 41]"
          :icon-anchor="[12, 41]"
          :popup-anchor="[1, -34]"
        />
        <LPopup>
          <PropertyCard :property="prop" />
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { getMarkerIcon } from '~/utils/theme'

const props = withDefaults(defineProps<{
  properties?: Array<Record<string, any>>
  center?: [number, number]
  zoom?: number
}>(), {
  properties: () => [],
  center: () => [-6.2, 106.816666] as [number, number],
  zoom: 12,
})

const mapRef = ref<any>(null)

// Changes whenever the filtered set changes, forcing LMarker re-creation
const markersKey = computed(() =>
  props.properties.map(p => p.id).join(',')
)

function fitMapToMarkers() {
  const map = mapRef.value?.leafletObject || mapRef.value?.mapObject || mapRef.value
  if (!map || !props.properties.length) return
  try {
    const bounds = props.properties.map((p: any) => [p.latitude, p.longitude])
    map.fitBounds(bounds, { padding: [40, 40] })
  } catch {
    // ignore bounds errors
  }
}

onMounted(() => fitMapToMarkers())

// Watch the full array reference, not just length
watch(() => props.properties, () => {
  nextTick(() => fitMapToMarkers())
}, { flush: 'post' })
</script>
