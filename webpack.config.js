const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// exporting a function https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {

    entry: {
        index: ['@babel/polyfill', './src/index.js'],
        edit: ['@babel/polyfill', './src/edit.js']
    },
    output: {
        //   path: path.join(__dirname, 'docs'),
      path: path.join(__dirname, 'docs/scripts'),
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        // use: [
        //   "style-loader", // ! This should be dev only, that's what inlines the css. Prod shoul generate the css file.
        //   "css-loader", 
        //   "sass-loader" 
        // ],
        use: CSSExtract.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }]
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
