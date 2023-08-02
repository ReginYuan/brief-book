interface myFetchOptions {
  headers?: Record<string, string>
  [key: string]: any
}

export const useHttpFetch = (url: string, opt: myFetchOptions) => {
  //token
  const token = useCookie('token')

  // 添加请求头和token
  const headers = {
    ...opt.headers,
    ...(token.value ? { Authorization: `Bearer ${token.value}` } : {})
  }
  opt.headers = headers
  return useFetch(url, {
    ...opt,
    baseURL: '', //基本url配置
    onRequest({ request, options, error }) {
      console.log('request', request)
    },
    onRequestError({ request, options, error }) {},
    onResponse({ request, response, options }) {
      console.log('response', response)
      // 自定义返回数据
      if (response._data.code === 0) {
        // 处理
        response._data = response._data.data
      }
    },
    onResponseError({ request, response, options }) {
      // 判断状态，如401时，返回未登录
    }
  })
}

export const useInfoFetch = (opt: myFetchOptions) => {
  return useHttpFetch('/user/info', opt)
}
