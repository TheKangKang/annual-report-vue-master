<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="figure1" id="figure1" :style="cssVar" >
      <img src="../../../assets/images/icon/izuel.png" style="width:50%;margin: 20px">
      <div class="box"  >
        <img src="../../../assets/images/icon/first.png" style="
    width: inherit;
    padding: 5px;
">
        <div class="leftpassage">
          <div class="container">
            <div class="texts">
              <br>
              <p>语有珠玑博文雅</p>
              <p>腹有诗书气自华</p>
            </div>
            <img src="../../../assets/images/icon/studyboy2.png" width="40%">
          </div></div><br>
        <div class="centerpassage">
          <p>传闻中的你每一场早八</p>
          <p>都按时到</p>
          <p>每一次网课</p>
          <p>都不缺席</p>
          <p>深度整理每一个疑问</p>
          <p>精心雕琢每一行笔记</p>
          <p>发光不是太阳的权力</p>
          <p>而是你的拼尽全力</p>
        </div>
        <img src="../../../assets/images/icon/building2.png" style="width: inherit;margin-right: -100px;margin-top:-50px ">

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
      this.$router.push({path: '/boy/figure3'})
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
  background: url("../../../assets/images/back/background13.png") no-repeat;
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
  width: 150px;
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

}

</style>
