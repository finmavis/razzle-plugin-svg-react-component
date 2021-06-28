const path = require('path')
const loaderFinder = require('razzle-dev-utils/makeLoaderFinder')

module.exports = {
  modifyWebpackConfig({
    webpackConfig,
  }) {
    const config = Object.assign({}, webpackConfig)
    const babelLoaderConfig = loaderFinder('babel-loader')
    const javascriptRule = config.module.rules.find(babelLoaderConfig).use.find(babelLoaderConfig).options
    const svgConfig = [
      require.resolve('babel-plugin-named-asset-import'),
      {
        loaderMap: {
          svg: {
            ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          }
        }
      }
    ]
      
    if (javascriptRule.plugins) {
      javascriptRule.plugins.push(svgConfig)
    } else {
      javascriptRule.plugins = [svgConfig]
    }

    const ownNodeModules = path.resolve(__dirname, 'node_modules')
    config.resolveLoader.modules.push(ownNodeModules)

    return config
  }
}
