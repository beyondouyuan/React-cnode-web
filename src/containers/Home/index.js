/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:45
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-10 20:39:06
*/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Pagination } from 'antd'
import SideBar from '../../components/SideBar'
import Topics from '../../components/Topics'
import { getQueryString, queryString } from '../../utils/tools'
import './home.scss'
import { requestTopics } from '../../api'

class Home extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        page: 1,
        total: 9999,
        topics: [],
        mask: false
      }
    }
    componentDidMount() {
        this.setState({
            page: getQueryString('page') || 1
        }, () => {
            this.fetchTopics()
        })
        console.log(this.state.topics)
    }
    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.props.location != prevProps.location) {
            const page = parseInt(getQueryString('page'))
            if (!page) {
                this.setState({
                    page: 1
                }, () => {
                    this.fetchTopics()
                })
                return;
            }
            this.fetchTopics()
        }
    }
    fetchTopics = () => {
        this.setState({
            mask: true
        })
        const startTime = Date.now()
        const condtion = {
            params: {
                page: this.state.page,
                tab: getQueryString('tab') || 'all',
                limit: 20,
                mdrender: false
            }
        }
        requestTopics(condtion)
        .then(res => {
            const endTime = Date.now()
            const requestTime = endTime - startTime // 请求所花时间
            if (requestTime <= 300) {
                setTimeout(() => {
                    this.setState({
                        mask: false
                    })
                }, 300 - requestTime)
            } else {
                this.setState({
                    mask: false
                })
            }
            console.log(res)
            if (res.success) {
                this.setState({
                    topics: res.data
                })
            }
        })
        .catch(e => console.log(e))
    }

    isActive(tab) {
        return getQueryString('tab') === tab
    }
    homeActive = () => {
        const tab = getQueryString('tab')
        return !tab || tab == 'all'
    }
    handleCurrentPageChange = page => {
        this.setState({
            page: page
        })
        const tab = getQueryString('tab') || 'all'
        this.props.history.push({
            pathname: '/',
            search: `?tab=${tab}&page=${page}`
        })
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section className="main-container">
                <div className="topics-container content-container">
                    <nav className="navigation">
                        <NavLink to="/"  isActive={this.homeActive}>全部</NavLink>
                        <NavLink to="/?tab=good" isActive={this.isActive.bind(this, 'good')}>精华</NavLink>
                        <NavLink to="/?tab=share"  isActive={this.isActive.bind(this, 'share')}>分享</NavLink>
                        <NavLink to="/?tab=ask" isActive={this.isActive.bind(this, 'ask')}>问答</NavLink>
                        <NavLink to="/?tab=job" isActive={this.isActive.bind(this, 'job')}>招聘</NavLink>
                        <NavLink to="/?tab=dev" isActive={this.isActive.bind(this, 'dev')}>客户端测试</NavLink>
                    </nav>
                    <div className="topics-list">
                        <Topics topics={this.state.topics} />
                    </div>
                    <div className="pagination-container">
                        <Pagination 
                            current={parseInt(this.state.page)} 
                            onChange={this.handleCurrentPageChange} 
                            total={this.state.total} 
                            pageSize={20} />
                    </div>
                </div>
                <SideBar />
            </section>
        )
    }
}

export default Home