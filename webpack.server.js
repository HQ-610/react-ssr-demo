const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    // 比如 require('path')
    // 服务器端是不需要打包进来的
    // 浏览器端会打包进 bundle.js
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module:{
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react"
                // , ["@babel/preset-env", {
                //     targets: {
                //         // 兼容主流浏览器的最后两个版本
                //         browers: ['last 2 versions']
                //     }
                // }]
            ]
            }
        }]
    }
}
