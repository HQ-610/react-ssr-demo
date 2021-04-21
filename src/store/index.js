import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../container/Home/store'
import {reducer as headerReducer} from '../components/Header/store'

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer
})


export const getStore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument('http://test.com/')))
export const getClientStore = () => {
    return createStore(reducer, window.initialState, applyMiddleware(thunk.withExtraArgument('/')))
}
