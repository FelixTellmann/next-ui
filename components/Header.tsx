import { Component, FC, MouseEvent } from "react";
import NavButton from "./NavButton";
import Heading from "./Heading";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";

type HeaderProps = {
  logo: {
    title: string;
    img: { src: string; alt: string };
    href: string;
  };
  nav: {
    title: string;
    subtitle?: string;
    href: string;
    target?: string;
  }[];
  socialNav: {
    icon: JSX.Element | string;
    title?: string;
    href: string;
    target?: string;
  }[];
  darkMode: boolean;
  onDarkModeToggle: (event: MouseEvent) => void;
};

export const Header: FC<HeaderProps> = ({ logo, nav, socialNav, darkMode, onDarkModeToggle }) => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo-group">
            <Link href="#">
              <a>
                <Heading h3 weight={800}>
                  FT
                </Heading>
              </a>
            </Link>
          </div>
          <div className="nav-group">
            {nav.map(({ title, subtitle, href, target }, key) => (
              <NavButton key={key} href={href} target={target} mx={["2px", 2]} px={[2, 3]}>
                {title}
              </NavButton>
            ))}
          </div>
          <div className="toggle-group">
            {darkMode ? (
              <NavButton icon secondary onClick={onDarkModeToggle} ml="var(--gap)">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: `drop-shadow( 0 0 3px rgb(240, 255, 50, .85))` }}
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </NavButton>
            ) : (
              <NavButton icon secondary onClick={onDarkModeToggle} ml={[1 , 3]}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: `drop-shadow( 0 0 3px rgb(0, 0, 0, .35))` }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </NavButton>
            )}
          </div>
        </nav>
      </header>

      <style jsx>{`
        @import "styles/mixins";
        .header {
          position: sticky;
          top: 0;
          backdrop-filter: saturate(180%) blur(2rem);
          color: var(--color-header);
          margin-bottom: 3.2rem;
          @include responsive-min(600px) {
            margin-top: 3.2rem;
          }
        }
        :global(.dark-mode .header) {
          backdrop-filter: saturate(100%) blur(2rem);
          background-color: rgba(23, 25, 35, 0.6);
        }
        .nav {
          width: 100%;
          max-width: var(--max-width);
          height: var(--header-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: auto;
          padding: var(--gap-double);
        }

        .logo-group {
        }

        .nav-group {
          display: flex;
          flex: 1;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
};

export default Header;
