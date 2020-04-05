// webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app/src/main.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'app/src')
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          //test: /\.min\.css$/,
          test: /\.css$/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {url: false}}
          ]
        },
        {
          test: /\.tsx?$/,
          use: [{loader: 'ts-loader'}]
        },
      ]
    }
  }
