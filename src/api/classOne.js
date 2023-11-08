import { post } from './api'

const baseUrl = '/bill/pageOne'

export function getClassOne(data){
    return post(baseUrl,data)
}
