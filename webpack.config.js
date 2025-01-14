const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
//https://github.com/scottie1984/swagger-ui-express/issues/339

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
            './config.json'
        ]
    })
   ],
   optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: { // keep same path with index.js => swaggerOptions.api
          condition: /^\**!|@swagger/i,
          filename: (fileData) => {
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            return './routes/movie-routes.js';
          },
        },
      }),
    ],
  },
};

//https://github.com/ammy82068/express-webpack-poc/tree/main