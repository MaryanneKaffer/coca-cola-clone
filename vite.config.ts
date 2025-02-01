import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip', 
      ext: '.gz',
      threshold: 1024, 
      filter: /\.(js|mjs|json|css|html|svg|ts)$/,
    }),
   ],
})
