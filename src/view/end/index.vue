<template>
  <div v-swipeup="changePage" v-swipedown="previousPage">
    <!--    截取屏幕-begin-->
    <div :style="cssVar"  id="end" >
      <!--      //文案-->
      <div data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0"
           data-aos-duration="500"
           id="myText" class="myText">

        <!--        <div data-aos="zoom-in"></div>-->
        <!--        <div v-for="(val,key) in textList" :key="key">{{val}}</div>-->
        <div>
<!--          <div v-for="(val,key) in textList" :key="key">{{val}}</div>-->
          <div>2022的</div>
          <div>快乐、心酸、DDL</div>
          <div>都已过去</div>
          <div>现在</div>
          <div>让我们一起快乐期末吧</div>
        </div>
      </div>
<!--      <div class="description">-->
<!--        <div class="newYear" style="font-size: 24px;color: #5900cc">2022</div>-->
<!--        <div style="font-size: 18px">我们的故事仍将继续</div>-->
<!--      </div>-->
<!--元素-->
      <div data-aos="fade-down" class="star" data-aos-duration="800"></div>
      <div data-aos="fade-left" class="fish" data-aos-duration="1000"></div>

    </div>

    <!--      //生成图片-->
<!--    <div class="popupDiv" id="showImg" v-show="showImg">
      <van-popup class="popup" :style="{height:'80vh'}" round v-model="showImg">
        <van-image width="45vh" height="80vh" fit="fill" :src="dataURL" />
      </van-popup>
    </div>-->
    <!--      生成链接的弹框-->
<!--    <div id="showLink" v-show="showLink">
      <van-popup :style="{width: '40vh',height: '20vh'}" round v-model="showLink" style="background-color: #CCCCFF" >
        <div style="text-align: center;font-weight: bold">{{shareMessage}}</div>
        <p style="text-align: center;font-weight: lighter;line-height: 50px">{{shareLink}}</p>
      </van-popup>
    </div>
    <van-popover
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        @select="onSelect"
        style="position: absolute;right: 5px;top: 3px;"
        theme="light"
        placement="left-start"

    >
      <template #reference>
        &lt;!&ndash;        <van-button icon="plus" color="linear-gradient(to right, #e0cbee, #e6c8f9)" size="mini" type="primary"></van-button>&ndash;&gt;
        <div style="padding: 20px"><div class="share"></div></div>
      </template>
    </van-popover>-->
<!--    <div class="bottom">
      <van-icon name="arrow-up" size="40" :color="themeColor.orange" class="heart"/>
      <van-icon name="arrow-up" size="40" :color="themeColor.orange" class="heart"/>
      &lt;!&ndash;        <div>向上滑动</div>&ndash;&gt;
    </div>-->
    <!-- 分享部分 -->
    <Share img-id="#end" @showImg="downloadImg" @showLink="shareLink"/>
    <ShareImage :show-img="showImg" :data-url="dataUrl" @closeImg="closeImg"/>
    <ShareLink :show-link="showLink" @closeShareLink="closeLink"/>

  </div>

</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
/*import {Popup} from 'vant';
import {Image as VanImage} from 'vant';
import {Popover} from 'vant';*/
import {Button} from "vant";
import AOS from "aos"
import Share from "@/components/Share";
import ShareLink from "@/components/ShareLink";
import ShareImage from "@/components/ShareImage";
// import {getHome} from "@/api/home";
// import html2canvas from "html2canvas";
// import {getLibrary} from "@/api/library";
// import {getShareLink} from "@/api/shareLink";
Vue.use(Icon);
/*Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Popover);*/
Vue.use(Button);

AOS.init();
export default {
  name: "index",
  components: { Share, ShareLink, ShareImage },
  data(){
    return {

      // textList:{
      //
      //   text1:'始于2022',
      //   text2:'你的快乐，你的心酸',
      //   text3:'你的DDL',
      //   text4:'都已过去',
      //   text5:'现在',
      //   text6:'让我们一起快乐期末吧',
      // },
      description:{
        text7:'2022',
        text8:'我们的故事继续...',
      },
      // shareMessage:'复制链接分享你的年度账单',
      showImg: false,
      showLink:false,
      dataUrl: '',
      /*showPopover:false,
      shareLink:'分享链接***',
      actions:[{text:"分享图片"},{text: "分享链接"}],*/
      access_token:''
    }

  },
  computed:{
    cssVar(){
      return {
        'height': document.documentElement.clientHeight + 'px'
      }
    },
  },
  methods: {
    changePage() {
      this.$router.push({path: '/end'})
    },
    previousPage(){
      this.$router.push({path: '/weschool'})
    },
    /*download() {
      const that = this
      that.$nextTick(function () {
        html2canvas(document.querySelector("#end")).then(canvas => {
          let imgUrl = canvas.toDataURL('image/png')
          that.showImg = true
          that.dataURL = imgUrl
          that.firstFlag = false
        })


      })
    },
    getLink(){
      getShareLink(this.access_token).then(res=>{
        this.shareLink=res.data.shareLink;
        this.showLink=true;
      })

    },
    getLinkHere(){
      this.showLink=true;
    },
    onSelect(action){

      if(action.text=='分享图片'){
        this.download()
      }
      if(action.text=='分享链接'){
        // this.getLink()
        this.getLinkHere()
      }
    }*/
    downloadImg (data) {
      // console.log('data', data)
      this.showImg = data.showImg
      this.dataUrl = data.dataUrl
    },
    shareLink (data) {
      this.showLink = data.showLink
    },
    closeImg () {
      this.showImg = false
    },
    closeLink () {
      this.showLink = false
    }
  }
}
</script>

<style scoped>
#end{
  background: url("../../assets/image/weandend/结尾页-背景(2).png") no-repeat ;
  background-size: 100% 100%;
  font-family: font1;
  color:#0e6966;
}
.bottom{
  position: absolute;
  bottom: 15px;
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
#myText{
  position: absolute;
  left: 65px;
  top: 30%;
  width: 240px;
  height: 220px;
  font-size: 20px;
  color: rgba(10, 38, 89, 0.5);
  font-weight: bold;
  text-align: center;
  line-height: 32px;

}
.description{

  position: absolute;
  z-index: 2;
  width: 200px;
  left: 220px;
  top: 65%;
  line-height: 50px;
  font-weight: bold;
  font-size: 16px;
}
.newYear{
  font-size: 24px;
  color: rgb(239, 156, 107);
}
.fish{
  position: absolute;
  right: 0px;
  top: 400px;
  width: 250px;
  height: 250px;
  background: url("../../assets/image/weandend/鱼儿.png") no-repeat;
  background-size: 100% 100%;
}
.star{
  position: absolute;
  right: 10px;
  top: 35px;
  width: 60px;
  height: 100px;
  background: url("../../assets/image/weandend/星星.png") no-repeat;
  background-size: 100% 100%;
}

</style>
