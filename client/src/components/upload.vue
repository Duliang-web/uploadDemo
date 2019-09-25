<template>
  <div class="upload">
    <p>uploadInputForm 单图上传：</p>
    <div class="upload-input-form">
      <form
        action="/apis/uploadInputForm"
        method="post"
        enctype="multipart/form-data">
        <input
          type="file"
          name="file">
        <input
          type="submit"
          value="上传" >
      </form>
    </div>
    <p>uploadInputForm 多图上传：</p>
    <div class="upload-input-form">
      <form
        action="/apis/uploadInputFormMultiple"
        method="post"
        enctype="multipart/form-data">
        <input
          type="file"
          name="file"
          multiple>
        <input
          type="submit"
          value="上传" >
      </form>
    </div>
    <p>uploadAxios 单图上传：</p>
    <div class="upload-axios">
      <input
        type="file"
        name="file"
        ref="file">
      <input
        type="submit"
        value="上传"
        @click="postUploadAxios">
    </div>
    <p>uploadAxios 多图上传：</p>
    <div class="upload-axios">
      <input
        type="file"
        name="file"
        ref="fileMultiple"
        multiple>
      <input
        type="submit"
        value="上传"
        @click="postUploadAxiosMultiple">
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
      data.append('file', file, file.name)
      let res = await apis.Common.postUploadAxios({
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: data
      })
      console.log(res)
    },
    async postUploadAxiosMultiple () {
      const data = new FormData()
      for (var i = 0; i < this.$refs.fileMultiple.files.length; i++) {
        data.append('file', this.$refs.fileMultiple.files[i], this.$refs.fileMultiple.files[i].name)
      }
      let res = await apis.Common.postUploadAxiosMultiple({
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
