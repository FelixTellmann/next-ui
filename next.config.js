const withPlugins = require("next-compose-plugins");
const readingTime = require('reading-time');
const optimizedImages = require("next-optimized-images");
const MDX = require("@next/mdx");
const mdxPrism = require('mdx-prism');
const SCSS = require("@zeit/next-sass");
const MdxEnchanged = require("next-mdx-enhanced");
const path = require("path");
const fs = require("fs");

const mdxOptions = {
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
  },
};

module.exports["mdxOptions"] = mdxOptions;

module.exports = withPlugins(
    [
      [
        optimizedImages,
        {
          optimizeImagesInDev: true,
        },
      ],
      [SCSS],
      process.env.NODE_ENV === "development" ? [MdxEnchanged(mdxOptions)] : [MDX],
    ],
    {
      webpack(config, { isServer }) {
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
            },
        );
        config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg", ".scss", ".mdx"];
        return config;
      },
    },
);
