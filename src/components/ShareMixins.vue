<script>
export default {
  name: "ShareMixins",
  data () {
    return {
      showImg: false,
      showLink: false,
      dataUrl: ''
    }
  },
  methods: {
    downloadImg (data) {
      console.log('data', data)
      this.showImg = data.showImg
      this.dataUrl = data.dataUrl
    },
    shareLink (data) {
      this.showLink = data.showLink
    },
    closeImg () {
      this.showImg = false
    },
    closeLink () {
      this.showLink = false
    }
  }
}
</script>

<style scoped>

</style>
