/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:45
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 20:58:50
*/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Pagination } from 'antd'
import SideBar from '../../components/SideBar'
import './home.scss'


class Home extends Component {
    render() {
        return (
            <section className="main-container">
                <div className="topics-container content-container">
                    <nav className="navigation">
                        <NavLink to="/" >全部</NavLink>
                        <NavLink to="/?tab=good" >精华</NavLink>
                        <NavLink to="/?tab=share" >分享</NavLink>
                        <NavLink to="/?tab=ask" >问答</NavLink>
                        <NavLink to="/?tab=job" >招聘</NavLink>
                        <NavLink to="/?tab=dev" >客户端测试</NavLink>
                    </nav>
                    <div className="topics-list"></div>
                    <div className="pagination-container"></div>
                </div>
                <SideBar />
            </section>
        )
    }
}

export default Home