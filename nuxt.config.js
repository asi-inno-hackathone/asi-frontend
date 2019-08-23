/* eslint-env node */

export default {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s ∫ glass',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hackathon frontend project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  /*
  ** Load nuxt modules
  */
  modules: [],

  /*
  ** Load nuxt de-modules
  */
  devModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/static/css/tailwind.css',
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false,
        },
      },
      // Change the postcss-preset-env settings
      preset: {
        autoprefixer: {
          cascade: false,
          grid: true,
        },
      },
    },

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
