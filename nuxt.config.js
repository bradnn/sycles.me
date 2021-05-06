export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sycles',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'author', content: 'sycles' },
      { name: 'theme-color', content: '#ff9eb5' },
      { property: 'og:title', content: 'sycles' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://sycles.me/' },
      { property: 'og:image', content: 'https://cdn.discordapp.com/avatars/767877736739242025/a_9d57e16f094d0874e61c17c0b9c8e20e' },
      { property: 'og:description', content: '16 y/o developer from Washington State.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/svg"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
