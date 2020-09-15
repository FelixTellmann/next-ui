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
            My Gear
          </Heading>
          {/* TODO Calculate Numbers dynamically*/}
          <P>Here's what tech I'm currently using for coding and videos.</P>
        </section>
      </>
  );
};

export default About;
