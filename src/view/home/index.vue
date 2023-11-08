<template>
<!--    <div class="home" id="home" :style="cssVar">-->
  <div  v-swipeup="changePage">
<!--    分享图片begin-->
    <div class="home" id="home" :style="cssVar">
<!--      //动画元素-->
      <div data-aos="fade-left" data-aos-duration="1000" class="element-sun"></div>
      <div data-aos="fade-right" data-aos-duration="1500" class="element-cloud-right"></div>
      <div data-aos="fade-up" data-aos-duration="1500" class="element-whale"></div>
      <div data-aos="fade-left" data-aos-duration="1500" class="element-cloud-top"></div>
      <div data-aos="fade-right" data-aos-duration="2000" class="element-cloud-left"></div>
      <div data-aos="fade-right" data-aos-duration="1000" class="element-cloud-right"></div>
      <div data-aos="fade-right" data-aos-duration="2000" class="element-c1"></div>
<!--      //生成图片-->
<!--      <div class="popupDiv" id="showImg" v-show="showImg">
        <van-popup class="imgPopup" round v-model="showImg">
          <van-image width="45vh" height="80vh" fit="fill" :src="dataURL" />
        </van-popup>
      </div>-->
      <!--      //文案-->

      <div data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0"
           data-aos-duration="500"
           class="myText"
      >

      <div>
          <div> Hi,<span style="font-weight: bold">{{sName}}</span></div>

          <!--        <div data-aos="zoom-in"></div>-->
          <div v-for="(val,key) in textList" :key="key">{{val}}</div>
        </div>
      </div>
<!--      生成链接的弹框-->
<!--      <div id="showLink" v-show="showLink">
        <van-popup class="linkPopup" round v-model="showLink" style="background-color: #CCCCFF;">
          <div class="shareMsg">{{shareMessage}}</div>
          <p class="shareLink">{{shareLink}}</p>
        </van-popup>
      </div>-->
<!--      展示协议-->
<!--      <div class="protocol">-->
<!--        <input class="checkbox" type="checkbox" :checked="isAgree"  @change="isAgree = $event.target.checked"/>-->
<!--        <div>授权使用一卡通数据生成报告 <span style="color: blue" @click="getProtocol">《授权协议》</span></div>-->
<!--      </div>-->

      <van-popup
          v-model="showProtocol"
          closeable
          position="bottom"
          round
          :style="{ height: '60%' }"
      >
        <div class="protocolBox">
          <div class="protocolTitle">授权协议</div>
          <div v-for="(val,key) in protocolContext" :key="key" class="protocolContent">
            {{val}}
          </div>
        </div>

      </van-popup>


    </div>
<!--    分享图片end-->
<!--    <button @click="download()" style="position: absolute;right: 0;top: 0">下载</button>-->
<!--    分享的按钮-->
<!--    <van-popover
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        @select="onSelect"
        class="shareBtnPopup"
        theme="light"
        placement="left-start"

    >
      <template #reference>
&lt;!&ndash;                <van-button icon="plus" color="linear-gradient(to right, #e0cbee, #e6c8f9)" size="mini" type="primary"></van-button>&ndash;&gt;
        <div class="shareBtn"><div class="share"></div></div>
      </template>
    </van-popover>-->
<!-- 分享部分 -->
    <Share img-id="#home" @showImg="downloadImg" @showLink="shareLink"/>
    <ShareImage :show-img="showImg" :data-url="dataUrl" @closeImg="closeImg"/>
    <ShareLink :show-link="showLink" @closeShareLink="closeLink"/>

    <div class="bottom">
      <van-icon name="arrow-up" size="40" :color="themeColor.orange" class="heart"/>
      <van-icon name="arrow-up" size="40" :color="themeColor.orange" class="heart"/>
      <!--        <div>向上滑动</div>-->
    </div>

  </div>


</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import {Popup} from 'vant';
// import {Image as VanImage} from 'vant';
// import {Popover} from 'vant';
import {Button} from "vant";
import AOS from "aos"
// import {getHome} from "@/api/home";
// import html2canvas from "html2canvas";
import {getHome} from "@/api/home";
// import {getShareLink} from "@/api/shareLink";
import {Toast} from "vant";
import Share from "@/components/Share";
import ShareLink from "@/components/ShareLink";
import ShareImage from "@/components/ShareImage";
import { mapState } from 'vuex'

Vue.use(Icon);
Vue.use(Popup);
// Vue.use(VanImage);
// Vue.use(Popover);
Vue.use(Button);
Vue.use(Toast);


