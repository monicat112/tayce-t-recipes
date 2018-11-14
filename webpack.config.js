const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// exporting a function https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('../css/styles.css')

  return {

    entry: {
        index: ['@babel/polyfill', './src/index.js'],
        edit: ['@babel/polyfill', './src/edit.js']
    },
    output: {
      path: path.join(__dirname, 'docs/scripts'),
      filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: CSSExtract.extract({
                use: [
                    'css-loader',
                    'sass-loader'
                ]
                })
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
    plugins : [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      open: true,
      openPage: '/'
    }
  }
}
