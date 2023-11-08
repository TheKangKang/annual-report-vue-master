<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="figure1" id="figure1" :style="cssVar" >
      <img src="../../../assets/images/icon/izuel.png" style="width:50%;margin: 20px">
      <div class="box"  >
        <img src="../../../assets/images/icon/eat.png" style="
    width: inherit;
    padding: 5px;
">
        <div class="leftpassage">
          <div class="container">
            <div class="texts">
              <br>
              <p>英雄不问出处</p>
              <p>我干饭不问斤数</p>
            </div>
            <img src="../../../assets/images/icon/eatgirl.png" width="30%">
          </div></div><br>
        <div class="centerpassage">
          <p>世上有两种    </p>
          <p>耀眼的光芒    </p>
          <p>一种是太阳    </p>
          <p>一种是    </p>
          <p>你努力干饭的模样</p>
          <p>奶茶可乐冰激淋    </p>
          <p>火锅烤肉麻辣烫    </p>
          <p>智者常会饥饿    </p>
          <p>铁锅炖只大鹅饭来 </p>
        </div>
        <img src="../../../assets/images/icon/building4.png" style="width: inherit;margin-right: -80px;margin-top:-50px ;">

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
      this.$router.push({path: '/girl/figure5'})
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
  background: url("../../../assets/images/back/background15.png") no-repeat;
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
  width: 150px;
  height: 100px;
  margin-top: 20px;
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
