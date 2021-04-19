import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from './container/Home'

const app = express()
const port = 3000
const content = renderToString(<Home />)

app.get('/', (req, res) => {
  res.send(
      `<html>
      <head>
        <title>ssr server demo</title>
      </head>
      <body>
        <h1>SSR Demo</h1>
        <p>${content}</p>
      </body>
    </html>
      `
  )
})

app.listen(port)

