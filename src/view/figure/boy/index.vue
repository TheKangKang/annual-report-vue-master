<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="classFirst" id="classFirst" :style="cssVar" >
      <div class="girl" :style="cssGirl"><img src="../../../assets/images/icon/boy.gif" height="200px" width="100px"></div>
      <div class="title">2022年<br>
        快 来 pick 你 的<br>
       年 度 形 象 吧</div>
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
        // 'height': 800 + 'px'

      }
    },
    cssGirl () {
      return {
        'bottom': (document.documentElement.clientWidth)/1.5 + 'px'
      }
    }
  },
  mounted() {
    correctPullDown()
    this.get()
  },
  methods: {
    changePage() {
      this.$router.push({path: '/boy/figure1'})
    },
    previousPage(){
      this.$router.back()
    },
  }
}
</script>

<style scoped>
.classFirst{
  height: 1000px;
  background: url("../../../assets/images/back/background11.png") no-repeat;
  background-size: 100% 100%;
  font-family: font2;
  color:#0e6966;
  text-align: center;
}
.girl{
  position: absolute;
  /*bottom: 116px;*/
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
}
.title{
  position: absolute;
  font-family: font1;
  font-size: 30px;
  line-height: 50px;
  font-weight: normal;
  top: 65%;
  left:30%;
}

</style>
