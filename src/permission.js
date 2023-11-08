// import router, {resetRouter} from './router'
// import storage from 'store'
// import store from './store'
import { Toast } from 'vant';
import Vue from 'vue';
import NProgress from 'nprogress'
import router from "@/router"; // progress bar

Vue.use(Toast);

// const whiteList = ['login','CasLogin', 'LoginByToken'] // no redirect whitelist
// const loginRoutePath = '/login'
// const casLoginRoutePath = '/cas/login'
// /cas/login
// const defaultRoutePath = '/'

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    // to.meta
    // if (storage.get('access_token')) {
    //     console.log('to.path', to.path)
    //     if (to.path === loginRoutePath || to.path === casLoginRoutePath) {
    //         next({ path: defaultRoutePath })
    //         NProgress.done()
    //     } else {
    //         console.log('store.getters.hasGetInfo', store.state.hasGetInfo)
    //         // check login user.roles is null
    //         if (!store.state.hasGetInfo) {
    //             // request login userInfo
    //             store.dispatch('getInfo').then(() => {
    //                 console.log('GetInfo successful !')
    //                 store.dispatch('getAnnualData', store.state.info['identification']).then(() => {
    //                     resetRouter()
    //                     const redirect = decodeURIComponent(from.query.redirect || to.path)
    //                     if (to.path === redirect) {
    //                         // set the replace: true so the navigation will not leave a history record
    //                         next({ ...to, replace: true })
    //                     } else {
    //                         // 跳转到目的路由
    //                         next({ path: redirect })
    //                     }
    //                 }).catch(() => {
    //                     Toast.fail('请求用户年度账单数据失败，请重试')
    //                     // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
    //                     store.dispatch('Logout').then(() => {
    //                         next({ path: loginRoutePath, query: { redirect: to.fullPath } })
    //                     })
    //                 })
    //             }).catch(() => {
    //                 Toast.fail('请求用户信息失败，请重试')
    //                 // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
    //                 store.dispatch('Logout').then(() => {
    //                     next({ path: casLoginRoutePath, query: { redirect: to.fullPath } })
    //                 })
    //             })
    //         } else {
    //             next()
    //         }
    //     }
    // } else {
    //     if (whiteList.includes(to.name)) {
    //         // 在免登录名单，直接进入
            next()
        // } else {
        //     // eslint-disable-next-line no-prototype-builtins
        //     if (to.query.hasOwnProperty('admin')) {
        //         next({ path: loginRoutePath, query: { redirect: to.fullPath } })
        //     } else {
        //         next({ path: casLoginRoutePath, query: { redirect: to.fullPath } })
        //     }
        //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        // }
    // }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
