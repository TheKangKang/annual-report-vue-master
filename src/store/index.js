import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'store'
import {getInfo, login} from "@/api/login";
import {getAnnualReport} from "@/api/home";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        info: {},
        hasGetInfo: false,
        annualData: {}
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_INFO: (state, info) => {
            state.info = info
        },
        SET_ANNUAL: (state, data) => {
            state.annualData = data
        },
        RESET_INFO: (state) => {
            state.token = ''
            state.info = {}
            state.annualData = {}
        },
        SET_HAS_GET_INFO: (state, hasGetInfo) => {
            state.hasGetInfo = hasGetInfo
        }
    },
    getters: {
        name: state => state.info.name
    },
    actions: {
        login ({commit}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(res => {
                    const data = res.data
                    storage.set('access_token', data['accessToken'])
                    commit('SET_TOKEN', data['accessToken'])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        LoginByToken ({ commit }, token) {
            return new Promise((resolve) => {
                storage.set('access_token', token)
                commit('SET_TOKEN', token)
                resolve()
            })
        },
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    console.log('info', res)
                    commit('SET_HAS_GET_INFO', true)
                    commit('SET_INFO', res.data)
                    console.log('login', this.state.hasGetInfo)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 获取年度账单数据
        getAnnualData({ commit }, account) {
            return new Promise((resolve, reject) => {
                getAnnualReport(account).then(res => {
                    console.log('annual', res)
                    commit('SET_ANNUAL', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 登出
        Logout ({ commit }) {
            commit('RESET_INFO')
            /*return girl Promise((resolve) => {
                logout().then(() => {
                    commit('RESET_INFO')
                    resolve()
                }).catch(() => {
                    commit('RESET_INFO')
                    resolve()
                })
            })*/
        },

    }
})

export default store
