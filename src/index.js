import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Store from './store'
import { Provider } from 'mobx-react'

import registerServiceWorker from './registerServiceWorker'


import './assets/style.scss'
import './assets/media.scss'

const store = new Store()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)
registerServiceWorker();
