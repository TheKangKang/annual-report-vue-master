import { post } from './api'

const baseUrl = '/bill/pageFive'

export function getWeSchoolOne(data){
    return post(baseUrl,data)
}
