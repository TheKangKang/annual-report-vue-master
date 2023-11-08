<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="canteenSecond" id="canteenSecond" :style="cssVar" >
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
            <div>你一共充值<span>{{investMoney}}元</span></div>
            <div>单日消费消费最多是在<br>
              <span>{{costDate}}</span> <br>
              <span>{{canteen}}</span></div>
          </div>

        </div>

      </div>
      <div class="circle"><img src="../../../assets/images/icon/circle5.png" height="120px" width="120px"> </div>
      <div class="girl" :style="cssGirl"><img src="../../../assets/images/icon/girl.gif" height="150px" width="80px"></div>
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
      investMoney:'1000',
      costDate:'888',
      canteen:'88'
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
      // if (data['sum_web_time'] !=== undefined && data['sum_web_flow'] !=== undefined) {
      //     {
      this.$router.push({path: '/girl/weschool/first'})
      //       return
      //     }
      //    else if (data['library_appointment_time'] !=== undefined && data['sum_study_time'] !=== undefined&&data['library_appointment_time_rank'] !=== undefined) {
      //      { this.$router.push({path: /girl/library/first'})
      //       return
      //     }
      //    else if (data['sum_appointment'] !=== undefined && data['sum_appointment_rank'] !=== undefined) {
      //      { this.$router.push({path: /girl/sports'})
      //       return
      //     }
      //      else
      //       {
      //          this.$router.push({path: /girl/figure'})
      //      }
    },
    previousPage(){
      this.$router.back()
    },
    get(){
      const data = this.$store.state.annualData
      console.log(data)
      this.investMoney = data['sum_charge']
      this.costDate = data['most_consume_money_canteen_date']
      this.canteen = data['most_consume_money_canteen_oneday']
    }
  }
}
</script>

<style scoped>
.canteenSecond{
  background: url("../../../assets/images/back/background5.png") no-repeat;
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

.circle{
  position: absolute;
  margin-top: 10%;
  left:10%;
}
.chicken{
  position: absolute;
  margin-top: 15%;
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
  /*bottom: 15px;*/
  /*left: -55px;*/
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /*width: 350px;*/
  /*height: 350px;*/
}

</style>
