const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { paths, devPort, devProxys } = require('./configs');
const common = require('./webpack.common.js');
const regex = new RegExp(`${paths.source}`);

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: paths.source,
        exclude: paths.nodeModules,
        use: [
          'style-loader', // Plugin for development, injects css tag to html
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.base, // Assets will be served
    open: true, // Open browser to localhost:port
    // inline: false,
    historyApiFallback: true, // Falls back to index.html; we won't have to set an entry point and add an additional html loader        
    port: devPort,
    proxy: {
      target: devProxys,
      changeOrigin: true
    }
  },
  watchOptions: {
    ignored: paths.nodeModules
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
    new HardSourceWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ // Manifest + Dynamic Imports => Lazy Loading + Incremental Builds (Incredibly fast builds + compile)
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.NamedChunksPlugin(function (chunk) {
      if (chunk.name) return chunk.name;
      for (let m of chunk._modules) {
        if (regex.test(m.context)) {
          return path.basename(m.rawRequest);
        }
      }
      return null;
    }),
    // new BundleAnalyzerPlugin(), // Uncomment to analyze Bundle size
  ]
});