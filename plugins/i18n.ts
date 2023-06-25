import { createI18n } from 'vue-i18n'
import cn from '~/locales/cn'
import en from '~/locales/en'

const message = { cn, en }

// nuxt3 有自带的的存储和获取cookie方式
const langages = useCookie('lang')

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'cn',
  locale: langages.value || 'cn', //获取
  warnHtmlMessage: false,
  messages: message
})

export  default  defineNuxtPlugin(nuxtApp=>{
  nuxtApp.vueApp.use(i18n)
})
