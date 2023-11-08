<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="classFirst" id="classFirst" :style="cssVar" >
      <!--      //文案-->
      <div class="text_pop">
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div class="myText">
            <div class="title">2022年</div>
            <div>你一共上过<span>{{totalClassNumber}}</span> 节课</div>
            <div>累计<span>{{totalHours}}</span> 小时</div><br>
              <div class="title1">其中有:</div>
              <div><span>{{morningClass}}</span> 节早八</div>
              <div><span>{{nightClass}}</span> 节晚课</div>
          </div>

        </div>

      </div>
      <div class="circle"><img src="../../../assets/images/icon/circle2.png" height="120px" width="120px"> </div>
      <div class="arrow"><img src="../../../assets/images/icon/arrow1.png" height="50px" width="70px"></div>
      <div class="girl" :style="cssGirl"><img src="../../../assets/images/icon/girl.gif" height="150px" width="80px"></div>
      <div class="global" :style="cssWidthG"><img src="../../../assets/images/icon/global.png" :style="cssWidth"></div>
    </div>
    <!-- 分享部分 -->
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
      totalClassNumber:'1000',
      totalHours:'888',
      morningClass:'999',
      nightClass:'88'
    }
  },
  computed:{
    cssVar(){
      return {
        'height': document.documentElement.clientHeight + 'px'
        // 'height': 800 + 'px'

      }
    },
    cssWidthG () {
      return {
        'height': (document.documentElement.clientWidth)/2 + 'px',
        'width': (document.documentElement.clientWidth)/2 + 'px',
        'left':(document.documentElement.clientWidth)/4 + 'px',

      }
    },
    cssWidth () {
      return {
        'height': (document.documentElement.clientWidth)/2 + 'px',
        'width': (document.documentElement.clientWidth)/2 + 'px'
      }
    },
    cssGirl () {
      return {
        'bottom': (document.documentElement.clientWidth)/2-30 + 'px'
      }
    }
  },
  mounted() {
    document.body.style.overflow='hidden'
    correctPullDown()
    this.get()
  },
  methods: {
    changePage() {
      this.$router.push({path: '/girl/class/second'})
    },
    previousPage(){
      this.$router.back()
    },
    get(){
      const data = this.$store.state.annualData
      console.log(data)
      this.totalClassNumber = data['sum_lesson']
      this.totalHours = data['sum_lesson_time']
      this.morningClass = data['sum_morning_lesson']
      this.nightClass = data['sum_evening_lesson']
    }
  }
}
</script>

<style scoped>
.classFirst{
  height: 1000px;
  background: url("../../../assets/images/back/background2.png") no-repeat;
  background-size: 100% 100%;
  font-family: font2;
}
.heart{
  -webkit-animation: ping 1.4s ease-in-out infinite both;
  animation: ping 1.4s ease-in-out infinite both;
  font-weight: 600;
}
.text_pop{
  position: absolute;
  left: 40px;
  top: 10%;
  height: 300px;
  width: 300px;
}
.title{
  font-family: font1;
  font-weight: normal;
  font-size: 40px;
}
.title1{
  font-size: 30px;
  font-weight: lighter}
.myText{
  font-weight: lighter;
  font-size: 18px;
  line-height: 30px;
  color:#0e6966;
}
.myText span{
  font-family: font3;
  font-size: 30px;
  font-weight: lighter;
  color:#0e6966;
}

.circle{
  position: absolute;
  margin-top: 65%;
  left:60%;
}
.book{
  position: absolute;
  margin-top: 70%;
  left:66%;
}
.arrow{
  position: absolute;
  margin-top: 85%;
  left: 40px;
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
.global{
  position:absolute;
  /*left:25%;*/
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  animation: rotate 15s linear infinite;

  /*width: 350px;*/
  /*height: 350px;*/
}
@keyframes rotate {
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
}
.global img{
  position: absolute;
  /*bottom: 15px;*/
  /*left: -55px;*/
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  /*width: 350px;*/
  /*height: 350px;*/
}

</style>
