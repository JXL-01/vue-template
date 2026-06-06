import { fileURLToPath, URL } from 'node:url'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// import vueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'
// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  plugins: [
    vue(),
    // vueDevTools(),
    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'pinia',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
      ],
      vueTemplate: true,
    }),
    VueRouter({

    }),
    Layouts({

    }),
    Components({
      dts: 'src/components.d.ts',
      dirs: [
        'src/components',
      ],
      extensions: [
        'vue',
      ],
      deep: true,
      collapseSamePrefixes: true,
      directoryAsNamespace: true,
      globs: [
        'src/components/**/*.vue',
      ],

      resolvers: [
        PrimeVueResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
