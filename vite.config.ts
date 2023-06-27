import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: "VueEditor",
      fileName: (format) => `vue-editor.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'lib': fileURLToPath(new URL('./lib', import.meta.url)),
    }
  },
  optimizeDeps: {
    exclude: ['oh-vue-icons']
  },
  plugins: [
    vue(),
    UnoCSS({
      mode: 'global',
      transformers: [
        transformerDirectives()
      ],
      content: {
        pipeline: {
          include: [/\.(vue|ts|html)($|\?)/]
        }
      }
    })
  ],
})
