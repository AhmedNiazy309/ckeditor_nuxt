const webpack = require("webpack");
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'y',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //https://cdn.ckeditor.com/[version.number]/[distribution]/ckeditor.js"
    ],
    script: [
      //{src: 'https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js'}
      // {src: './ckeditor.js'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
   // "~/plugins/ckeditor/ckeditor.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
        if (isDev && isClient) {
            config.module.rules.push({
                enforce: "pre",
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                exclude: /(node_modules)/
            });
        }
    }
}

}
