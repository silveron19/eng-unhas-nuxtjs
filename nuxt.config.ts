// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'eng-unhas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale-1' },
        { hid: 'description', name: 'description', content: 'home eng-unhas' },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
});
