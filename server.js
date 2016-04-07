import express from 'express';
const app = express();

const staticResources = ['app.js', 'style.css', 'css/bootstrap.min.css', 
  'bootstrap-theme.min.css', 'js/bootstrap.min.js', 'css/bootstrap-darkly.min.css',
  'img/dropzone-logo-32x32.png', 'js/dropzone-lib.min.js']

staticResources.forEach( (resource) => {
  app.get(`/${resource}`, (req, res) => {
    if (process.env.PRODUCTION) {
      res.sendFile(`${__dirname}/build/${resource}`);
    } else {
      res.redirect(`//localhost:9090/build/${resource}`);
    }
  });
});

// Serve index page
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}


/******************
 *
 * Express server
 *
 *****************/

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Drop Zone listening at http://%s:%s', host, port);
});
