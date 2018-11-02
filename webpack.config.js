const path = require('path') 
require('@babel/polyfill')

module.exports = {
    entry: {
        index: ['@babel/polyfill', './src/index.js'],
        edit: ['@babel/polyfill', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'docs/scripts'),
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
                    "resolve-url-loader", // fixes issue where webpack can't use css background images
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                // fixes issue where webpack can't use css background images
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '../images/[name].[ext]'
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname, 'docs'),
        open: true,
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}

