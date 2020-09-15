import { FC } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";
import CheckIcon from "public/IconCheckCircle.svg";

const Index: FC = ({ children }) => {
  return (
    <>
      <section className="intro">
        <Heading h2 as="h1">
          Hi, i'm Felix Tellmann
        </Heading>
        <P noMargin>I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I teach people coding and have been building things for the web for the last 6 years.</P>
      </section>
      <section className="timeline">
        <Heading h3 as="h2" mb={3}>
          Timeline
        </Heading>
        <div className="timeline-group">
          <Heading h4 as="h3">
            2020
          </Heading>
          <ul>
            <li>
              <Heading h6 as="h4" mb={1}>
                <CheckIcon style={{ margin: "0 12px 0 16px", color: "00BFA5" }} />
                Re-build my website
              </Heading>
              <P ml="44px">I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.</P>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        section {
          margin: var(--gap-double) 0;
        }
      `}</style>
    </>
  );
};

export default Index;
