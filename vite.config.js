import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/3d_Portfolio/",
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
