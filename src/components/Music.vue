<template>
  <div>
    <div @click="changeOn" :class="isOff?'isOff':'isOn'">
    </div>
    <audio id="audio" :src="require('../assets/vedio/music.mp3')"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOff:true
    }
  },
  components: {},
  created(){
  },
  mounted() {
    // 自动播放音乐效果，解决微信自动播放问题
    document.addEventListener('touchstart',this.audioAutoPlay,false);
    document.addEventListener('WeixinJSBridgeReady', this.audioAutoPlay,false);
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function () {//播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    }
  },
  methods: {
    changeOn(){
      let oAudio = document.querySelector("#audio");
      if(this.isOff){
        oAudio.play();//让音频文件开始播放
      }else{
        oAudio.pause();//让音频文件暂停播放
      }
      this.isOff = !this.isOff;
    },
    audioAutoPlay() {
      let audio = document.getElementById('audio');
      this.isOff = false;
      audio.play();
      document.removeEventListener('touchstart',this.audioAutoPlay);
    }

  }
}
</script>

<style lang="less" scoped>
.isOn{
  width: 28px;
  height: 28px;
  position: fixed;
  z-index: 2000;
  top: 30px;
  right: 30px;
  -webkit-animation: rotating 1.2s linear infinite;
  animation: rotating 5s linear infinite;
  background: url("../assets/images/icon/music.png") 0 0 no-repeat;
  background-size:100%;
}
@keyframes rotating {
  from { -webkit-transform: rotate(0) }
  to { -webkit-transform: rotate(360deg) }
}
@-webkit-keyframes rotating {
  from { -webkit-transform: rotate(0) }
  to { -webkit-transform: rotate(360deg) }
}
.isOff{
  width: 28px;
  height: 28px;
  position: fixed;
  z-index: 2000;
  top: 30px;
  right: 30px;
  background: url("../assets/images/icon/music.png") 0 0px no-repeat;
  background-size:100%;
}
</style>


