"use strict";

const loaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = function modify(baseConfig) {
  const config = Object.assign({}, baseConfig);

  const babelLoaderConfig = loaderFinder('babel-loader');
  const javascriptRule = config.module.rules.find(babelLoaderConfig);

  javascriptRule.use.find(babelLoaderConfig).options.plugins.push([
    require.resolve('babel-plugin-named-asset-import'),
    {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
        },
      },
    },
  ]);

  return config;
};
