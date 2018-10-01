const path = require('path') 
require('@babel/polyfill')

module.exports = {
    entry: {
        index: ['@babel/polyfill', './src/index.js'],
        edit: ['@babel/polyfill', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        open: true
    },
    devtool: 'source-map'
}

