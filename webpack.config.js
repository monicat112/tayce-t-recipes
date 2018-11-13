const path = require('path') 
require('@babel/polyfill')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'

    return {
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
                    test: /\.(sc|c)ss$/,
                    use: [
                        {
                            loader:  MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/'
                            }
                        },
                        // 'style-loader',
                        'css-loader',
                        'sass-loader',
                        // this fixes loader issue? https://www.npmjs.com/package/resolve-url-loader
                        'resolve-url-loader' // fixes issue where webpack can't use css background images
                    ]
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
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        plugins : [
            new MiniCssExtractPlugin({
                filename: '../css/style.css',
            })
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase:path.resolve(__dirname, 'docs'),
            open: true,
            publicPath: '/scripts/'
        }
    }

}