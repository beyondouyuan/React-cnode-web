import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Link } from 'react-router-dom'
import Routes from './routes'

/* eslint-disable */
@inject(stores => stores)
@observer class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="go-top">
          <p>返</p>
          <p>回</p>
          <p>顶</p>
          <p>部</p>
        </div>
        <Routes />
      </div>
    )
  }
}

export default App;
