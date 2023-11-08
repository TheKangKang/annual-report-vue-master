<template>
  <van-popover
      v-model="showPopover"
      trigger="click"
      :actions="actions"
      @select="onSelect"
      class="shareBtnPopup"
      theme="light"
      placement="left-start"

  >
    <template #reference>
      <div class="shareBtn"><div class="share"></div></div>
    </template>
  </van-popover>
</template>

<script>
import Vue from 'vue';
import {Popover} from 'vant';
import {Toast} from "vant";
import html2canvas from "html2canvas";
Vue.use(Popover);
Vue.use(Toast);
export default {
  name: "Share",
  props: {
    imgId: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      actions:[{text:"分享图片"}],
      // ,{text: "分享链接"}
      showImg: false,
      showLink:false,
      dataURL: '',
      showPopover: false
    }
  },
  methods: {
    onSelect(action){
      if(action.text=='分享图片'){
        this.download()
      }
      /*if(action.text=='分享链接'){
        // this.getLink()
        this.getLinkHere()
      }*/
    },
    download() {
      const that = this
      that.$nextTick(function () {
        // console.log(that.imgId)
        Toast({
          message:'长按下载图片',
          position:'bottom',
          duration: 2000
        })
        html2canvas(document.querySelector(that.imgId)).then(canvas => {
          const imgUrl = canvas.toDataURL('image/png')
          that.showImg = true
          this.$emit('showImg', { showImg: true, dataUrl: imgUrl })
          that.dataUrl = imgUrl
        })
      })
    },
    getLinkHere(){
      this.showLink=true;
      this.$emit('showLink', { showLink: true })
    }
  }
}
</script>

<style scoped>

</style>
