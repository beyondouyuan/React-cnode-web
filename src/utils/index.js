/*
 * @Author: beyondouyuan
 * @Date:   2018-04-18 20:07:13
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-05-06 15:45:18
 */
import axios from 'axios'
import {
    message
} from 'antd'
/**
 * [创建axios 实例]
 * @type {[type]}
 */
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

/**
 * [统一拦截请求]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
service.interceptors.request.use(config => {
        console.log(process.env.BASE_API)
        return config
    }, error => {
        console.log(error) // 打印测试
        Promise.reject(error)
    })
    /**
     * [统一拦截响应]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
service.interceptors.response.use(
    response => response,
    error => {
        console.log('error' + error) // 打印测试
        message.error(error.message)
        return Promise.reject(error)
    }
)

export default service