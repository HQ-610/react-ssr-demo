import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from '../routes'
import { Provider } from 'react-redux'
import {getClientStore as getStore} from '../store'

const App = () => (
    <Provider store={getStore()}>
        <BrowserRouter>
            <div>
                {renderRoutes(routes)}
            </div>
        </BrowserRouter>
    </Provider>

)

ReactDOM.hydrate(<App />, document.getElementById('root'))
