import { post } from './api'

const baseUrl = '/bill/pageFour'

export function getCanteenTwo(data){
    return post(baseUrl,data)
}
