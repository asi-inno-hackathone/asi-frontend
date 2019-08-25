/* eslint-env node */

export default {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | UStart',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UStart – мы помогаем стартаперам, предпринимателям, инвесторам и грантодателям найти друг друга' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  /*
  ** Load nuxt modules
  */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-env', {
      keys: [
        {
          key: 'API_URL',
          default: 'http://188.130.155.115',
        },
      ],
    }],
  ],

  css: ['~/static/css/home.css', '~/static/css/styles.css'],
  /*
  ** Load nuxt de-modules
  */
  devModules: [
    '@nuxtjs/eslint-module',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  axios: {
    https: false,
  },

  plugins: [
    '~plugins/axios.js',
  ],
  /*
  ** Build configuration
  */
  build: {

    extractCSS: true,

    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {

        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            emitWarning: true,
          },
        });
      }
    },
  },
};
