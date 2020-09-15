const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const SCSS = require("@zeit/next-sass");
const path = require("path");
const fs = require("fs");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        /* config for next-optimized-images */
      },
    ],
    [SCSS],
  ],
  {
    /*  entry: './pages/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/snippets'),
    filename: 'my-first-webpack.bundle.js'
  },*/
    webpack(config, { defaultLoaders }) {
      config.module.rules.push(
        {
          test: /\.(png|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          loader: "sass-loader",
          test: /.scss$/,
          options: {
            sassOptions: {
              outputStyle: "expanded",
              sourceMap: true,
            },
          },
        },
        {
          enforce: "pre",
          test: /.scss$/,
          loader: "sass-resources-loader",
          options: {
            resources: fs
              .readdirSync(path.join(process.cwd(), "styles"))
              .filter((file) => file.match(/^_.*\.scss$/))
              .map((file) => "./styles/" + file),
          },
        }
      );
      config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg", ".scss", "*.mdx"];
      return config;
    },
  }
);
