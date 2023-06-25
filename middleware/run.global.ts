/**
 * 全局路由中间件
 * 全局路由中间件，放置在middleware/目录中(带有.global后缀)，
 * 并将在每次路由更改时自动运行。 
 * 如下例子，我们在middleware/创建一个run.global.ts中间件：
 */
export default defineNuxtRouteMiddleware((to, from )=>{
  console.log(`全局路由中间件 to: ${to.path}, from: ${from.path}`)
})