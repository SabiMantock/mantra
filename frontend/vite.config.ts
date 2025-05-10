import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),eslint({
      fix: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),],
})
