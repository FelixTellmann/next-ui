import { FC, MouseEvent } from "react";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  title?: string;
  target?: string;
  onClick?: (event: MouseEvent) => void;
};

export const Link: FC<LinkProps> = ({ title, href, target, onClick, children }) => {
  return (
    <>
      <NextLink href={href}>
        <a target={target} title={title} onClick={onClick}>
          {children}
        </a>
      </NextLink>
      <style jsx>{`
        a {
          color: inherit;
          transition: 0.1s;

          &:hover,
          &:focus,
          &:active {
            filter: brightness(0);
          }
        }
      `}</style>
    </>
  );
};

export default Link;
