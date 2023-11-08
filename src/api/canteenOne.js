import { post } from './api'

const baseUrl = '/bill/pageThree'

export function getCanteenOne(data){
    return post(baseUrl,data)
}

