import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 1. 每次发起请求前
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 2. 响应数据回来前 (对数据处理)
request.defaults.transformResponse = [function (data) {
  try {
    // return JSONBig.parse(data)
    return data
  } catch (error) {
    return data
  }
}]

// 3. 每次响应回来前
request.interceptors.response.use(function (response) {
  // 如果响应结果对象中有 data，则直接返回这个 data 数据
  // 如果响应结果对象中没有 data，则不作任何处理，直接原样返回这个数据
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})

export default request
