import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'
import App from './app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => _ => _)
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, devTools())

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.querySelector('#app')
)
