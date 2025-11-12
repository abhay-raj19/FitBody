import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
  preview: {
    port: 8080,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
  server: {
    port: 8000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8000",
  },
})