export default {
  name: "index",
  components: { Share, ShareLink, ShareImage },
  data() {
    return {
      // studentId:'2019000001',
      // sName:'宝儿',
      textList: {

        text1: "2022年你与校园共度疫情",
        text2: "春夏秋冬,每一刻都值得铭记",
        text3:"一起去看看你的2022吧"


      },
      protocolContext:{
        t1:"1.为了生成您的年度账单报告，" +
            "i中南大团队&识意团队将根据您的授权查询您2022年1月1日至2022年12月31日期间，" +
            "您在中南大的消费数据，并据此进行汇总统计分析，以用于本活动页面向您进行信息展示。",
        t2:"2.您的年度账单报告为算法自动生成结果，可能会与实际有偏差，" +
            "i中南大团队&识意团队无法保证相关数据的绝对准确性和有效性。",
        t3:"3.活动页面包含您的个人信息，当您选择向其他人转发活动页面的截图，其他人会看到上述信息，请谨慎选择。",
        t4:"4.除上述声明目的外，i中南大团队&识意团队不会对本次查询的信息作其他处理。"
      },
      showImg: false,
      showLink:false,
      dataUrl: '',
     /* shareMessage:'复制链接分享你的年度账单',
      showImg: false,
      showLink:false,
      firstFlag: false,
      dataURL: '',
      showPopover:false,
      shareLink:'分享链接***',
      actions:[{text:"分享图片"},{text: "分享链接"}],*/
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
  methods: {
    //路由到食堂页
    changePage() {
      if(this.isAgree)
      this.$router.push({path: '/class'})
      else{
          Toast("勾选同意协议方可查看")
      }
    },
//获取学生名字
    getName(){
      getHome().then(res=>{
        this.sName=res.data.sName;
      })
    },
/*//执行下载图片函数
    download() {
      const that = this
      that.$nextTick(function () {
        html2canvas(document.querySelector("#home")).then(canvas => {
          let imgUrl = canvas.toDataURL('image/png')
          that.showImg = true
          that.dataURL = imgUrl
          that.firstFlag = false
          Toast({
            message:'长按下载图片',
            position:'bottom'
          })
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
        // setTimeout(console.log('延时3000'),1000)
        Toast({
          message:'长按下载图片',
          position:'bottom',
          duration: 6000
        })


      }
      if(action.text=='分享链接'){
        // this.getLink()
        this.getLinkHere()
      }
    },*/
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
    },
    getProtocol(){
      this.showProtocol=true
    }

  },
  // watch:{
  //   isAgree:function (){
  //     if(isAgree==true)
  //
  //   }
  // },
  mounted() {
    AOS.init();
    // this.getName();

    // window.myVue=this;
    // this.login(this.studentId);
  }
}
</script>

<style scoped>
*{
  margin: 0;
  /*padding: 0;*/

}
.home{
  margin: 0px;
  background: url("../../assets/image/background/home.png") no-repeat;
}
.myText{
position: absolute;
  /*margin-left: 20px
  ;*/
  /*position: relative;*/
  left: 40px;
  top: 40%;
  /*margin-top: 220px;*/
  /*margin-top: 240px;*/
  height: 200px;
  width: 300px;
  color: #767879;
  /*font-family: "FZShuTi";*/
  font-size: 16px;
  line-height: 32px;
  text-align: center;
}
.sName{
  position: relative;
  right: 80%;
  top: 10%;
  font-family: "fangsong";
  font-size: 24px;
  /*font-weight: bold;*/
  /*color: #ff9966;*/
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
.element-whale{
  position:absolute;
  left: 6px;
  top: 60%;
  width: 211px;
  height: 275px;
  /*height: 40%;*/
  /*width: 50%;*/
  background:url("../../assets/image/background/鲸鱼.png") no-repeat;
  background-size: 100% 100%;
}
.element-sun{
  position:absolute;
  right:15%;
  top:5%;
  width: 15%;
  height: 9%;
  background:url("../../assets/image/background/椭圆.png") no-repeat;
  background-size: 100% 100%;
}
.element-cloud-top{
  position:absolute;
  right:0;
  top:10%;
  width: 35%;
  height: 9%;
  background:url("../../assets/image/background/大云.png") no-repeat;
  background-size: 100% 100%;
}
.element-cloud-left{
  position:absolute;
  left:250px;
  top:500px;
  width: 26%;
  height: 4%;
  background:url("../../assets/image/background/云.png") no-repeat;
  background-size: 100% 100%;
}
.element-cloud-right{
  z-index: 2;
  position:absolute;
  left:10px;
  top:180px;
  width: 26%;
  height: 4%;
  background:url("../../assets/image/background/云.png") no-repeat;
  background-size: 100% 100%;
}
.element-c1{
  /*z-index: -1;*/
  position:absolute;
  left:-100px;
  top:80px;
  height: 250px;
  width: 260px;
  background:url("../../assets/image/background/c1.png") no-repeat;
  background-size: 100% 100%;
}
.popupDiv{
  position: absolute;
  left: 50%;
  right: 50%;
}

#myText{
  position: absolute;
  left: 10px;
  top: 20px;
}

.protocol{
  position: absolute;
  bottom: 20px;
  left: 70px;
  z-index: 2;
  color: #766a75;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.checkbox{
  margin-right: 5px;
}
.protocolBox{
  padding: 30px 20px 20px 20px;
}
.protocolTitle{
  font-size: 22px;
  text-align: center;
  color: dimgrey;
  margin-bottom: 10px;
}
.protocolContent{
  font-size: 19px;
  color: #767879;
}

</style>
