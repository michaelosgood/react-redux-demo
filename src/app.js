import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export const App = ({ count, total, increment, decrement }) =>
  <div>
    <h1>Awesome Counter</h1>
    <p>{ count }</p>
    <button onClick={ increment }> + </button>
    <button onClick={ decrement }> - </button>
    <p>You clicked { total } times</p>
  </div>

const mapState = ({ count, total }) => ({ count, total })

const mapDispatch = {
  increment: actions.increment,
  decrement: actions.decrement
}

export default connect(mapState, mapDispatch)(App)
