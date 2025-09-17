import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/Wartung/',   // <- Pflicht für GitHub Pages unter /Wartung/
  plugins: [react()],
})

