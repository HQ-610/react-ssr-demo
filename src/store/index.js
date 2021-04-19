import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'hjh'}, action) => {
    return state
  }

const store = createStore(reducer, applyMiddleware(thunk))

export default store
