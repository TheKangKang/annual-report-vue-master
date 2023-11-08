import request from "@/utils/request";
import axios from "axios";

/**
 * 发送post请求
 * @param url
 * @param data
 * @returns {AxiosPromise}
 */
export function post (url, data) {
    return request({
        url: url,
        method: 'post',
        data,
        cancelToken: new axios.CancelToken((c) => {this.cancelFun = c})
})
}
