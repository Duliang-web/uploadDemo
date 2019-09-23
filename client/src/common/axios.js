/* eslint-disable */

import axios from 'axios'

const _axios = axios.create({
  timeout: 20000, // request timeout
})

_axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default _axios