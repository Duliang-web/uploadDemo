<template>
  <div class="upload">
    <div class="upload-axios">
      <input
        type="file"
        ref="file">
      <input
        type="submit"
        value="上传"
        @click="postUploadAxios">
    </div>
  </div>
</template>

<script>
import * as apis from '@apis'

export default {
  name: '',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    async postUploadAxios () {
      const file = this.$refs.file.files[0]
      const data = new FormData()
      data.append('file', file)
      let res = await apis.Common.postUploadAxios({
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: data
      })
      console.log(res)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
