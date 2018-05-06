/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:21
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 19:27:16
*/
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { message } from 'antd'

import './header.scss'

@inject(stores => stores)
@observer class Header extends Component {
    /**
     * 登出
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    logout = () => {
        this.props.store.logout()
        message.success('登出等共')
    }

    render() {
        return (
            <header className="header-container">
                <div className="header-wrapper">
                    <Link to="" className="logo user-select-none">
                        <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
                    </Link>
                    <nav className="navigation">
                        <Link to="/">首页</Link>
                        {
                            this.props.store.isLogin && <Link to="/message" className={this.props.store.messageCount > 0 ? 'unread' : ''}>未读信息</Link>
                        }
                        {
                            this.props.store.isLogin ?
                            <a href="javascript:;" onClick={this.logout}>登出</a> :
                            <Link to="/login">登录</Link>
                        }
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header