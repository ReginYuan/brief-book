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
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }
  opt.headers = headers
  return useFetch(url, {
    ...opt,
    baseURL: '',
    onRequest({ request, options, error }) {
      console.log('request', request)
    },
    onResponse({ request, response, options }) {
      console.log('response', response)
    },
    onResponseError({ request, response, options }) {

    }
  })
}