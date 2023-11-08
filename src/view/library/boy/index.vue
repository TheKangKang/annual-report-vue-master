<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="libraryFirst" id="libraryFirst" :style="cssVar" >
      <!--      //文案-->
      <div class="text_pop">
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div class="myText">
            <div class="title">2022年</div><br>
            <div>你在图书馆年度预约的次数是<br>
              <span>{{appointNumber}}</span>次 </div>
            <div>自习累计时长<span>{{totalStudyHours}}<br></span>小时
            </div>
            <div>排行<span>{{rank}}</span>名</div>
          </div>

        </div>

      </div>
      <div class="books"><img src="../../../assets/images/icon/books.png" height="100px" width="120px"></div>
      <div class="arrow"><img src="../../../assets/images/icon/arrow1.png" height="60px" width="80px"></div>
      <div class="girl" :style="cssGirl"><img src="../../../assets/images/icon/boy.gif" height="150px" width="80px"></div>
      <div class="global" :style="cssWidthG"><img src="../../../assets/images/icon/global.png" :style="cssWidth"></div>
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
      appointNumber:'1000',
      totalStudyHours:'1000',
      rank:'888',
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
        // 'bottom': 0,
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
      this.$router.push({path: '/boy/library/second'})
    },
    previousPage(){
      this.$router.back()
    },
    get(){
      const data = this.$store.state.annualData
      console.log(data)
      this.appointNumber = data['library_appointment_time']
      this.totalStudyHours = data['sum_study_time']
      this.rank = data['library_appointment_time_rank']
    }
  }
}
</script>

<style scoped>
.libraryFirst{
  background: url("../../../assets/images/back/background8.png") no-repeat;
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
  height: 200px;
  width: 300px;
}
.title{
  font-family: font1;
  font-weight: normal;
  font-size: 40px;
}

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
.books{
  position: absolute;
  margin-top: 250px;
  left:65%;
}
.arrow{
  position: absolute;
  margin-top: 320px;
  left:15%;
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
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /*width: 350px;*/
  /*height: 350px;*/
}
</style>
