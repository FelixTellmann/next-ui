const path = require("path");

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript with Next.js
    /*newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, "../components")],
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
                [
              "next/babel",
              {
                "preset-env": { },
                "styled-jsx": {
                  "plugins": [
                    [
                      "styled-jsx-plugin-sass",
                      {
                        "sassOptions": {
                          "outputStyle": "nested"
                        }
                      }
                    ]
                  ]
                }
              }
            ], require.resolve("babel-preset-react-app")],
            plugins: ["react-docgen-typescript"],
          },
        },
      ],
    });*/
    /*newConfig.resolve.extensions.push(".ts", ".tsx");*/

    // SCSS preset for Storybook
    newConfig.module.rules.push({
      test: /\.(s*)css$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../styles/global.scss"),
    });

    return newConfig;
  },
};
