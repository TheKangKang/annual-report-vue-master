import { post } from './api'

const baseUrl = '/bill/pageSeven'

export function getLibraryOne(data){
    return post(baseUrl,data)
}
