1. 第一个commit，初始化一个ssr demo
2. 搭建 React Demo
- npm install react -D
- node 遵循的是 commonjs 规范
`const React = require('react')`
- 处理 jsx，配置 webpack，支持 ES6 规范
- 配置 scripts
    - build 增加 watch
    `webpack --config webpack.server.js --watch`
    - 引入 nodemon 监听 build 目录下的文件变更，若变更 重启服务器
    `nodemon --watch build --exec \"node build/bundle.js\"`
    - 引入 npm-run-all
    `npm-run-all --parallel dev:**`
