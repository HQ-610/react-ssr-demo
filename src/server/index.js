import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy'
import { Provider } from 'react-redux'
import {getStore} from '../store'
import routes from '../routes'

const app = express()
app.use(express.static('public'))

app.use('/api', proxy('http://test.com', {
  proxyReqPathResolver: function(req, res) {
    return '/api' + req.url
  }
}))

const port = 3000

app.get('/*', (req, res) => {
  const store = getStore()
  // 根据路由的路径，来加载数据
  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
    )
    const html = `
      <html>
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
    </html>`
    if (context.action === 'REPLACE'){
      res.redirect(301, context.url)
    } else if(context.notFound) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

app.listen(port)

