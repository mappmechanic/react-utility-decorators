var webpack = require("webpack");
var env = process.env.NODE_ENV;
var path = require("path");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "5000";

module.exports = {
  target: "web",
  devtool: 'eval-source-map',
  entry: [
    './src/index.js'
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel'
    }]
  },
  devserver: {
    contentBase: "./public",
    historyApiFallback: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};