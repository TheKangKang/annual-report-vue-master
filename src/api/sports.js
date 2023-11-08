import { post } from './api'

const baseUrl = '/bill/pageNine'

export function getSports(data){
    return post(baseUrl ,data)
}
