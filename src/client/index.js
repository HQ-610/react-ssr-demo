import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from '../Routes'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'hjh'}, action) => {
    return state
}

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    </Provider>

)

ReactDOM.hydrate(<App />, document.getElementById('root'))
