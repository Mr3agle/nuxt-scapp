export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Simpol Commerce Client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/simpoltheme.css',
    '@/assets/sass/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],
  auth: {
    strategies:{
      local:{
          token: {
            // property: 'credentials.token',
            property: 'token',
            // required: true,
            type: 'Bearer'
            // type: ''
          },
          user: {
            property: 'user',
            autoFetch: true
          },
          endpoints: {
            // login: { url: '/auth/login', method: 'post' },
            // logout: { url: '/auth/logout', method: 'post' },
            // user: { url: '/auth/user', method: 'get' }
            login: { url: '/login', method: 'post' },
            logout: { url: '/logout', method: 'post' },
            user: { url: '/user', method: 'get' }
          }
      },
      redirect: {
        login: '/auth/login',
        logout: '/',
        callback: '/auth/login',
        home: '/'
      }
    }
  },
  //middleware
  router:{
    // middleware:['authUser']
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-gsap',
    ['@nuxtjs/fontawesome',{
      component: 'fa',
      suffix: true
    }]
  ],
  fontawesome:{
    icons:{
      solid: true,
      brands: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module',
    // ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,

      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: 'http://simpolapi.test/api',
    baseURL: 'http://scapi.test/api',
    // credentials: true,
    // proxy:true,
    https: true,
    // prefix: 'https://simpolapi.test/api'
  },
  // proxy: {
  //   '/api/': 'https://simpolapi.test',
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    transpile: [/^element-ui/],
  },
  styleResources: {
    scss: ['@/assets/sass/app.scss']
  },

}
