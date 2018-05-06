/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:07:09
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 18:39:10
*/

import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../containers/Home'
import Collections from '../containers/Collections'
import Login from '../containers/Login'
import Message from '../containers/Message'
import Release from '../containers/Release'
import Topic from '../containers/Topic'
import User from '../containers/User'
import NotFound from '../containers/NotFound'

const Routes = () => {
    return (
        <Router>
            <div className="router-container">
                <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/topic/:id" component={Topic} />
                        <Route path="/messages/" component={Message} />
                        <Route path="/release/:id" component={Release} />
                        <Route path="/user/:loginname" exact component={User} />
                        <Route path="/user/:loginname/collect" component={Collections} />
                        <Route component={NotFound} />
                    </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Routes