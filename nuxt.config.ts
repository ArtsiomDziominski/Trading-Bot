// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-21',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  app: {
    head: {
      title: 'CryptoBot | Institutional-Grade Automated Trading',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },
  ui: {
    theme: {
      transitions: false
    }
  },
  components: [
    {
      path: '~/components/global',
      global: true
    },
    {
      path: '~/components/pages',
      prefix: 'Pages'
    }
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: []
    }
  }
})
