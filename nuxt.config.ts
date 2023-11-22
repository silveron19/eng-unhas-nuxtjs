export default {
  routeRules: {
    "/testing": {
      proxy: { to: "https://www.google.com/?hl=ID" },
    },
    "/berita": {
      proxy: { to: "http://localhost:8055/items/berita" },
    },
    "/events": {
      proxy: { to: "http://localhost:8055/items/events" },
    },
    "/galeri": {
      proxy: { to: "http://localhost:8055/items/galeri" },
    },
    "/test": {
      proxy: {
        to: "http://localhost:8055/assets",
      },
    },
  },
  head: {
    title: "eng-unhas",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      { hid: "description", name: "description", content: "eng-unhas" },
    ],
  },
  css: ["~/assets/css/main.css"],
  modules: [
<<<<<<< Updated upstream
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-directus',
=======
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
>>>>>>> Stashed changes
    [
      "@nuxtjs/google-fonts",
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
