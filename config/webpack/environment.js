const { environment } = require('@rails/webpacker')

const OpalWebpackResolverPlugin = require('opal-webpack-resolver-plugin'); // to resolve ruby files

environment.loaders.append('rb', {
  test: /\.(rb|js.rb)$/,
  use: 'opal-webpack-loader'
})

environment.plugins.append(
  'rb',
  new OpalWebpackResolverPlugin('resolve', 'resolved')
)

module.exports = environment
