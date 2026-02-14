<template>
  <header class="bg-navy text-white h-14 flex items-center px-3 md:px-6 shrink-0">
    <!-- Logo and Title -->
    <div class="flex items-center gap-2 min-w-0">
      <Icon name="lucide:home" class="w-5 h-5 md:w-6 md:h-6 shrink-0" />
      <span class="text-sm md:text-lg font-semibold tracking-wide truncate">
        <span class="hidden sm:inline">Database Properti &amp; Mapping</span>
        <span class="sm:hidden">Properti</span>
      </span>
    </div>

    <!-- Navigation -->
    <nav class="ml-auto flex items-center text-xs md:text-sm gap-2 md:gap-0">
      <template v-for="(item, index) in NAV_ITEMS" :key="item.to">
        <span v-if="index > 0" class="hidden md:inline text-white/30 mx-3">|</span>
        <NuxtLink
          :to="item.to"
          class="px-2 md:px-1 py-1 transition-colors hover:text-white/80 whitespace-nowrap"
          active-class="border-b-2 border-white font-semibold"
        >
          <span class="hidden md:inline">{{ item.label }}</span>
          <span class="md:hidden">{{ item.label.split(' ')[0] }}</span>
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NAV_ITEMS } from '~/utils/theme'
</script>
