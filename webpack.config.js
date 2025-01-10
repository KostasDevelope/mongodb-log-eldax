const path = require('path');
module.exports = {
  mode: 'production',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
   optimization: {
     splitChunks: {
      chunks: 'all'
    }
  },
  target: 'node'
};

//https://github.com/ammy82068/express-webpack-poc/tree/main