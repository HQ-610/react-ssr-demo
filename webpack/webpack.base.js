const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    module:{
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react"]
            }
        }]
    }
}
