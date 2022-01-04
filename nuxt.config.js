
const dev = process.env.NODE_ENV !== 'production';
import { resolve } from 'path'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // server: {
  //   host: '192.168.1.105',
  //   port: 3000
  // },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'white-whale',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#321c81',
    height: '5px'
  },

  loadingIndicator: {
    name: 'circle',
    color: '#321c81',
    background: 'white'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/components/vee-validate",
    "~/plugins/components/vue-select",
    "~/plugins/global-directives",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-izitoast'
  ],

  styleResources: {
    scss: './assets/scss/var.scss'
  },

  izitoast: {
    position: 'bottomRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: dev ? 'localhost' : 'server',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fa',
      background_color: "#fff"
    },
  },

  alias: {
    'images': resolve(__dirname, './assets/media/images'),
    'svg': resolve(__dirname, './assets/media/svg'),
    'global': resolve(__dirname, './assets/media/global')
  },

  gsap: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
