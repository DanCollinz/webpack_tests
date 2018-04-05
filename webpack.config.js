const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
             'style-loader',
            'css-loader'
           ]
      }
    ]
  }
};

module.exports = config;
