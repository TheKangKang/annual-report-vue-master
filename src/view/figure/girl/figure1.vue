<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="figure1" id="figure1" :style="cssVar" >
      <img src="../../../assets/images/icon/izuel.png" style="width:50%;margin: 20px">
      <div class="box"  >
        <img src="../../../assets/images/icon/knowledge.png" style="
    width: inherit;
    padding: 5px;
">
        <div class="leftpassage">
          <div class="container">
            <div class="texts">
              <br>
              <p>翩若惊鸿</p>
              <p>婉若游龙</p>
              <p>荣耀秋菊</p>
              <p>华茂春松</p>
            </div>
            <img src="../../../assets/images/icon/studygirl.png" width="30%" >
          </div></div><br>
        <div class="centerpassage">
          <p>读书的每一瞬</p>
          <p>都有新知在产生</p>
          <p>去B-612行星寻找小王子</p>
          <p>轻嗅着花香来到瓦尔登湖湖畔</p>
          <p>和霍尔顿一起做麦田里的守望者</p>
          <p>乘着海明威的小船</p>
          <p>对抗大海的风浪</p>
          <p>跟着余华的脚步</p>
          <p>探索活着的意义所在</p>
          <p>挽着手去走那平凡世界里的</p>
          <p>每一条路</p>
        </div>
        <img src="../../../assets/images/icon/building1.png" style="width: inherit;margin-left: -80px;margin-top:-50px ">

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
      this.$router.push({path: '/girl/figure2'})
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
  background: url("../../../assets/images/back/background12.png") no-repeat;
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
  line-height: 10px;
}
.texts{
  float: left;
  width: 120px;
  height: 100px;
  line-height: 15px;
  margin-left: 10%;
  margin-top: -20px;
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
