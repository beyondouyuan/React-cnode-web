/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:56
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-11 18:59:41
*/
import React, { Component } from 'react'
import SideBar from '../../components/SideBar'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { requestTopic } from '../../api'
import { formatDate } from '../../utils/tools'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import './topic.scss'

@inject(stores => stores)

@observer class Topic extends Component {
    @observable loading = true
    @observable topic = {
        author: {
            avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
            loginname: '--',
        },
        author_id: '',
        content: '',
        create_at: Date.now(),
        good: false,
        id: '',
        is_collected: false,
        last_reply_at: Date.now(),
        replies: [],
        tab: '',
        title: '',
        top: false,
        visit_count: 0
    }
    @observable inserBtnText = '回复';

    constructor(props) {
      super(props);
    
      this.state = {};
    }

    switchTo = tab => {
        switch(tab) {
            case 'ask':
                return '问答';
            case 'share':
                return '分享';
            case 'job':
                return '招聘';
            case 'good':
                return '精华';
            default:
                return '';
        }
    }
    transTagText = item => {
        if(item.top) return '置顶';
        if (item.good) return '精华';
    }

    fetchTopic() {
        const condtion = {
            id: this.props.match.params.id
        }
        requestTopic(condtion)
        .then(res => {
            if (res.success) {
                this.topic = res.data
                this.loading = false
            }
        })
        .catch(e => {
            this.props.history.replace('/')
        })
    }
    initMarkdownEditor = () => {

    }
    componentDidMount() {
        this.fetchTopic()
    }
    render() {
        return (
            <div className="topic-container main-container">
                <div className="topic-wrapper">
                    <div className="topic-box">
                        <div className="topic-header">
                            <div className="topic-title">
                                {
                                    (this.topic.top || this.topic.good) &&
                                    <span className="tag">{this.transTagText(this.topic)}</span>
                                }
                                <h1>{this.topic.title}</h1>
                            </div>
                            <div className="topic-info_main">
                                    <div className="topic-info">
                                        <span>发布于 {formatDate(this.topic.create_at)} * 作者</span>
                                        <Link to={`/user/${this.topic.author.loginname}`}>{this.topic.author.loginname}</Link>
                                        <span> * {this.topic.visit_count} 次浏览 * 最后一次编辑于 { formatDate(this.topic.last_reply_at) } *  {this.switchTo(this.topic.tab)}</span>
                                    </div>
                            </div>
                        </div>
                        <div className="content markdown-body" dangerouslySetInnerHTML={{__html: this.topic.content}}></div>
                    </div>
                    {
                        this.topic.reply_count > 0
                        &&
                        <div className="reply-container">
                            <div className="reply-count">{this.topic.reply_count} 回复</div>
                            <ul>
                                {
                                    this.topic.replies.map((item, index) => {
                                        return (
                                            <li key={item.id}>
                                                {/*回复者头像*/}
                                                <div className="avatar">
                                                    <Link to={`/user/${item.author.loginname}`}>
                                                        {/*<Avatar src={item.author.avatar_url} size="large" />*/}
                                                        <img src={ item.author.avatar_url } alt="头像" />
                                                    </Link>
                                                </div>
                                                <div className="reply-main">
                                                    {/*回复者信息*/}
                                                    <div className="reply-author">
                                                        <Link to={`/user/${item.author.loginname}`}>
                                                            {item.author.loginname}
                                                        </Link>
                                                        <span>{index + 1}楼 * {formatDate(item.create_at)}</span>
                                                        {
                                                            this.topic.author.loginname == item.author.loginname && <strong>作者</strong>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="reply-content markdown-body" dangerouslySetInnerHTML={{__html: item.content}}></div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Topic