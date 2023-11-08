<template>
  <div class="login">
    <div class="header">
      <div><img src="@/assets/image/login/smallLogo.png"></div>
      <div class="name">
        <img src="@/assets/image/login/ChinaName.png">
      </div>
    </div>
    <div class="center">
      <div class="login-form">
        <div class="title">欢迎登录年度账单</div>
        <van-form class="form" @submit="onSubmit">
          <van-field
              label-width="6.5em"
              v-model="account"
              name="account"
              label="学号/教职工号"
              placeholder="学号/教职工号"
              :rules="[{ required: true, message: '请填写学号/教职工号' }]"
          />
          <div class="btn">
            <van-button round block color="#7b98ea" size="small" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
export default {
  name: "index",
  data () {
    return {
      account: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log(values)
      const params = {
        account: values.account,
        type: 1
      }
      this.$store.dispatch('login', params).then(() => {
        this.$router.push({ path: this.redirect || '/' })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  height: 100vh;
  background-size: 100% 100%;
  background: url('../../assets/image/login/back.png') no-repeat;

  .header{
    display: flex;
    flex-flow: row nowrap;
    vertical-align: top;
    height: 5vh;
    img{
      height: 50px;
      padding: 5px;
    }
    .name{
      padding: 10px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 0.8em;
    }
    .name img{
      height: 25px;
    }
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
    background: url("../../assets/image/login/logo1.png") no-repeat center;
    .login-form{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #FFFFFF;
      opacity: 0.9;
      border-radius: 5%;
      padding: 15px;
      width: 300px;

      .title{
        font-size: 20px;
        padding: 20px;
        color: #7b98ea;
      }
      .form{
        padding: 15px 0;
        .btn{
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
