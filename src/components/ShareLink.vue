<template>
  <van-popup class="linkPopup" @click-overlay="close" round v-model="showShareLink" style="background-color: #CCCCFF" >
    <div class="shareMsg">{{shareMessage}}</div>
    <p class="shareLink">{{shareLink}}</p>
  </van-popup>
</template>

<script>
import Vue from 'vue';
import {Popup} from 'vant';
Vue.use(Popup);
export default {
  name: "ShareLink",
  props: {
    showLink: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showShareLink: false,
      shareMessage:'复制链接分享你的年度账单',
      shareLink:'分享链接***'
    }
  },
  watch: {
    showLink () {
      this.showShareLink = this.showLink
    }
  },
  methods: {
    close () {
      this.showShareLink = false
      this.$emit('closeShareLink')
    }
  }
}
</script>

<style scoped>

</style>
