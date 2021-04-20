import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import routes from '../routes'
import { Provider } from 'react-redux'
import {getClientStore as getStore} from '../store'

const App = () => (
    <Provider store={getStore()}>
        <BrowserRouter>
            <div>
                {routes.map(route => (
                <Route {...route} />
                ))}
            </div>
        </BrowserRouter>
    </Provider>

)

ReactDOM.hydrate(<App />, document.getElementById('root'))
