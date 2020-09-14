import { AppProps } from "next/app";
import React, { FC } from "react";
import GoogleFonts from "next-google-fonts";
import Header from "../components/Header";
import { FiGithub, FiFacebook, FiTwitter } from "react-icons/fi";
import useDarkMode from 'use-dark-mode';
import "styles/reset.scss";
import "styles/theme.scss";

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  const darkMode = useDarkMode(false);
  
  const LOGO = {
    title: "Felix Tellmann",
    img: { src: "", alt: "Felix Tellmann Logo" },
    href: "#",
  };

  const NAV_DATA = [
    { title: "Home", subtitle: "Hi", href: "#" },
    { title: "Blog", subtitle: "All about coding", href: "#" },
    { title: "About", subtitle: "Get to know me", href: "#" },
  ];

  const SOCIAL_DATA = [
    { icon: <FiGithub />, title: "Github", href: "#", target: "_blank" },
    { icon: <FiFacebook />, title: "Facebook", href: "#", target: "_blank" },
    { icon: <FiTwitter />, title: "Twitter", href: "#", target: "_blank" },
  ];

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      <Header logo={LOGO} nav={NAV_DATA} socialNav={SOCIAL_DATA} darkMode={darkMode.value} onThemeToggle={darkMode.toggle} />
      <Component {...pageProps} />
    </>
  );
};

export default _App;
