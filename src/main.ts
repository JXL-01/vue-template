import type { App as VueApp } from 'vue'
import Aura from '@primeuix/themes/aura'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

Object.values(
  import.meta.glob<{ install: (app: VueApp) => void }>('./modules/*.ts', {
    eager: true,
  }),
).forEach(({
  install,
}) =>
  install(app),
)

app.mount('#app')
