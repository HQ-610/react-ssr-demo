const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
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
