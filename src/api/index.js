/*
 * @Author: beyondouyuan
 * @Date:   2018-04-18 20:05:37
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-05-06 18:33:44
 */
// import qs from 'qs'
import request from '../utils'
import parseAPI from './urls'

export const requestLogin = accesstoken => {
    return request({
            url: parseAPI('accesstoken'),
            method: 'get',
            params: {
                accesstoken
            }
        })
        .then(res => res.data)
}

export const requestTopics = option => {
    const setting = {
        url: parseAPI('topics'),
        method: 'get',
        params: {
            page: 1,
            tab: 'all',
            limit: 20,
            mdrender: false
        }
    }
    Object.assign(setting, option)
    return request({
            ...setting
        })
        .then(res => res.data)
}

export const requestTopic = option => {
    const setting = {
            url: parseAPI('topic'),
            method: 'GET',
            params: {
                mdrender: true
            }
        }
        // 合并自定义参数
    Object.assign(setting, option)
    return request({
            ...setting
        })
        .then(res => res.data)
}

export const requestMessage = option => {
    const setting = {
            url: parseAPI('message'),
            method: 'GET',
        }
        // 合并自定义参数
    Object.assign(setting, option)
    return request({
            ...setting
        })
        .then(res => res.data)
}