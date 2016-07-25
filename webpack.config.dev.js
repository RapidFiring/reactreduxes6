/**
 * Created by MWalters on 25.07.2016.
 * @development
 */

import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //enable debugging
  devtool: 'cheap-module-eval-source-map', // one of many option (check docs)
  noInfo: false, //webpack shows info what webpack is doing
  entry: [
    'eventsource-polyfill', //necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './src/index' // <-- entry point must be last!!
  ],
  target: 'web', // can be set to 'node'
  output: {
    path: `${__dirname}/dist`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { // where is our source
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable automated reload on change
    new webpack.NoErrorPlugin() // help to use hot reloading by supressing errors within webpack
  ],
  module: { // this section tells webpack what file types it should handle
      loaders: [
        {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
        {test: /(\.css)$/, loaders: ['style', 'css']},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loaders: 'file'}, // this and the next 3 lines are necessary for bootstrap font-handling
        {test: /\.(woff|woff2)$/, loaders: 'url?prefix=font/&limit=5000'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
      ]
  }
};