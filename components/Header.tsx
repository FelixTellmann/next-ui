import { Component, FC, MouseEvent } from "react";
import NavButton from "./NavButton";
import Heading from "./Heading";
import { FiMoon, FiSun } from "react-icons/fi";
import { ImSun } from "react-icons/im";
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
                <ImSun style={{ filter: `drop-shadow( 0 0 3px rgb(240, 255, 50, .85))` }}/>
              </NavButton>
            ) : (
              <NavButton icon secondary onClick={onDarkModeToggle} ml={[1 , 3]}>
                <FiMoon style={{ filter: `drop-shadow( 0 0 3px rgb(0, 0, 0, .35))` }} />
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
