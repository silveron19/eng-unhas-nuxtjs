/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      'max-sm': { max: '641px'},

      'max-md': { max: '769px'},

      'max-lg': { max: '1025px'},

      'max-xl': { max: '1281px'},

      'max-2xl': { max: '1537px'},
      
      'sm': { min: '640px' },

      'md': { min: '768px' },

      'lg': { min: '1024px' },

      'xl': { min: '1280px' },

      '2xl': { min: '1536px' },
    },
  },
  mode: 'jit',
  plugins: [],
};
