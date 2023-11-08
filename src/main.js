import Vue from 'vue'
import App from './App.vue'
import './assets/colorConfig.css'
import './assets/animation.css'
import router from './router'
import themeColor from './assets/themeColor'
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import vueTouch from 'kim-vue-touch';
import './assets/global.css'
import './utils/global'
import './permission'
import store from './store'
// import 'main-layout'
Vue.use(AOS)
Vue.use(vueTouch)

Vue.config.productionTip = false
Vue.prototype.themeColor = themeColor

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
