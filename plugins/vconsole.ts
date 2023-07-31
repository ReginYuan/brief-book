import { defineNuxtPlugin } from '#app'
// 调试vconsole工具
import VConsole from 'vconsole';


export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV !== 'production') {
    // 在非生产环境下创建 vConsole 实例
    new VConsole();
  }
})