import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione a propriedade base aqui:
  base: '/meu-portfolio-react/', // <--- Adicione esta linha
  // Exemplo: base: '/portfolio-pessoal-react/',
})