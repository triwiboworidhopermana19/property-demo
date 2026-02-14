<template>
  <header class="bg-navy text-white h-14 flex items-center px-6 shrink-0">
    <div class="flex items-center gap-2">
      <Icon name="lucide:home" class="w-6 h-6" />
      <span class="text-lg font-semibold tracking-wide">Database Properti &amp; Mapping</span>
    </div>

    <nav class="ml-auto flex items-center text-sm">
      <template v-for="(item, index) in NAV_ITEMS" :key="item.to">
        <span v-if="index > 0" class="text-white/30 mx-3">|</span>
        <NuxtLink
          :to="item.to"
          class="px-1 py-1 transition-colors hover:text-white/80"
          active-class="border-b-2 border-white font-semibold"
        >
          {{ item.label }}
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NAV_ITEMS } from '~/utils/theme'
</script>
