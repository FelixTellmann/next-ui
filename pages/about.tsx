import React, { FC, useState } from "react";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";
import Input from "../components/Input";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const About: FC = ({ children }) => {
  return (
      <>
        <section id="blog">
          <Heading h2 as="h1">
            About me
          </Heading>
          {/* TODO Calculate Numbers dynamically*/}
          <P>I've been writing online since 2020, mostly about web development and tech careers. In total, I've written
            1 articles on this site. Use the search below to filter by title.</P>
        </section>
      </>
  );
};

export default About;
