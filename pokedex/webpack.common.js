const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    script: './src/script.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
