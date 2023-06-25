// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  // 把env放入这个里面，通过useRuntimeConfig获取
  vite: {
    envDir: '~/env', // 指定env文件夹
    optimizeDeps: {
      // 用于：从预捆绑中排除的依赖项
      exclude: []
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({
          importStyle: 'less' //配置为less
        })]
      })
    ],
    // ssr
    ssr: {
      noExternal: ['ant-design-vue'],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#ea6f5a'
          },
          javascriptEnabled: true,
        }
      }
    },
  },
  plugins: [
    // { src: '~/plugins/vue-pdf.ts', ssr: false }
  ],
  css: ['@/assets/base.ignore.css'],
  postcss: {
    plugins: {
      // tailwindcss: {},
      'postcss-pxtorem': {
        rootValue: 50,
        propList: ['*'],
        mediaQuery: false,
        exclude: 'ignore'
      }
    }
  },
  // 代理转发
  nitro: {
    devProxy: {
      port: process.env.VITE_APP_PORT,
      host: true,
      open: true,
      '/dev-api': {
        target: process.env.VITE_APP_BASE_URL,
        changeOrigin: true
      }
    }
  },
  modules: [
    '@vant/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt'
  ]
})
