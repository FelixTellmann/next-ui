import { CSSProperties, FC, MouseEvent } from "react";
import Link from "next/link";
import { GenericThemeProps, parseGenericThemePropsToStyledJSX } from "../lib/GenericThemeProps";

type ButtonProps = GenericThemeProps & {
  icon?: boolean;
  onClick?: (event: MouseEvent) => void;
  href?: string;
  target?: string;
  secondary?: boolean;
  className?: string;
  style?: CSSProperties;
};

export const NavButton: FC<ButtonProps> = ({ children, icon, onClick, href, target, secondary, className = "", style = {}, ...props }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={`button ${className} ${secondary ? "secondary" : ""}`} target={target} onClick={onClick} style={style}>
            {children}
          </a>
        </Link>
      ) : (
        <button className={`button ${className} ${secondary ? "secondary" : ""}`} onClick={onClick} style={style}>
          {children}
        </button>
      )}
      <style jsx>{`
        @import "styles/mixins";

        .button {
          position: relative;
          min-width: 4rem;
          height: 4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.6rem;
          border: 0;
          border-radius: 0.4rem;
          outline: none;
          background-color: transparent;
          cursor: pointer;
          user-select: none;
          color: inherit;
          font-family: inherit;
          font-size: 1.6rem;
          line-height: 1.2;
          white-space: nowrap;
          text-decoration: inherit;
          transition: all 250ms;
          appearance: none;
          ${icon ? "padding: 0;" : ""}

          &:hover,
          &:focus,
          &:active {
            background-color: var(--color-button);
          }

          &.secondary {
            color: var(--color-text);
            background-color: var(--color-button-secondary);
            &:hover,
            &:focus,
            &:active {
              background-color: var(--color-button);
            }
          }
        }

        .button {
          @include responsive-min(600px) {
            ${parseGenericThemePropsToStyledJSX(props, "tablet-up")}
          }
          @include responsive-min(900px) {
            ${parseGenericThemePropsToStyledJSX(props, "small-up")}
          }
          @include responsive-min(1200px) {
            ${parseGenericThemePropsToStyledJSX(props, "desktop-up")}
          }
          ${parseGenericThemePropsToStyledJSX(props, "mobile-up")}
        }
      `}</style>
    </>
  );
};

export default NavButton;
