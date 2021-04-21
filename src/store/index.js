import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../container/Home/store'

const reducer = combineReducers({
    home: homeReducer
})


export const getStore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument('http://test.com/')))
export const getClientStore = () => {
    return createStore(reducer, window.initialState, applyMiddleware(thunk.withExtraArgument('/')))
}
