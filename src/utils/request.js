import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '@/store'

import router from '@/router/index.js'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  transformResponse: [data => {
    try {
      return JSONBig.parse(data)
    } catch (err) {
      return data
    }
  }]

})

// 请求拦截器
instance.interceptors.request.use(config => {
  if (store.state.user.token) {
    config.headers.Authorization = 'Bearer' + store.state.user.token
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  try {
    return res.data.data
  } catch (err) {
    return res.data
  }
}, err => {
  if (err.response.status === 401) {
    router.push('/login')

    return new Promise(() => {})

  }
  return Promise.reject(err)
})

const creteAPI = (url, method, data) => {
  let config = {}
  method.toLocaleUpperCase == 'GET' && (config.param = data) || (config = data)
  return instance({
    url,
    method,
    ...data
  })
}

export default instance
