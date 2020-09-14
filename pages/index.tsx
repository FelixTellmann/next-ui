import { FC } from "react";
import NavButton from "../components/NavButton";
import { FiMoon, FiChevronDown } from "react-icons/fi";
import Heading from "../components/Heading";
import { P } from "../components/Paragraph";

const Index: FC = ({ children }) => {
  return (
    <>
      <header>
        <NavButton icon><FiMoon /></NavButton>
      </header>
      <Heading h3>this is a heading lorem40</Heading>
      <P>This is a paragraph Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda commodi deserunt dolores dolorum eligendi esse exercitationem, fugiat inventore itaque, molestiae, nam neque nesciunt pariatur quo repellendus sapiente ut!</P>
      <NavButton>Hello world!&nbsp;&nbsp;<FiChevronDown /></NavButton>
    </>
  );
};

export default Index;
