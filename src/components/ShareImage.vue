<template>
  <div class="popupDiv">
    <van-popup class="imgPopup" round v-model="showImage" @click-overlay="close">
      <van-image width="45vh" height="80vh" fit="fill" :src="dataUrl" />
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import {Popup} from 'vant';
import {Image as VanImage} from 'vant';
Vue.use(Popup);
Vue.use(VanImage);
export default {
  name: "ShareImage",
  props: {
    showImg: {
      type: Boolean,
      default: false
    },
    dataUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showImage: false
    }
  },
  watch: {
    showImg () {
      this.showImage = this.showImg
    }
  },
  methods: {
    close () {
      this.showImage = false
      this.$emit('closeImg')
    }
  }
}
</script>

<style scoped>

</style>
