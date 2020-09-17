import { AppProps } from "next/app";
import React, { FC } from "react";
import GoogleFonts from "next-google-fonts";
import Header from "../components/Header";
import { FiGithub, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

import useDarkMode from "use-dark-mode";
import "styles/reset.scss";
import "styles/theme.scss";
import 'styles/base.scss';
import 'styles/prism.scss';

import Footer from "../components/Footer";

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  const darkMode = useDarkMode(false);

  const LOGO = {
    title: "Felix Tellmann",
    img: { src: "", alt: "Felix Tellmann Logo" },
    href: "/",
  };

  const NAV = [
    { title: "Home", subtitle: "Hi", href: "/" },
    { title: "Blog", subtitle: "All about coding", href: "/blog" },
    { title: "About", subtitle: "Get to know me", href: "/about" },
  ];
  const FOOTER_NAV = [
    { title: "/uses", href: "/uses" },
    { title: "/photos", href: "/photos" },
    { title: "/newsletter", href: "/newsletter" },
  ];

  const SOCIAL_NAV = [
    { icon: <FiGithub />, title: "Github", href: "#", target: "_blank" },
    { icon: <FiFacebook />, title: "Facebook", href: "#", target: "_blank" },
    { icon: <FiTwitter />, title: "Twitter", href: "#", target: "_blank" },
    { icon: <FiMail />, title: "E-Mail", href: "mailto:hi@felixtellmann.com" },
  ];

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      <Header logo={LOGO} nav={NAV} socialNav={SOCIAL_NAV} darkMode={darkMode.value} onDarkModeToggle={darkMode.toggle} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer footerNav={FOOTER_NAV} socialNav={SOCIAL_NAV} darkMode={darkMode.value} onDarkModeToggle={darkMode.toggle} />
    </>
  );
};

export default _App;
