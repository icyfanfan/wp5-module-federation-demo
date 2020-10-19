/**
 * webpack config for host-app
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
    ]
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host-app",
      remotes: {
        modalApp: "modalApp@http://localhost:3001/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: 'index.html',
    }),
  ],
}