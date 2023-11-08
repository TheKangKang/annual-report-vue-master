import axios from "axios";
import QS from 'qs';
import Vue from 'vue';
import { Toast } from 'vant';
import storage from 'store'
// import config from '@/config/config'

Vue.use(Toast);

// 创建axios实例
const request = axios.create({
    // API请求默认前缀
    // baseURL: 'http://zuel.vaiwan.com',
    // baseURL: config.host,
    // baseURL:'http://report.vaiwan.com',
    baseURL:'http://localhost:8080',

    // http://10.169.90.57:8085 http://innovation.vaiwan.com
    // 请求超时时间
    timeout: 60000,
    // 请求头设置
    headers: {
        // 内容类型
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // Ajax请求
        'X-Requested-With': 'XMLHttpRequest'
    },
    transformRequest: [
        function (data) {
            // 在请求之前对data传参进行格式转换
            // 将对象序列化成URL的形式，以&进行拼接
            return QS.stringify(data)
        }
    ]
})

// 异常拦截处理器
const errorHandler = (error) => {
    console.log(error) // for debug
    // Toast('无法连接服务')
    return Promise.reject(error)
}

// request interceptor 请求拦截器，在请求发送之前做什么
request.interceptors.request.use(config => {
    const token = storage.get('access_token')
    if (token) {
        config.headers['access_token'] = token
    }
    return config
}, errorHandler)

// response interceptor 响应拦截器
request.interceptors.response.use(response => {
    const res = response.data
    if(res.code !== 0){
        Toast(res.msg || '发生未知错误')
        return Promise.reject(res.msg || 'Error')
    } else {
        return res
    }
},errorHandler)

export default request
