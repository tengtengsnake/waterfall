import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // 或直接設為你主機的 IP，例如 '0.0.0.0'
    allowedHosts: ['ube.li'] // 允許來自這個 host 的請求
  },
})
