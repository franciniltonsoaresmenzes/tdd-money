import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const local = (paste: string) => resolve(__dirname, paste)

export default defineConfig({
  test: {
    globals: true,
    include: ['**/test/**/*.{test,spec}.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/src/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*'
    ],
    alias: {
      '@': local('./src/'),
      '@test': local('./test/')
    },
    reporters: ['verbose'],
    coverage: {
      provider: 'c8',
      all: true,
      reporter: ['clover', 'cobertura', 'text', 'html']
    }
  }
})
