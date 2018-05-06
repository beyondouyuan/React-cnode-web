/*
* @Author: beyondouyuan
* @Date:   2018-05-06 14:56:26
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 18:33:48
*/
// const base = 'https://cnodejs.org/api/v1'

const urls = {
    accesstoken: '/accesstoken', // get user detail params accesstoken
    topics: '/topics', // get topic list params tag
    topic: '/topic/', // get topic detail  params id
    collect: '/topic_collect/collect', // post topic collect
    cancelCollect: '/topic_collect/de_collect', // post cancel topic collect
    reply: '/reply/', // post like topic  /reply/:reply_id/ups  like answer
    message: '/message/count', // get un read message count
    messages: '/messages', // get all message
    msgMarkAll: '/message/mark_all', // post mark all readed message
    msgMark: '/message/mark_one/', // post mark one readed message  by message id
    replies: '/topic/', // post add a reply for topic by topic id
    addTopic: '/topics', // post add a  topic
    updateTopic: '/topics/update', // post update topic
    user: '/user', // get user by loinname
    collecttions: '/topic_collect/' // get all collections topic by loginname
}

// 获取对应的请求路径
const parseAPI = api => {
    // return `${basePath}${urls[api]}`
    return `${urls[api]}`
}

export default parseAPI