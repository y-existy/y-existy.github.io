webpack = require('webpack');

module.exports = {
    entry: './app/src/main.ts',
    output: {
      filename: './app/build/src/bundle.js'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
      loaders: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    }
  }