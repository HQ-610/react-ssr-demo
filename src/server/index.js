import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter, Route, matchPath} from 'react-router-dom'
import { Provider } from 'react-redux'
import {getStore} from '../store'
import routes from '../routes'

const app = express()
app.use(express.static('public'))
const port = 3000

app.get('/*', (req, res) => {
  const store = getStore()
  // 根据路由的路径，来加载数据
  const matchRoutes = []
  routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) matchRoutes.push(route);
    return match;
  });

  const promises = []

  matchRoutes.forEach(item => {
    if (item.loadData) {
      promises.push(item.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    )
    res.send(
      `<html>
        <head>
          <title>ssr server demo</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.initialState = ${JSON.stringify(store.getState())}
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
      `
    )
  })
})

app.listen(port)

