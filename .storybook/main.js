const SourcePlugin = require('./addon-sourcecode/webpackPlugin');
const path = require('path');

module.exports = {

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    './addon-sourcecode/register',
  ],
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    newConfig.module.rules.push({
      test: /!*\.(tsx|mdx|ts|js|jsx)?$/,
      exclude: [/node_modules/, /.storybook/],
      use: [
        {
          loader: path.resolve(__dirname, "addon-sourcecode/sourcecode-loader.js"),
          options: {
            root: path.resolve(__dirname, "../"),
            components: path.resolve(__dirname, "../"),
          },
        },
      ],
      enforce: 'pre'
    });
    newConfig.plugins.push(new SourcePlugin());
    console.log(newConfig.module.rules)
    return newConfig;
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],

};

