import { post } from './api'

const baseUrl = '/bill/pageSix'

export function getWeSchoolTwo(data){
    return post(baseUrl,data)
}
