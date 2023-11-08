import { post } from './api'

const baseUrl = '/home'

export function getHome(data){
    return post(baseUrl + '/getHome',data)
}

/*
* 获取所有数据
* */
export function getAnnualReport(account) {
    return post('/bill/annualReport', { account })
}
