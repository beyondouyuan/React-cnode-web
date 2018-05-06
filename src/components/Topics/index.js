/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:06:27
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 17:48:56
*/
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/tools'

class TopicList extends Component {
    transTag = topic => {
        if (topic.top) {
            return {
                text: '置顶',
                className: 'top'
            }
        }
        if (topic.good) {
            return {
                text: '精华',
                className: 'good'
            }
        }
        switch(topic.tab) {
            case 'ask':
                return {
                    text: '问答',
                    className: topic.tab
                }
            case 'share':
                return {
                    text: '分享',
                    className: topic.tab
                }
            case 'job':
                return {
                    text: '招聘',
                    className: topic.tab
                }
            case 'good':
                return {
                    text: '精华',
                    className: topic.tab
                }
            case 'dev':
                return {
                    text: '测试',
                    className: topic.tab
                }
            default:
                return {
                    text: '',
                    className: 'default'
                }
        }
    }


    render() {
        return (
            <ul>
                {
                    this.props.topics.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="avatar">
                                    <Link to={`/user/${item.author.loginname}`}>
                                        <img src={item.author.avatar_url} alt="头像" title={item.author.loginname} />
                                    </Link>
                                </div>
                                {
                                    item.reply_count !== undefined &&
                                    <div className="reply-view">{item.reply_count} / {item.visit_count}</div>
                                }
                                {
                                    item.tab && <span className={`tag ${thisi.transTag(item).className}`}>{this.transTag(item).text}</span>
                                }
                                <Link to={`/topic/${item.id}`} className="title">{item.title}</Link>
                                <div className="last-reply_time">
                                    <span>{formatDate(item.last_reply_at)}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

TopicList propTypes = {
  topics: PropTypes.array.isRequired
}

export default TopicList