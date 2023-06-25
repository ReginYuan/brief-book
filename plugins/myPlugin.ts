export default defineNuxtPlugin(nuxtApp=>{
  return {
    // 自动提供辅助函数，返回辅助函数
    provide:{
      myPlugin:(msg:string )=>`hello ${msg}`
    }
  }
})