import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://messaging-app-websockets.up.railway.app/',
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
  },
})
