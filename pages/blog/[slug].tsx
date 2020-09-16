import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Link from "next/link";
import path from "path";
import Heading from "components/Heading";
import Layout from 'layouts';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default Layout;

export const getStaticProps = async ({ params }) => {
  const source = fs.readFileSync(path.join(path.join(process.cwd(), "pages/blog"), `${params.slug}.mdx`));
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content.replace(/import\s+.*?\s+from\s+('|"|`)[\w\d\-\/\.]+\1;?/gi, ""), {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      children: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "pages/blog"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
