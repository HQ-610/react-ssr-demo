const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(
    `<html>
      <head>
        <title>ssr server demo</title>
      </head>
      <body>
        <h1>SSR Demo</h1>
        <p>hello world</p>
      </body>
    </html>`
  )
})

app.listen(port)

