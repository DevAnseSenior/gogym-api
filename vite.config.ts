import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['@prisma/client'],
  },
  ssr: {
    noExternal: ['@prisma/client'],
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
