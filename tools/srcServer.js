/**
 * Created by MWalters on 25.07.2016.
 */
'use strict';
/**
 * Source Server Module for development
 * @module tools/srcServer
 */

/** import definition */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/*eslint-disable no-console*/

/** const definition */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
