/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:48
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 21:21:45
*/
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './login.scss'

@inject(stores => stores)

@observer class Login extends Component {
    render() {
        return (
            <section className="login-container">
                <div className="login-wrapper">
                    <div className="input-box last">
                        <input
                            type="text"
                            maxLength="50"
                            placeholder="access token"
                        />
                    </div>
                    <div className="get-access">
                        <a ref="https://cnodejs.org/setting" target="_blank">获取access token</a>
                    </div>
                    <div className="btn-container user-select-none">
                        登录
                    </div>
                </div>
            </section>
        )
    }
}

export default Login