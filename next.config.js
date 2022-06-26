/** @type {import('next').NextConfig} */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')
const nextConfig = {
  reactStrictMode: true,
  output: {
    publicPath: 'http://localhost:3003/',
  },
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'blog',
        filename: 'static/runtime/remoteEntry.js',
        exposes: {
            './Blog': './pages/blog'
        },
        shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
]
}

module.exports = nextConfig
