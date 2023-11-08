import { post } from './api'

const baseUrl = '/bill/pageEight'

export function getLibraryTwo(data){
    return post(baseUrl ,data)
}
