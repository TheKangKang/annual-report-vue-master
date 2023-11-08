<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div :style="cssVar"  id="end" >
      <!--      //文案-->
      <div data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0"
           data-aos-duration="500"
           id="myText" class="myText">
        <div>
          <div>2022已经过去</div>
          <div>现在让我们一起</div>
          <div>书写 <span>2023</span> 的 <span>传奇</span> 吧</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import AOS from "aos";
Vue.use(Icon);
AOS.init();
export default {
  name: "index",
  computed:{
    cssVar(){
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    }
  },
  methods: {
    changePage() {
      // this.$router.push({path: '/end'})
      this.$toast('已经是最后一页啦')
    },
    previousPage(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#end{
  background: url("../../../assets/images/back/home.png") no-repeat ;
  background-size: 100% 100%;
  font-family: font1;
  color:#0e6966;
}
#myText{
  position: absolute;
  left: 40px;
  top: 25%;
  height: 220px;
  font-size: 19px;
  line-height: 52px;
}
#myText span{
  font-size: 32px;
  font-weight: bolder;
}
</style>
