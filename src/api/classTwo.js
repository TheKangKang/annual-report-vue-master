import { post } from './api'

const baseUrl = '/bill/pageTow'

export function getClassTWO(data){
    return post(baseUrl,data)
}
