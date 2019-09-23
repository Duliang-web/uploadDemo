<template>
  <div class="upload">
    <p>uploadInputForm单图上传：</p>
    <div class="upload-input-form">
      <form
        action="/apis/uploadInputForm"
        method="post"
        enctype="multipart/form-data">
        <input
          type="file"
          name="filename">
        <input
          type="submit"
          value="上传" >
      </form>
    </div>
    <p>uploadInputForm多图上传：</p>
    <div class="upload-input-form">
      <form
        action="/apis/uploadInputFormMultiple"
        method="post"
        enctype="multipart/form-data">
        <input
          type="file"
          name="filename"
          multiple>
        <input
          type="submit"
          value="上传" >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
