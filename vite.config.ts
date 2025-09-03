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
  test: {
    dir: 'src',
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          dir: 'src/use-cases',
        },
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          dir: 'src/http/controllers',
          environment: `./prisma/vitest-enviroment-prisma/prisma-test-enviroment.ts`,
        },
      },
    ],
  },
})
