import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'
import configureStore from './redux/store'

import './index.css'

const preloadedState = window.__PRELOADED_STATE__ || {}
const store = configureStore(preloadedState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
