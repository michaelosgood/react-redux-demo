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

const mapStateToProps = ({ count, total }) => ({
  count,
  total
})

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
