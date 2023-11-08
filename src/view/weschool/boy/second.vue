<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="weschoolSecond" id="weschoolSecond" :style="cssVar" >
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
            <div>使用时长最长的一天是<br>
              <span>{{longestUse}}</span></div>
            <div>最晚登入校园网的时间是<br>
              <span>{{latestLogin}}</span></div>

          </div>

        </div>

      </div>
      <div class="globe"><img src="../../../assets/images/icon/globe.png" height="120px" width="120px"> </div>
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
      // firstMonth: '11',
      // firstDay: '14',
      // lastMonth: '11',
      // lastDay: '14',
      longestUse:'12月3日',
      latestLogin:'23:00',
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
      // if (data['library_appointment_time'] !=== undefined && data['sum_study_time'] !=== undefined&&data['library_appointment_time_rank'] !=== undefined) {
        //      {
         this.$router.push({path: '/boy/library/first'})
        //       return
        //     }
        //    else if (data['sum_appointment'] !=== undefined && data['sum_appointment_rank'] !=== undefined) {
        //      { this.$router.push({path: /boy/sports'})
        //       return
        //     }
      //      else
      //       {
      //          this.$router.push({path: /boy/figure'})
      //      }
    },
    previousPage(){
      this.$router.back()
    },
    get(){
      const data = this.$store.state.annualData
      console.log(data)
      this.longestUse = data['longest_web_use']
      this.latestLogin = data['lastest_web_login']
      // this.totalClassNumber = data['sum_lesson']
      // this.totalHours = data['sum_lesson_time']
      // const date = this.firstTime[0].split('-')
      // this.firstMonth = date[1]
      // this.firstDay = date[2]
      // const lDate = this.lastTime[0].split('-')
      // this.lastMonth = lDate[1]
      // this.lastDay = lDate[2]
    }
  }
}
</script>

<style scoped>
.weschoolSecond{
  background: url("../../../assets/images/back/background7.png") no-repeat;
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
  top: 30%;
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
.globe{
  position: absolute;
  left:60%;
  top:15%
}
</style>
