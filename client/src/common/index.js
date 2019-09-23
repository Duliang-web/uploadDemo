import axios from './axios.js'

/**
 * 创建异步请求
 * @param url        除base url外部分
 * @param method     method: get, post, delete, put
 * @param config     相关参数
 */
const createAPI = (url, method, config = {}) => {
  return axios({
    url,
    method,
    ...config
  })
}

export { createAPI }
