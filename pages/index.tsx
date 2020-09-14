import { FC } from "react";
import Button from "../components/Button";
import { FiMoon } from "react-icons/fi";

const Index: FC = ({ children }) => {
  return (
    <>
      <header>
        <Button p={0} title={<FiMoon />} />
      </header>
      <Button title="Hello world!" />
    </>
  );
};

export default Index;
