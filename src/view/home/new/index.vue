<template>
  <div v-swipeup="changePage" v-if="!loading">
    <div class="home" id="home" :style="cssVar">
      <!--      //文案-->

      <div data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0"
           data-aos-duration="500"
           class="myText"
      >
        <div class="title">
          <div >我 的</div>
          <div>2022</div>
          <div>年 度 报 告</div>

      </div>
        <div class="redenvelop"><img src="../../../assets/images/icon/envelop.png" width="65%" ></div>
          <div class="start" @click="changePage">点击开始</div>

        </div>

<!--    <div class="start">-->
<!--      <div style=" width: 200px;height: 50px; background: white">-->
<!--&lt;!&ndash;        <div></div>&ndash;&gt;-->
<!--      点击开启</div></div>-->
<!--      &lt;!&ndash;      展示协议&ndash;&gt;-->
    <div class="protocol">
      <input class="checkbox" type="checkbox" :checked="isAgree"  @change="isAgree = $event.target.checked"/>
      <div style="font-family: font1">同意查询并使用我的数据<br>查看<span style="color:#0e6966;font-family: font1" @click="getProtocol">《授权协议》</span></div>
    </div>
      </div>
    <van-popup
        v-model="showProtocol"
        closeable
        position="bottom"
        round
        :style="{ height: '80%' }"
    >
      <div class="protocolBox">
        <div class="protocolTitle">授权协议</div>
        <div v-for="(val,key) in protocolContext" :key="key" class="protocolContent">
          {{val}}
        </div>
      </div>

    </van-popup>

  </div>
  <div v-else>
   <div class="home center" :style="cssVar">
     <div class="loading-animation-box">
       <img class="loading-animation" src="@/assets/images/icon/smallLogo.png">
       <div class="loading">学年账单正在加载...</div>
     </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import {Popup} from 'vant';
import {Toast} from "vant";
import {mapState} from "vuex";
import AOS from "aos";

Vue.use(Icon);
Vue.use(Popup);
AOS.init();
export default {
  name: "index",
  data () {
    return {
      loading: true,
      protocolContext:{
        t1:"1.学年账单数据来源于您于2022年1月1日至2022年12月31日期间，中南大的消费数据。其中，食堂相关数据时间为2022年1月1日到2022年7月5日；",
        t2:"2.由于数据时间获取等原因，2022级同学及其他部分同学的学年账单只有部分数据或没有数据；",
        t3:"3.活动页面包含您的个人信息，当您选择向其他人转发活动页面的截图，其他人会看到上述信息，请谨慎选择；",
        t4:"4.除上述声明目的外，i中南大团队&识意团队不会对本次查询的信息作其他处理。"
      },
      showProtocol:false,
      isAgree:false
    }
  },
  computed: {
    cssVar() {
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
    ...mapState({
      sName: state => state.info.name
    })
  },
  mounted() {
    document.body.style.overflow='hidden'
    setTimeout(() => {
      this.loading = false
    },3000)
  },
  methods: {
    //路由到食堂页
    changePage() {
      if(this.isAgree) {
        // const data = this.$store.state.annualData
        // sex未确定 假定男0女1
        // if(data['sex'] === 0 ) {
        // if (data['sum_lesson'] !=== undefined && data['sum_lesson_time'] !=== undefined && data['sum_morning_lesson'] !=== undefined && data['sum_evening_lesson'] !=== undefined)
        // {
           this.$router.push({path: '/boy/class/first'})
        // return
        // }
        //    else if (data['most_consume_money_canteen'] !=== undefined && data['most_consume_canteen_money'] !=== undefined) {
        //      { this.$router.push({path: '/boy/cateen/first'})
        //       return
        //     }
        //    else if (data['sum_web_time'] !=== undefined && data['sum_web_flow'] !=== undefined) {
        //     {  this.$router.push({path: /boy/weschool/first'})
        //       return
        //     }
        //    else if (data['library_appointment_time'] !=== undefined && data['sum_study_time'] !=== undefined&&data['library_appointment_time_rank'] !=== undefined) {
        //      { this.$router.push({path: /boy/library/first'})
        //       return
        //     }
        //    else if (data['sum_appointment'] !=== undefined && data['sum_appointment_rank'] !=== undefined) {
        //      { this.$router.push({path: /boy/sports'})
        //       return
        //     }
      // }
        // else
        // {
        // if (data['sum_lesson'] !=== undefined && data['sum_lesson_time'] !=== undefined && data['sum_morning_lesson'] !=== undefined && data['sum_evening_lesson'] !=== undefined)
        // {
        // this.$router.push({path: '/girl/class/first'})
        // return
        // }
        //    else if (data['most_consume_money_canteen'] !=== undefined && data['most_consume_canteen_money'] !=== undefined) {
        //      { this.$router.push({path: '/girl/cateen/first'})
        //       return
        //     }
        //    else if (data['sum_web_time'] !=== undefined && data['sum_web_flow'] !=== undefined) {
        //     {  this.$router.push({path: /girl/weschool/first'})
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
        // }

        // else
        //   {
        //     //   this.$router.push({path: '/noData/middle'})
        //
        //   }
        // }
      // }

      }
      else{
        Toast("勾选同意协议方可查看")
      }
    },
    getProtocol(){
      this.showProtocol=true
    }
  }
}
</script>

<style scoped>
.home{
  height: 100vh;
  background: url("../../../assets/images/back/background1.png") no-repeat;
  background-size: 100% 100%;
  background-size:cover;
}
.redenvelop{
  position: relative;
  left: 0;
  top: 25%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.start{
  width: 150px;
  height: 40px;
  background: white;
  border-radius: 50px;
  /*margin-top:50px;*/
  color:#0e6966;
  border: 8px solid #e5efe6;
  text-align: center;
  position: relative;
  left: 0;
  margin: auto;
  top:40%
}

.center{
  display: flex;
  justify-content: center;
}
.loading-animation-box{
  margin: 0;
  padding: 0;
  position: absolute;
  top: 23%;
  text-align: center;
}
.loading-animation{
  animation:loading 3s linear infinite forwards;
  width: 180px;
  height: 180px;
}
.loading{
  font-size: 19px;
  font-weight: bolder;
  margin-top: 10px;
}
@keyframes loading{
  0%{
    transform:rotate(0deg)
  }
  100%{
    transform:rotate(360deg)
  }
}
.myText{
  position: absolute;
  left: 40px;
  top: 5%;
  height: 200px;
  width: 300px;
  font-size: 19px;
  line-height: 38px;
  text-align: left;
}
.myText span{
  font-family: font3;
  font-size: 32px;
  font-weight: lighter;
  color:#0e6966;
}
.protocol{
  position: absolute;
  width: 100vw;
  bottom: 30px;
  margin: auto;
  left: 0;
  z-index: 2;
  color: black;
  font-size: 3.2vw;
  display: flex;
  align-items: self-start;
  text-align: center;
  justify-content: center;
}
.checkbox{
  /*margin-left: 15%;*/
}

.protocolBox{
  padding: 30px 20px 20px 20px;

}
.protocolTitle{
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
}
.protocolContent{
  font-size: 19px;
  color: #333;
  line-height: 28px;
}
.bottom{
  position: absolute;
  bottom: 15px;
  z-index: 0;
  width: 375px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  padding-bottom: 15px;
  left: 0;
  right: 0;
  text-transform: uppercase;
}
.heart{
  -webkit-animation: ping 1.4s ease-in-out infinite both;
  animation: ping 1.4s ease-in-out infinite both;
  font-weight: 600;
}
.title{
  font-size: 28px;
  text-align: center;
}

</style>
