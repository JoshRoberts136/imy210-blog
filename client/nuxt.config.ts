// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL
    }
  }
};