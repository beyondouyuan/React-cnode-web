/*
* @Author: beyondouyuan
* @Date:   2018-05-06 17:49:33
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 18:31:37
*/
import  { observable, action } from 'mobx'
import {requestLogin, requestMessage} from '../api'

class Store {

    @observable accessToken = window.localStorage.accessToken || ' ';
    @observable isLogin = false;
    @observable userInfo = {
        avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
        id: '',
        loginname: ''
    };
    @observable messageCount = 0;

    @action login(accessToken, userInfo) {
        window.localStorage.accessToken = window.localStorage.setAccessToken = this.accessToken = accessToken
        this.userInfo = userInfo
        this.isLogin = true
    }

    @action logout() {
        window.localStorage.removeItem('accessToken')
        this.accessToken = ''
        this.isLogin = false
    }

    @action checkLogin() {
        if (this.accessToken) {
            requestLogin(this.accessToken)
                .then(res => {
                    if (res.data.success) {
                        this.isLogin = true
                        this.userInfo = res.data
                    }
                })
                .catch(e => console.log(e))
        }
    }

    @action fetchMessage() {
        requestMessage()
            .then(res => {
                if (res.data.success) {
                    this.messageCount = res.data.data
                }
            })
            .catch(e => console.log(e))
    }
}

export default Store