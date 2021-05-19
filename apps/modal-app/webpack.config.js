/**
 * webpack config for modal-app
 */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
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
      name: 'modalAppTestDemo',
      filename: 'remoteEntry.js',
      exposes: {
        './modalA': './src/containers/modalA/modalA',
        './modalB': './src/containers/modalB/modalB',
      },
      shared: [
        {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
        "./src/components",
      ],
    }),
  ]
}