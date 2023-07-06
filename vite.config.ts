import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/vue-tik.ts'),
      name: 'VueEditor',
      formats: ['es', 'umd']
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
  optimizeDeps: {
    exclude: ['oh-vue-icons']
  },
  plugins: [
    vue(),
    UnoCSS({
      mode: 'global',
      transformers: [transformerDirectives()],
      content: {
        pipeline: {
          include: [/\.(vue|ts|html)($|\?)/]
        }
      },
      presets: [presetUno(), presetScrollbar()]
    })
  ]
})
