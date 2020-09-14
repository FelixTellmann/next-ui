import { CSSProperties, FC, MouseEvent } from "react";
import Link from "next/link";
import { Property } from "csstype";

type ButtonProps = {
  title: string | any;
  onClick?: (event: MouseEvent) => void;
  href?: string;
  target?: string;
  primary?: boolean;
  secondary?: boolean;
  style?: CSSProperties;
};

export const Button: FC<ButtonProps> = ({ title, onClick, href, target, primary, secondary, style = {}, ...props }) => {

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className="button" target={target} onClick={onClick} style={style}>
            {title}
          </a>
        </Link>
      ) : (
        <button className="button" onClick={onClick} style={style}>
          {title}
        </button>
      )}
      <style jsx>{`
        .button {
          position: relative;
          min-width: 4rem;
          height: 4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.6rem;
          border-radius: 0.4rem;
          outline: none;
          background-color: transparent;
          user-select: none;
          color: #1a202c;
          font-size: 1.6rem;
          line-height: 1.2;
          white-space: nowrap;
          text-decoration: inherit;
          transition: all 250ms;
          appearance: none;

          &:hover,
          &:focus,
          &:active {
            background-color: #e2e8f0;
          }
        }
      `}</style>
    </>
  );
};

export default Button;
