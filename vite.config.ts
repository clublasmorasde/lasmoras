import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Club Las Moras',
        short_name: 'Las Moras',
        description: 'Reserva de canchas y eventos en Club Las Moras',
        theme_color: '#0a2e2a', // Tu verde inglés premium
        background_color: '#ffffff',
        display: 'standalone', // Esto quita la barra del navegador (parece App nativa)
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})