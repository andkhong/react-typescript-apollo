const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CompressionPlugin = require('compression-webpack-plugin');

const { paths, prodAPIS, vendors } = require('./configs');
// const staticSourcePath = path.resolve(__dirname, '..', 'dist'); // Deal with later

module.exports = merge(common, {
  entry: {
    vendor: vendors
  },
  output: {
    filename: '[name].[chunkhash:6].bundle.js',
    chunkFilename: '[name].[chunkhash:6].js'
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: paths.source,
        exclude: paths.nodeModules,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist/bundle', { root: process.cwd(), verbose: true }),
    new webpack.optimize.ModuleConcatenationPlugin(), // Enables Scope hosting, reducing build size  
    new webpack.HashedModuleIdsPlugin(), // Adds Deterministic Hashes for Caching, currently unnecssary but leave it here for now
    new webpack.NamedChunksPlugin(function (chunk) {
      if (chunk.name) return chunk.name;
      for (const m of chunk._modules) {
        if (m.rootModule) {
          return `beenest-${path.basename(m.rootModule.context)}`;
        }
        return `beenest-${path.basename(m.issuer.rawRequest)}-${path.basename(m.rawRequest)}`;
      }
      return null;
    }),
    new HtmlWebpackPlugin({
      template: paths.template,
      filename: 'index.html',
      inject: 'body',
      cache: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     context: staticSourcePath,
    //     postcss: [
    //       autoprefixer({
    //         browsers: [
    //           'last 3 version',
    //           'ie >= 10'
    //         ]
    //       })
    //     ]
    //   }
    // }),
    new ExtractTextPlugin({
      filename: 'style.[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ // Bundles minified core libraries
      name: 'vendor',
      filename: 'beetoken-vendor.[chunkhash:5].js',
      minChunks: Infinity,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true
    })
  ]
});