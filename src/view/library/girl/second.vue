<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div class="librarySecond" id="librarySecond" :style="cssVar" >
      <!--      //文案-->
      <div class="text_pop">
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="800"
             id="myText">
          <div class="myText">
            <div class="title">2022年</div><br><br><br><br><br>
            <div>你2022年共计进馆<br>
              <!--              原数据为借书次数，字段未修改-->
              <span>{{bookNumber}}</span>次</div>
            <div>校内排行<br>
              第<span>{{rank}}</span>名</div><br>
          </div>

        </div>

      </div>
      <div class="circle"><img src="../../../assets/images/icon/circle9.png" height="120px" width="120px"> </div>
      <div class="books"><img src="../../../assets/images/icon/books1.png" height="80px" width="100px"></div>
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
     bookNumber:10,
     rank:100
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
// if (data['sum_appointment'] !=== undefined && data['sum_appointment_rank'] !=== undefined)
//      {
      this.$router.push({path: '/girl/sports'})
      // }
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
      this.bookNumber = data['sum_borrow_book']
      this.rank = data['sum_borrow_book_rank']
    }
  }
}
</script>

<style scoped>
.librarySecond{
  background: url("../../../assets/images/back/background9.png") no-repeat;
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
  top: 12%;
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
  line-height: 35px;
  color:#0e6966;
}
.myText span{
  font-family: font3;
  font-size: 30px;
  font-weight: lighter;
  line-height: 30px;
  color:#0e6966;
}
.myText .moneyRank{
  font-size: 26px;
}
.circle{
  position: absolute;
  margin-top: 35%;
  left:12%;
}
.books{
  position: absolute;
  margin-top: 43%;
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
