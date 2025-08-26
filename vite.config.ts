import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    sourcemap: false, // não gera nem tenta usar sourcemaps
  },
  optimizeDeps: {
    exclude: ['@prisma/client'], // evita conflitos no bundle
  },
  ssr: {
    noExternal: ['@prisma/client'], // força incluir corretamente no SSR
  },
  plugins: [tsconfigPaths()],
})
