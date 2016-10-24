import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './app'
import * as reducers from './reducers'

const devTools = window.devToolsExtension || (() => _ => _)
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, devTools())

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.querySelector('#app')
)
