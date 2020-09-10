const SourcePlugin = require('./addon-sourcecode/webpackPlugin');
const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {

  addons: [
    "@storybook/addon-links",/*
    '@storybook/addon-docs/register',*/
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: true,
          parser: 'typescript'
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@storybook/addon-jest',
    '@storybook/addon-storysource',
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

    /*newConfig.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    // 2b. Run `source-loader` on story files to show their source code
    //     automatically in `DocsPage` or the `Source` doc block.
    newConfig.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });*/
    return newConfig;
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],

};

