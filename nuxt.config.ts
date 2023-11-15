export default {
  head: {
    title: 'eng-unhas',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: 'eng-unhas' },
    ],
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-directus',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Rubik: true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],
};
