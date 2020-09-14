import { Component, FC, MouseEvent } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import NavButton from "./NavButton";
import { P } from "./Paragraph";
import Link from "./Link";

type FooterProps = {
  footerNav: {
    title: string;
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

export const Footer: FC<FooterProps> = ({ footerNav, socialNav, darkMode, onDarkModeToggle }) => {
  return (
    <>
      <footer className="footer">
        <nav className="nav">
          <div className="social-nav-group">
            {socialNav.map(({ icon, title, href, target }, key) => (
              <NavButton key={key} href={href} target={target} mx={[0, 1]} size="48px" fs="18px" icon>
                {icon}
              </NavButton>
            ))}
          </div>
          <div className="footer-nav-group">
            {footerNav.map(({ title, href, target }, key) => (
              <P small noMargin px={2} key={key}>
                <Link href={href} title={title} target={target}>{title}</Link>
              </P>
            ))}
          </div>
        </nav>
      </footer>
      <style jsx>{`
        .nav {
          color: var(--color-muted);
          width: 100%;
          max-width: var(--max-width);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          grid-area: nav;
          margin: auto;
          padding: var(--gap);
        }
        .footer-nav-group {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Footer;
