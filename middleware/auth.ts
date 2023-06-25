/**
 * 具名路由中间件
 */
export default function ({ store, redirct }) {
  // 判断用户 是否登录
  // 假设
  let authUser = false
  if (!authUser) {
    return navigateTo('/login')
  }
}
