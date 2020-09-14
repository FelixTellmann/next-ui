import { FC } from "react";
import Button from "../components/Button";
import { FiMoon } from "react-icons/fi";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";

const Index: FC = ({ children }) => {
  return (
    <>
      <header>
        <Button title={<FiMoon />} />
      </header>
      <Heading h3>this is a heading lorem40</Heading>
      <P>This is a paragraph Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda commodi deserunt dolores dolorum eligendi esse exercitationem, fugiat inventore itaque, molestiae, nam neque nesciunt pariatur quo repellendus sapiente ut!</P>
      <Button title="Hello world!" />
    </>
  );
};

export default Index;
