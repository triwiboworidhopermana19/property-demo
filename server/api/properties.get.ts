import type { Property } from '#shared/types/property'

const properties: Property[] = [
  // — Jayapura Kota —
  { id: 1, title: 'Rumah Tipe 45 Entrop', latitude: -2.5335, longitude: 140.7178, price: 650000000, area: 45, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 2, title: 'Rumah 2 Lantai Dok V', latitude: -2.5312, longitude: 140.7215, price: 1200000000, area: 120, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 3, title: 'Ruko Jl. Ahmad Yani', latitude: -2.5340, longitude: 140.7190, price: 2800000000, area: 180, status: 'Evidence', city: 'Jayapura', type: 'Ruko' },
  { id: 4, title: 'Apartemen Jayapura City', latitude: -2.5290, longitude: 140.7160, price: 450000000, area: 36, status: 'Sold', city: 'Jayapura', type: 'Apartemen' },
  { id: 5, title: 'Rumah Mewah Angkasa', latitude: -2.5275, longitude: 140.7225, price: 3500000000, area: 250, status: 'Asset', city: 'Jayapura', type: 'Rumah' },
  { id: 6, title: 'Ruko Pasar Mama-Mama', latitude: -2.5355, longitude: 140.7145, price: 1500000000, area: 90, status: 'Available', city: 'Jayapura', type: 'Ruko' },
  { id: 7, title: 'Rumah BTN Dok IX', latitude: -2.5260, longitude: 140.7200, price: 380000000, area: 36, status: 'Sold', city: 'Jayapura', type: 'Rumah' },

  // — Abepura —
  { id: 8, title: 'Rumah Dekat Uncen', latitude: -2.5920, longitude: 140.6690, price: 550000000, area: 60, status: 'Available', city: 'Abepura', type: 'Rumah' },
  { id: 9, title: 'Ruko Jl. Raya Abepura', latitude: -2.5895, longitude: 140.6725, price: 1800000000, area: 150, status: 'Evidence', city: 'Abepura', type: 'Ruko' },
  { id: 10, title: 'Rumah Cluster Perumnas III', latitude: -2.5945, longitude: 140.6660, price: 420000000, area: 42, status: 'Available', city: 'Abepura', type: 'Rumah' },
  { id: 11, title: 'Apartemen Mahasiswa Abepura', latitude: -2.5910, longitude: 140.6710, price: 300000000, area: 28, status: 'Sold', city: 'Abepura', type: 'Apartemen' },
  { id: 12, title: 'Rumah 2 Lantai Waena', latitude: -2.5750, longitude: 140.6800, price: 950000000, area: 100, status: 'Asset', city: 'Abepura', type: 'Rumah' },
  { id: 13, title: 'Ruko Kompleks Waena', latitude: -2.5765, longitude: 140.6785, price: 2200000000, area: 160, status: 'Available', city: 'Abepura', type: 'Ruko' },

  // — Sentani —
  { id: 14, title: 'Rumah Dekat Bandara Sentani', latitude: -2.5760, longitude: 140.5160, price: 480000000, area: 50, status: 'Available', city: 'Sentani', type: 'Rumah' },
  { id: 15, title: 'Ruko Jl. Kemiri Sentani', latitude: -2.5740, longitude: 140.5185, price: 1350000000, area: 110, status: 'Evidence', city: 'Sentani', type: 'Ruko' },
  { id: 16, title: 'Rumah View Danau Sentani', latitude: -2.5830, longitude: 140.5100, price: 1800000000, area: 200, status: 'Asset', city: 'Sentani', type: 'Rumah' },
  { id: 17, title: 'Rumah Tipe 36 Perumnas Sentani', latitude: -2.5720, longitude: 140.5210, price: 280000000, area: 36, status: 'Sold', city: 'Sentani', type: 'Rumah' },
  { id: 18, title: 'Ruko Pasar Sentani', latitude: -2.5700, longitude: 140.5170, price: 1600000000, area: 130, status: 'Available', city: 'Sentani', type: 'Ruko' },
  { id: 19, title: 'Apartemen Transit Sentani', latitude: -2.5715, longitude: 140.5195, price: 350000000, area: 32, status: 'Sold', city: 'Sentani', type: 'Apartemen' },

  // — Skouw / Muara Tami —
  { id: 20, title: 'Tanah Kavling Skouw', latitude: -2.4920, longitude: 140.7850, price: 200000000, area: 500, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 21, title: 'Rumah Perbatasan RI-PNG', latitude: -2.4880, longitude: 140.7900, price: 350000000, area: 70, status: 'Evidence', city: 'Jayapura', type: 'Rumah' },
  { id: 22, title: 'Ruko Muara Tami', latitude: -2.4950, longitude: 140.7820, price: 900000000, area: 100, status: 'Asset', city: 'Jayapura', type: 'Ruko' },

  // — Hamadi / Pantai area —
  { id: 23, title: 'Rumah Pantai Hamadi', latitude: -2.5450, longitude: 140.7250, price: 750000000, area: 80, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 24, title: 'Ruko Jl. Koti Hamadi', latitude: -2.5430, longitude: 140.7230, price: 1100000000, area: 95, status: 'Sold', city: 'Jayapura', type: 'Ruko' },
  { id: 25, title: 'Rumah Tipe 54 Hamadi', latitude: -2.5470, longitude: 140.7270, price: 580000000, area: 54, status: 'Evidence', city: 'Jayapura', type: 'Rumah' },

  // — New entries — 25 more properties with realistic plot points
  { id: 26, title: 'Rumah Dekat Pasar Entrop', latitude: -2.5320, longitude: 140.7185, price: 600000000, area: 50, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 27, title: 'Ruko Dok V', latitude: -2.5305, longitude: 140.7220, price: 1600000000, area: 120, status: 'Evidence', city: 'Jayapura', type: 'Ruko' },
  { id: 28, title: 'Apartemen Entrop', latitude: -2.5280, longitude: 140.7165, price: 400000000, area: 30, status: 'Sold', city: 'Jayapura', type: 'Apartemen' },
  { id: 29, title: 'Rumah Jalan Yos Sudarso', latitude: -2.5250, longitude: 140.7190, price: 700000000, area: 60, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 30, title: 'Ruko Sentani Baru', latitude: -2.5730, longitude: 140.5200, price: 1800000000, area: 150, status: 'Available', city: 'Sentani', type: 'Ruko' },
  { id: 31, title: 'Rumah Perumnas Dok IX', latitude: -2.5270, longitude: 140.7205, price: 400000000, area: 36, status: 'Sold', city: 'Jayapura', type: 'Rumah' },
  { id: 32, title: 'Rumah Baru Abepura', latitude: -2.5900, longitude: 140.6700, price: 500000000, area: 55, status: 'Available', city: 'Abepura', type: 'Rumah' },
  { id: 33, title: 'Ruko Waena Tengah', latitude: -2.5770, longitude: 140.6790, price: 2000000000, area: 140, status: 'Available', city: 'Abepura', type: 'Ruko' },
  { id: 34, title: 'Apartemen Mahasiswa Waena', latitude: -2.5780, longitude: 140.6780, price: 320000000, area: 28, status: 'Sold', city: 'Abepura', type: 'Apartemen' },
  { id: 35, title: 'Rumah Sentani Barat', latitude: -2.5800, longitude: 140.5150, price: 600000000, area: 70, status: 'Available', city: 'Sentani', type: 'Rumah' },
  { id: 36, title: 'Ruko Pantai Hamadi', latitude: -2.5460, longitude: 140.7260, price: 1200000000, area: 100, status: 'Available', city: 'Jayapura', type: 'Ruko' },
  { id: 37, title: 'Rumah Dok V Timur', latitude: -2.5315, longitude: 140.7230, price: 680000000, area: 50, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 38, title: 'Ruko Entrop Selatan', latitude: -2.5345, longitude: 140.7150, price: 1500000000, area: 90, status: 'Evidence', city: 'Jayapura', type: 'Ruko' },
  { id: 39, title: 'Apartemen Sentani Timur', latitude: -2.5710, longitude: 140.5210, price: 360000000, area: 32, status: 'Sold', city: 'Sentani', type: 'Apartemen' },
  { id: 40, title: 'Rumah Pantai Dok V', latitude: -2.5295, longitude: 140.7240, price: 780000000, area: 65, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 41, title: 'Ruko Abepura Barat', latitude: -2.5925, longitude: 140.6675, price: 1700000000, area: 130, status: 'Available', city: 'Abepura', type: 'Ruko' },
  { id: 42, title: 'Rumah Skouw Perbatasan', latitude: -2.4895, longitude: 140.7885, price: 400000000, area: 70, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 43, title: 'Ruko Muara Tami Tengah', latitude: -2.4960, longitude: 140.7840, price: 950000000, area: 120, status: 'Evidence', city: 'Jayapura', type: 'Ruko' },
  { id: 44, title: 'Rumah Entrop Baru', latitude: -2.5325, longitude: 140.7160, price: 620000000, area: 48, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 45, title: 'Apartemen Hamadi', latitude: -2.5445, longitude: 140.7245, price: 340000000, area: 32, status: 'Sold', city: 'Jayapura', type: 'Apartemen' },
  { id: 46, title: 'Rumah Sentani Timur', latitude: -2.5745, longitude: 140.5180, price: 500000000, area: 55, status: 'Available', city: 'Sentani', type: 'Rumah' },
  { id: 47, title: 'Ruko Jalan Yos Sudarso', latitude: -2.5265, longitude: 140.7185, price: 1600000000, area: 110, status: 'Evidence', city: 'Jayapura', type: 'Ruko' },
  { id: 48, title: 'Rumah Baru Pantai Dok V', latitude: -2.5280, longitude: 140.7250, price: 710000000, area: 60, status: 'Available', city: 'Jayapura', type: 'Rumah' },
  { id: 49, title: 'Ruko Entrop Barat', latitude: -2.5350, longitude: 140.7135, price: 1550000000, area: 95, status: 'Available', city: 'Jayapura', type: 'Ruko' },
  { id: 50, title: 'Rumah Mewah Pantai Hamadi', latitude: -2.5475, longitude: 140.7280, price: 3200000000, area: 200, status: 'Asset', city: 'Jayapura', type: 'Rumah' },
]

export default defineEventHandler((): Property[] => properties)
