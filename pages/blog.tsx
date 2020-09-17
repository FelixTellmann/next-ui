import React, { FC, useState } from "react";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";
import Input from "../components/Input";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import { getAllPostsSlug, getSinglePostData } from "../lib/getBlogPosts";

type BlogProps = {
  postData: {
    slug: string;
    frontMatter: {
      title?: string
      excerpt?: string
      slug?: string
      
    };
  }[];
};

const Blog: FC<BlogProps> = ({ children, postData }) => {
  return (
    <>
      <section id="blog">
        <Heading h2 as="h1">
          Blog
        </Heading>
        <P>I've been writing online since 2020, mostly about web development and tech careers. In total, I've written 1 articles on this site. Use the search below to filter by title.</P>
        <Input placeholder="Search Articles" icon={<FiSearch />} />
      </section>
      <section id="blog-preview">
        <Heading h3 as="h2" mb={3}>
          All Posts
        </Heading>
        {postData.map(({ slug, frontMatter: { title, excerpt } }) => (
          <Link key={slug} href={`/blog/${slug}`}>
            <a>
              <Heading h5 as="h3">
                {title}
              </Heading>
              <P mb={4}>{excerpt}</P>
            </a>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data,
    };
  });
  
  return { props: { postData } };
}
