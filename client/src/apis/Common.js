import { createAPI } from '@common'

export default {
  postUploadAxios: config => createAPI('/apis/uploadAxios', 'post', config)
}
