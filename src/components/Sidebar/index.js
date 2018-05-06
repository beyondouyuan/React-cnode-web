/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:24
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 19:55:42
*/
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd'
import './sidebar.scss'


@inject(stores => stores)
@observer class SideBar extends Component {
    render() {
        return (
            <aside className="sidebar-container">
                {/*个人信息*/}
                <div className="person-container">
                    {
                        this.props.from !== 'topic' ?
                        (
                            this.props.store.isLogin ?
                            <div>
                                <div className="header-box user-select-none">
                                    个人信息
                                </div>
                                <div className="info-box">
                                    <Link to={`/user/${this.props.store.userInfo.loginname}`}>
                                        <img src={this.props.store.userInfo.avatar_url} alt="头像" />
                                    </Link>
                                    <Link to={`user/${this.props.store.userInfo.loginname}`} className="nickname">
                                        {this.props.store.userInfo.loginname}
                                    </Link>
                                </div>
                                <div className="topic-publish">
                                    <Link to="/release/create">发布话题</Link>
                                </div>
                            </div>
                            :
                            <div className="reade-box">
                                <div className="cnode">CNode社区</div>
                                <div className="reade">
                                    <span>您尚未登录，您可以</span>
                                    <Link to="/login">登录</Link>
                                </div>
                            </div>
                        )
                        :
                        <div>
                                <div className="header-box user-select-none">
                                    作者
                                </div>
                                <div className="info-box">
                                    <Link to={`/user/${this.props.store.author.loginname}`}>
                                        <img src={this.props.store.author.avatar_url} alt="头像" />
                                    </Link>
                                    <Link to={`user/${this.props.store.author.loginname}`} className="nickname">
                                        {this.props.store.author.loginname}
                                    </Link>
                                </div>
                        </div>
                    }
                </div>
            </aside>
        )
    }
}

export default SideBar