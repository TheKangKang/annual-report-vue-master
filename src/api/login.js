import { post } from './api'

export function login(data){
    return post('/report/login', data)
}

/*
* 获取用户信息
* */
export function getInfo () {
    return post( '/report/getInfo')
}

/**
 * 用户登出
 * @returns {AxiosPromise}
 */
export function logout () {
    return post('/report/logout')
}
