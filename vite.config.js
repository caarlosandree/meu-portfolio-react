import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest" />

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/meu-portfolio-react/' : '/',


  // Propriedade TEST
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Arquivo de setup que vamos criar
  },
})