export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337'
    }
  },

  typescript: {
    strict: true
  },

  compatibilityDate: '2025-05-14'
})