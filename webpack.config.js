const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     mode: 'development',
     plugins: [
          new HtmlWebpackPlugin({ template: "./index.html"})
     ],
     entry: __dirname + "/src/index.js",
     module: {
          rules: [
               {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
               },
               {
                    test: /\.js$/,
                    use: {
                         loader: 'babel-loader',
                         options: {
                              presets: ['@babel/preset-env']
                         }
                    }
               }
          ]
     },
     output: {
          path: __dirname + '/dist',
          filename: 'bundle.js'
     }
}