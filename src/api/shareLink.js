import { post } from './api'

const baseUrl = '/ShareLink'

export function getShareLink(data){
    return post(baseUrl + '/getShareLink',data)
}
