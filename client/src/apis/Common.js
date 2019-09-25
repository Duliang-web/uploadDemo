import { createAPI } from '@common'

export default {
  postUploadAxios: config => createAPI('/apis/uploadAxios', 'post', config),
  postUploadAxiosMultiple: config => createAPI('/apis/uploadAxiosMultiple', 'post', config)
}
