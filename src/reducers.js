import * as actions from './actions'

export const count = (_count = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT: return _count + 1
    case actions.DECREMENT: return _count - 1
    default: return _count
  }
}

export const total = (_total = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT: return _total + 1
    case actions.DECREMENT: return _total + 1
    default: return _total
  }
}
