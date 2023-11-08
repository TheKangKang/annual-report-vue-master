<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="figure1" id="figure1" :style="cssVar" >
      <img src="../../../assets/images/icon/izuel.png" style="width:50%;margin: 20px">
      <div class="box"  >
        <img src="../../../assets/images/icon/energy.png" style="
    width: inherit;
    padding: 5px;
">
        <div class="leftpassage">
          <div class="container">
            <div class="texts">
              <br>
              <p>同是风华正茂</p>
              <p>何干他人之后</p>
            </div>
            <img src="../../../assets/images/icon/rungirl2.png" width="30%">
          </div></div><br>
        <div class="centerpassage">
          <p>迈开脚步的每一刻</p>
          <p>都有快乐因子在释放</p>
          <p>继续跑步追赶你的速度</p>
          <p>每天向前走 淘汰旧自己</p>
          <p>在汗水中流淌</p>
          <p>歆享四季的果实</p>
          <p>于奋力奔跑里</p>
          <p>呼吸新鲜的空气</p>
          <p>渐渐发觉自己以前</p>
          <p>忽略了的足迹</p>
          <p>慢慢学会欣赏生活的</p>
          <p>每一处美好</p>
        </div>
        <img src="../../../assets/images/icon/building5.png" style="width: inherit">
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
      this.$toast('已经是最后一页啦')    },
    previousPage(){
      this.$router.back()
    },
  }
}
</script>

<style scoped>
.figure1{
  height: 1000px;
  background: url("../../../assets/images/back/background16.png") no-repeat;
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
