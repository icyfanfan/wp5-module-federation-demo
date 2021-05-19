/**
 * webpack config for modal-app
 */
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  entry: './src/App',
  output: {
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
      }
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
      name: 'modalB',
      filename: 'remoteEntry.js',
      exposes: {
        './Modal': './src/App',
      },
      shared: [
        {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      ],
    }),
  ]
}