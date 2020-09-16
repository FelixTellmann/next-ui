import React, { FC, useState } from "react";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";
import Input from "../components/Input";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Blog: FC = ({ children }) => {
  return (
    <>
      <section id="blog">
        <Heading h2 as="h1">
          Blog
        </Heading>
        {/* TODO Calculate Numbers dynamically*/}
        <P>I've been writing online since 2020, mostly about web development and tech careers. In total, I've written 1 articles on this site. Use the search below to filter by title.</P>
        <Input placeholder="Search Articles" icon={<FiSearch />} />
      </section>
      <Link href="/blog/pigs"><a>Pigs</a></Link>
      {/*<section id="blog-preview">
         TODO: Dynamic Blog injection for homepage
        <Heading h3 as="h2" mb={3}>
          All Posts
        </Heading>
        <Link href="#">
          <a>
            <Heading h5 as="h3">
              Blog title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsa necessitatibus voluptas?
            </Heading>
            <P mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum obcaecati officia quas ut! Ab amet aut consequuntur corporis culpa error et facilis, inventore laborum laudantium
              nulla rem sit voluptates.
            </P>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Heading h5 as="h3">
              Blog title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsa necessitatibus voluptas?
            </Heading>
            <P mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum obcaecati officia quas ut! Ab amet aut consequuntur corporis culpa error et facilis, inventore laborum laudantium
              nulla rem sit voluptates.
            </P>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Heading h5 as="h3">
              Blog title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsa necessitatibus voluptas?
            </Heading>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum obcaecati officia quas ut! Ab amet aut consequuntur corporis culpa error et facilis, inventore laborum laudantium
              nulla rem sit voluptates.
            </P>
          </a>
        </Link>
      </section>*/}
    </>
  );
};

export default Blog;
