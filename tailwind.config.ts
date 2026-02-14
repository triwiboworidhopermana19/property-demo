import type { Config } from 'tailwindcss'

// Custom color tokens for the property mapping UI.
// Runtime JS equivalents live in app/utils/theme.ts — keep them in sync.
export default {
  content: [
    './app/**/*.{vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#2C3E5A',
        },
        // Property status colors
        status: {
          available: '#3B82F6',
          sold: '#9CA3AF',
          evidence: '#F97316',
          asset: '#EAB308',
        },
        // Sidebar
        sidebar: {
          bg: '#F3F4F6',
          border: '#D1D5DB',
        },
        // Radius legend
        radius: {
          '1km': '#1B2A4A',
          '2km': '#9CA3AF',
          '5km': '#D1D5DB',
        },
      },
    },
  },
} satisfies Config
