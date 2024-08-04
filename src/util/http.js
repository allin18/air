import axios from "axios";


/// ===============================================================================================================HTTP
/// 创建 axios 实例
const request = axios.create({
    baseURL: 'http://82.157.28.128:8999',
    timeout: 6000, // 请求超时时间
    // headers: {'Authorization': 'Bearer '},
})
/// 异常拦截处理器
const errorHandler = (error) => {
    if (error.response) {
        // tips
        console.error(error.response)
    }
    return Promise.reject(error)
}
/// request 拦截器
request.interceptors.request.use(config => {
    // const token = ''
    // config.headers['Authorization'] = 'Bearer ' + token
    return config
}, errorHandler)
/// response 拦截器
request.interceptors.response.use((response) => {
    return response.status === 200 ? response.data : errorHandler({response})
}, errorHandler)


/// ================================================================================================================API
export function register(username, password) {
    const url = '/compress_tool/user/register';
    return request({
        url: url,
        method: 'post',
        data: {username, password},
    })
}
export function login(username, password, code = undefined) {
    const url = '/compress_tool/user/login';
    return request({
        url: url,
        method: 'post',
        data: {username, password, code},
    })
}
export function fsCode(username, password) {
    const url = `/compress_tool/user/code?timestamp=${Date.now()}`;
    return request({
        url: url,
        method: 'post',
        data: {username, password},
    })
}
export function forgotPassword(username) {
    const url = '/compress_tool/user/forgotPassword';
    return request({
        url: url,
        method: 'post',
        params: {username},
    })
}
export function updatePassword(username, password) {
    const url = '/compress_tool/user/updatePassword';
    return request({
        url: url,
        method: 'post',
        data: {username, password},
    })
}


