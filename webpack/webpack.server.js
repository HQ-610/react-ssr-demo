const path = require('path')
const {merge} = require('webpack-merge')
const config = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
    // 比如 require('path')
    // 服务器端是不需要打包进来的
    // 浏览器端会打包进 bundle.js
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)
