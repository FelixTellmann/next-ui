import { FC } from "react";
import Heading from "./Heading";
import CheckIcon from "../public/IconCheckCircle.svg";
import { P } from "./Paragraph";

type TimelineProps = {
  timelineData: {
    year: string;
    items: {
      title: string;
      description: string;
    }[];
  }[];
};

export const Timeline: FC<TimelineProps> = ({ timelineData }) => {
  return (
    <>
      {timelineData.map(({ year, items }, index) => (
        <>
          <div className="timeline-group">
            <Heading h4 as="h3">
              {year}
            </Heading>
            <ul>
              {items.map(({ title, description }) => (
                <li>
                  <Heading h6 as="h4" mb={1}>
                    <CheckIcon style={{ margin: "0 12px 0 8px", color: "00BFA5" }} />
                    {title}
                  </Heading>
                  <P ml="36px" dangerouslySetInnerHTML={{ __html: description }} />
                </li>
              ))}
            </ul>
          </div>
          {index < timelineData.length - 1 ? <hr /> : ""}
        </>
      ))}
    </>
  );
};

export default Timeline;
