// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/leaflet',
    'reka-ui',
    '@nuxtjs/tailwindcss',
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],

  css: ['leaflet/dist/leaflet.css'],

  // Vercel deployment configuration
  nitro: {
    preset: 'vercel'
  },

  // Ensure proper SSR handling
  vite: {
    optimizeDeps: {
      exclude: ['leaflet']
    }
  }
})