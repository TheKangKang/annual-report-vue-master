<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <div id="middle" :style="cssVar">
      <div data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0"
           data-aos-duration="500"
           class="myText"
      >
        <div>
          <div>你与中南大的故事</div>
          <div>始于<span>{{ year }}</span></div>
          <div>过去一年，好像没留下痕迹</div>
        </div>
      </div>
    </div>
    <!-- 分享部分 -->
    <Share img-id="#library" @showImg="downloadImg" @showLink="shareLink"/>
    <ShareImage :show-img="showImg" :data-url="dataUrl" @closeImg="closeImg"/>
    <ShareLink :show-link="showLink" @closeShareLink="closeLink"/>

    <div class="bottom">
      <van-icon name="arrow-up" size="20" :color="themeColor.orange" class="heart"/>
      <van-icon name="arrow-up" size="20" :color="themeColor.orange" class="heart"/>
      <!--        <div>向上滑动</div>-->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import Share from "@/components/Share";
import ShareLink from "@/components/ShareLink";
import ShareImage from "@/components/ShareImage";
import AOS from "aos";
import ShareMixins from "@/components/ShareMixins";
Vue.use(Icon);
AOS.init();
export default {
  name: "middle",
  components: { Share, ShareLink, ShareImage },
  mixins: [ ShareMixins ],
  computed:{
    cssVar(){
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    }
  },
  data () {
    return {
      year: ''
    }
  },
  mounted() {
    const data = this.$store.state.annualData
    console.log(data)
    this.year = data['identification'].slice(0,4)
  },
  methods: {
    changePage() {
      this.$router.push({path: '/end'})
    },
    previousPage(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#middle{
  height: 100vh;
  background: url("../../assets/images/back/middle.png") no-repeat;
  background-size: 100% 100%;
}
.heart{
  -webkit-animation: ping 1.4s ease-in-out infinite both;
  animation: ping 1.4s ease-in-out infinite both;
  font-weight: 600;
}
.myText{
  position: absolute;
  left: 40px;
  top: 15%;
  height: 200px;
  width: 300px;
  font-size: 19px;
  line-height: 52px;
  text-align: left;
}
.myText span{
  font-size: 32px;
}
</style>
