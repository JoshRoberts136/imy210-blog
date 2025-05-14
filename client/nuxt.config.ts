// Josh Roberts, u23536765
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/axios.js'],
  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL
    }
  }
});