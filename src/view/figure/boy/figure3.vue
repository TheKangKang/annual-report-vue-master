<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="figure1" id="figure1" :style="cssVar" >
      <img src="../../../assets/images/icon/izuel.png" style="width:50%;margin: 20px">
      <div class="box"  >
        <img src="../../../assets/images/icon/surfing.png" style="
    width: inherit;
    padding: 5px;
">
        <div class="leftpassage">
          <div class="container">
            <div class="texts">
              <br>
              <p>有人相爱    </p>
              <p>有人夜里看海</p>
              <p>有人网上冲浪    </p>
            </div>
            <img src="../../../assets/images/icon/surfingboy.png" width="30%">
          </div></div><br>
        <div class="centerpassage">
          <p>有人相爱    </p>
          <p>有人夜里看海</p>
          <p>有人网上冲浪停不下来</p>
          <p>听歌听曲听网课</p>
          <p>看书看剧看论文</p>
          <p>你的名字是冲浪人    </p>
          <p>在新的一年里 </p>
          <p>也请和校园网一起前行吧!</p>
        </div>
        <img src="../../../assets/images/icon/building3.png" style="width: inherit;margin-right: -100px;margin-top:-200px;">

      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import AOS from "aos"
import {correctPullDown} from "@/utils/global";
Vue.use(Icon);
AOS.init();
export default {
  name: "index",
  data () {
    return {
    }
  },
  computed:{
    cssVar(){
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
  },
  mounted() {
    document.body.style.overflow='hidden'

    correctPullDown()
    this.get()
  },
  methods: {
    changePage() {
      this.$router.push({path: '/boy/figure4'})
    },
    previousPage(){
      this.$router.back()
    },
  }
}
</script>

<style scoped>
.figure1{
  height: 1000px;
  background: url("../../../assets/images/back/background14.png") no-repeat;
  background-size: 100% 100%;
  font-family: font2;
  color:#0e6966;
  text-align: center;
}
.leftpassage{
  color: #0e6966;
}
.centerpassage{
  color: rgb(3, 116, 47);
  text-align: center;
  margin-top: -20px;
  font-size: 14px;
  line-height: 15px;
}
.texts{
  float: left;
  width: 120px;
  height: 100px;
  line-height: 15px;
  margin-left: 10%;
}

.box{
  width: 300px;
  height: 650px;
  background-color: snow;
  border-radius: 15px;
  margin:0 auto;
  font-family: font2;
  display: inline-block;

}

</style>
