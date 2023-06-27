import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'
import dts from "vite-plugin-dts"

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
    }),
    dts({
      // include: [resolve(__dirname, "lib/types.d.ts")],
      // tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      tsConfigFilePath: resolve(__dirname, "tsconfig.app.json"),
      insertTypesEntry: true,
      entryRoot: resolve(__dirname),
      skipDiagnostics: true,
    })
  ],
})
