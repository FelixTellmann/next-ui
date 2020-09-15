import React, { FC, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";
import Timeline from "../components/Timeline";
import NavButton from "../components/NavButton";

const Index: FC = ({ children }) => {
  const [showFullTimeline, toggleShowFullTimeline] = useState<boolean>(false);
  const TIMELINE_DATA = [
    {
      year: "2020",
      items: [
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
      ],
    },
    {
      year: "2019",
      items: [
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
      ],
    },
  ];
  const OLDER_TIMELINE_DATA = [
    {
      year: "2018",
      items: [
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
      ],
    },
    {
      year: "2017",
      items: [
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
      ],
    },
    {
      year: "2016",
      items: [
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
        {
          title: "Moved to Cape Town",
          description: "I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="intro">
        <Heading h2 as="h1">
          Hi, i'm Felix Tellmann
        </Heading>
        <P noMargin>I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I teach people coding and have been building things for the web for the last 6 years.</P>
      </section>
      <section>
        <Heading h3 as="h2" mb={3}>
          Timeline
        </Heading>
        <Timeline timelineData={showFullTimeline ? TIMELINE_DATA.concat(OLDER_TIMELINE_DATA) : TIMELINE_DATA} />
        {showFullTimeline ? (
          <NavButton mx="auto" my={4} d="flex" weight={600} fs="1.4rem" onClick={() => toggleShowFullTimeline(!showFullTimeline)}>
            Show Less <FiChevronUp style={{ display: "inline-flex", marginLeft: "var(--gap)" }} />
          </NavButton>
        ) : (
          <NavButton mx="auto" my={4} d="flex" weight={600} fs="1.4rem" onClick={() => toggleShowFullTimeline(!showFullTimeline)}>
            Show More <FiChevronDown style={{ display: "inline-flex", marginLeft: "var(--gap)" }} />
          </NavButton>
        )}
      </section>
      <style jsx>{`
        section {
          margin: var(--gap-double) 0;
          :first-of-type {
            margin: 0 0 var(--gap-double);
          }
        }
      `}</style>
    </>
  );
};

export default Index;
