// https://nuxt.com/docs/api/configuration/nuxt-config
const siteConfigFile = process.env.NUXT_SITE_CONFIG || 'botinex'
let siteConfig: {
    name: string,
    url: string,
    logo: string,
    description: string,
    keywords: [],
    locales: { code: string, iso: string, file: string, name: string }[],
    defaultLocale: string
} | null = null

try {
    siteConfig = require(`./app/config/site/${siteConfigFile}`).default
} catch (error) {
    console.warn(`Site config file "${siteConfigFile}" not found, falling back to "babysitters"`)
    siteConfig = require('./app/config/site/babysitters').default
}

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
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },
  plugins: [
    '~/plugins/auth.server.ts'
  ]
})
