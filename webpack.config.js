const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
      library: '[name]',
        libraryTarget: 'umd'
  },
   optimization: {
     splitChunks: {
      chunks: 'all'
    }
  },
  target: 'node',
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            './node_modules/swagger-ui-dist/swagger-ui.css',
            './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
            './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
            './node_modules/swagger-ui-dist/favicon-16x16.png',
            './node_modules/swagger-ui-dist/favicon-32x32.png',
            './output.json',
            './config.json'
        ]
    })
   ]
};

//https://github.com/ammy82068/express-webpack-poc/tree/main